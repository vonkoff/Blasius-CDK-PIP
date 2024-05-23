import { Hono } from "hono";
import { fetchData } from "./helpers/retrieve_xml";

// ATTLE_DEALER = "3PA115594"
// BRIS_DEALER = "3PA115551"
// FEDRD_DEALER = "3PA115534"
// DANB_DEALER = "3PA115553"
// MIDD_DEALER = "3PA115572"
// NEWB_DEALER = "3PA115576"
// BPO_DEALER = "3PA115573"
// SOUTH_DEALER = "3PA115540"
// NORTH_DEALER = "3PA115539"
// BKIA_DEALER = "3PA98685"
// BGMC_DEALER = "3PA118932"
// LBCC_DEALER = "3PA115533"

// ACCOUNTS
// 1. LBCC
// 2. GMC
// 3. MA
// 4. KIA

const DEALERS = [
  "3PA115533",
  "3PA115594",
  "3PA115551",
  "3PA115534",
  "3PA115553",
  "3PA115572",
  "3PA115576",
  "3PA115573",
  "3PA115540",
  "3PA115539",
  "3PA98685",
  "3PA118932",
];

// No MA, GMC, KIA, NEWB
const DEALERSLESS = [
  "3PA115533",
  "3PA115551",
  "3PA115534",
  "3PA115553",
  "3PA115572",
  "3PA115573",
  "3PA115540",
  "3PA115539",
];

const LBCCDealer = ["3PA115533"];

interface RequestParams {
  dealerId: string;
  urlParam: string;
  queryId: string;
  additionalParams: { [key: string]: any }; // Headers for URL request
}

// Function to format a date to the required string format
const formatDate = (date: Date): string => {
  return date.toISOString().slice(0, -1) + "Z"; // Convert to UTC and format
};

const endOfPreviousDay = new Date();
endOfPreviousDay.setUTCHours(23, 59, 59, 999); // Set to end of previous day
endOfPreviousDay.setUTCDate(endOfPreviousDay.getUTCDate() - 1);

const startTimestamp = formatDate(endOfPreviousDay);
const endTimeStamp = formatDate(new Date());

const app = new Hono();

app.get("/", (c) => c.text("Hello, I am working"));

async function handleCdkRequestForDealer(params: RequestParams) {
  const { dealerId, urlParam, queryId, additionalParams } = params;
  await fetchData(dealerId, urlParam, queryId, additionalParams);
}

app.post("/cdk/dealers-salesclosed", async (c) => {
  const results = [];

  const additionalParams = {
    qparamStartDate: "05/20/2024",
    qparamEndDate: "05/23/2024",
    // qparamStartDate: startTimestamp,
    // qparamEndDate: endTimeStamp,
  };

  for (const dealerId of LBCCDealer) {
    const requestParams: RequestParams = {
      dealerId: dealerId,
      urlParam: "fisales-closed",
      queryId: "dywFISC_DateRange",
      additionalParams,
    };
    try {
      await handleCdkRequestForDealer(requestParams);
      results.push({ dealerId: dealerId, status: "success" });
    } catch (error) {
      console.error(`Error processing dealer ${dealerId}:`, error);
      results.push({
        dealerId: dealerId,
        status: "error",
        //@ts-ignore
        message: error.message,
      });
    }
  }

  return c.json(results);
});

app.post("/cdk/dealers-vehicles", async (c) => {
  const results = [];

  const additionalParams = {
    // deltaDate: endTimeStamp,
    qparamInvCompany: 1,
  };

  for (const dealerId of DEALERSLESS) {
    const requestParams: RequestParams = {
      dealerId: dealerId,
      urlParam: "inventoryvehicleext",
      queryId: "dywINVEH_Bulk",
      // queryId: "dywIVEH_Delta",
      additionalParams,
    };
    try {
      await handleCdkRequestForDealer(requestParams);
      results.push({ dealerId: dealerId, status: "success" });
    } catch (error) {
      console.error(`Error processing dealer ${dealerId}:`, error);
      results.push({
        dealerId: dealerId,
        status: "error",
        //@ts-ignore
        message: error.message,
      });
    }
  }
  return c.json(results);
});

app.post("/cdk/dealers-gljedetail", async (c) => {
  const results = [];

  const additionalParams = {
    qparamStartDate: "12/01/2023",
    qparamEndDate: "01/01/2024",
    qparamCompany: 1,
  };

  for (const dealerId of DEALERSLESS) {
    const requestParams: RequestParams = {
      dealerId: dealerId,
      urlParam: "gl-je-detail",
      queryId: "dywACCTGL_JE_DateRange_D",
      // urlParam: "gl-coa",
      // queryId: "dywACCTGL_JE_Delta_D",
      // queryId: "dywACCTGL_COA_Bulk",
      additionalParams,
    };
    try {
      await handleCdkRequestForDealer(requestParams);
      results.push({ dealerId: dealerId, status: "success" });
    } catch (error) {
      console.error(`Error processing dealer ${dealerId}:`, error);
      results.push({
        dealerId: dealerId,
        status: "error",
        //@ts-ignore
        message: error.message,
      });
    }
    break;
  }
  return c.json(results);
});

app.post("/cdk/dealers-coa", async (c) => {
  const results = [];

  const additionalParams = {
    qparamCompany: 1,
  };

  for (const dealerId of DEALERSLESS) {
    const requestParams: RequestParams = {
      dealerId: dealerId,
      urlParam: "gl-coa",
      queryId: "dywACCTGL_COA_Bulk",
      additionalParams,
    };
    try {
      await handleCdkRequestForDealer(requestParams);
      results.push({ dealerId: dealerId, status: "success" });
    } catch (error) {
      console.error(`Error processing dealer ${dealerId}:`, error);
      results.push({
        dealerId: dealerId,
        status: "error",
        //@ts-ignore
        message: error.message,
      });
    }
    break;
  }
  return c.json(results);
});

export default app;
