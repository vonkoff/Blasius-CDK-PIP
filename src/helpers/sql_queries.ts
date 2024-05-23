import { sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { parseStringPromise } from "xml2js"; // Import the async parseStringPromise
// import { sql_xmlToPG } from "./constants";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import "dotenv/config";
import {
  upsertDeals,
  upsertVehicle,
  upsertGLJEDetail,
  upsertCOA,
} from "../helpers/drizzle_tables";

// Custom coerce function to convert empty strings to null
const coerceToNumberOrNull = (input) => {
  if (input === "") {
    return null;
  }
  return Number(input);
};

// type QueryId = "invtDelta" | "invtBulk";
// const paths: Record<QueryId, string> = {
//   invtDelta: "InventoryVehicle",
//   invtBulk: "InventoryVehicle",
// };
//
interface PathConfig {
  // Extract is namespace
  extract: string;
  // Base is data we are looking for
  base: string;
}
type Path = {
  [key: string]: PathConfig;
};
const vehicles = {
  extract: "InventoryVehicleExtract",
  base: "InventoryVehicle",
};

const deals = {
  extract: "FiSalesClosed",
  base: "FISalesClosed",
};

const GLJE = {
  extract: "AccountingGL",
  base: "GLJEDetail",
};

const COA = {
  extract: "AccountingGL",
  base: "GLCOA",
};

const paths: Path = {
  dywFISC_DateRange: deals,
  dywFISC_Delta: deals,
  dywINVEH_Bulk: vehicles,
  dywIVEH_Delta: vehicles,
  dywACCTGL_JE_DateRange_D: GLJE,
  dywACCTGL_COA_Bulk: COA,
};

type UpsertFunction = (data: any, queryId: string) => Promise<void>;
const upsertFunctionMap: Record<string, UpsertFunction> = {
  dywFISC_DateRange: upsertDeals,
  dywFISC_Delta: upsertDeals,
  dywINVEH_Bulk: upsertVehicle,
  dywIVEH_Delta: upsertVehicle,
  dywACCTGL_JE_Delta_D: upsertGLJEDetail,
  dywACCTGL_JE_DateRange_D: upsertGLJEDetail,
  dywACCTGL_COA_Bulk: upsertCOA,
};

// Main function to process and save each deal
export async function saveXmlToDb(xmlData: string, queryId: string) {
  //! Remove later below when done understanding json results
  try {
    const result = await parseStringPromise(xmlData);

    try {
      const result = await parseStringPromise(xmlData);
      let json = JSON.stringify(result, null, 2);

      const path = Bun.file("./file.txt");
      try {
        // @ts-ignore
        await Bun.write(path, json);
      } catch (error) {
        console.error("Error saving to file:", error);
      }
    } catch (error) {
      console.error("Error parsing XML data:", error);
    }
    //! Remove later above when done understanding json results
    const { extract, base } = paths[queryId];
    const jsonData = result[extract]?.[base];

    if (jsonData && Array.isArray(jsonData)) {
      for (const item of jsonData) {
        try {
          // Flatten item values because each of them is an array
          const flattenedItem = Object.fromEntries(
            Object.entries(item).map(([key, value]) => [
              key,
              Array.isArray(value) ? value[0] : value,
            ]),
          );
          const upsertFunction = upsertFunctionMap[queryId];
          await upsertFunction(flattenedItem, queryId);
        } catch (error) {
          console.error(
            "Error processing XML or saving to the database:",
            error,
          );
        }
      }
      console.log(
        "All deals have been saved successfully with upsert operations.",
      );
    } else {
      console.log("No valid 'FISALES' data found.");
    }
  } catch (error) {
    console.error("Error processing XML or saving to the database:", error);
  }
}
