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

function convertXmlValues(obj: any) {
  for (const key in obj) {
    if (Array.isArray(obj[key]) && obj[key].length > 0) {
      // Extract first element from array if it exists
      obj[key] = obj[key][0];
    }

    // After extracting from array or if it's already a simple type
    if (typeof obj[key] === "string") {
      const trimmed = obj[key].trim();
      // Convert to number if it's a valid number string, otherwise keep as string or convert to null
      if (trimmed === "") {
        obj[key] = null;
      } else {
        const num = parseFloat(trimmed);
        // Use parseFloat and check if the trimmed string is a numeric value
        if (!isNaN(num) && num.toString() === trimmed) {
          obj[key] = num;
        } else {
          obj[key] = trimmed;
        }
      }
      // if (isNaN(obj[key]) && obj[key] !== null) {
      //   console.error(
      //     `Conversion to number failed for key ${key}: original value '${trimmed}', parsed as '${obj[key]}'`,
      //   );
      // }
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      convertXmlValues(obj[key]); // Recursive call for nested objects
    }
  }
}

function parseObjectToFloat(obj) {
  for (const key in obj) {
    // Skip conversion for any date property
    if (key.toLowerCase().includes("date")) {
      continue;
    }
    // Special handling for "leaseEndPercentageRate"
    if (key === "LeaseEndPercentageRate") {
      const percentage = parseFloat(obj[key]);
      if (!isNaN(percentage)) {
        obj[key] = Math.round(percentage); // Convert to integer
        continue; // Move to the next key
      }
    }
    const parsed = parseFloat(obj[key]);
    if (!isNaN(parsed)) {
      obj[key] = parsed;
    }
    // If NaN, obj[key] retains its original string value
  }

  return obj;
}

// type QueryId = "invtDelta" | "invtBulk";
// const paths: Record<QueryId, string> = {
//   invtDelta: "InventoryVehicle",
//   invtBulk: "InventoryVehicle",
// };
//
interface PathConfig {
  extract: string;
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
        convertXmlValues(item);
        const cleanedItem = parseObjectToFloat(item);
        console.log(cleanedItem);
        try {
          const upsertFunction = upsertFunctionMap[queryId];
          await upsertFunction(cleanedItem, queryId);
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
