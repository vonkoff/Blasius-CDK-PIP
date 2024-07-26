import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { string, parse, number } from "valibot";
import * as v from "valibot";
import { createInsertSchema, createSelectSchema } from "drizzle-valibot";
import { InferSelectModel, InferInsertModel } from "drizzle-orm";
import {
  dealInitialfee,
  dealTradedealerdefined,
  dealTrade2,
  dealTrade1,
  dealFiaux,
  deals,
  vehicles,
  customers,
  GLJE,
  COA,
} from "../../db/schema";
import "dotenv/config";

const sql = neon(process.env.NEON_DATABASE_URL!);
const db = drizzle(sql);

const dateFields = [
  "ContractDate",
  "Cont2Date",
  "Cont1Date",
  "AccountingDate",
  "SalesDate",
  "PickupDate1",
  "PickupDate2",
  "PickupDate3",
  "LastPayDate",
  "FirstPayDate",
  "RetailPriceUpdateDate",
  "VehicleSoldDate",
  "SoldDate",
  "OrderDate",
  "ExpectedDeliveryDate",
  "AdvertisedPriceExpDate",
  "AdvertisedPriceStartDate",
  "EntryDate",
  "LastActivityDate",
];

function transformInsert<T extends { [key: string]: any }>(data: {
  [key: string]: any;
}): T {
  const transformedData: { [key: string]: any } = {};

  Object.keys(data).forEach((key) => {
    const value = data[key];

    if (typeof value === "string") {
      if (value === "") {
        transformedData[key] = undefined;
      } else if (dateFields.includes(key)) {
        const dateValue = new Date(value);
        transformedData[key] = isNaN(dateValue.getTime())
          ? undefined
          : dateValue;
      } else if (/^[0-9.]+$/.test(value) && !isNaN(parseFloat(value))) {
        transformedData[key] = parseFloat(value);
      } else {
        transformedData[key] = value;
      }
    } else if (typeof value === "number") {
      if (isNaN(value)) {
        transformedData[key] = undefined;
      } else {
        transformedData[key] = value;
      }
    } else {
      transformedData[key] = value;
    }
  });

  return transformedData as T;
}

type InsertDealInitialfee = typeof dealInitialfee.$inferInsert;
export async function upsertDealInitialfee(item: InsertDealInitialfee) {
  const validatedItem = transformInsert<InsertDealInitialfee>(item);

  console.log(validatedItem);
  await db
    .insert(dealInitialfee)
    .values(validatedItem)
    .onConflictDoUpdate({
      target: [deals.FiWipStatusCode, deals.Branch, deals.HostItemID],
      set: { ...validatedItem },
    });
}

type InsertDealTradeDealerDefined = typeof dealTradedealerdefined.$inferInsert;
export async function upsertDealTradedealerdefined(
  item: InsertDealTradeDealerDefined,
) {
  const validatedItem = transformInsert<InsertDealTradeDealerDefined>(item);

  console.log(validatedItem);
  await db
    .insert(dealTradedealerdefined)
    .values(validatedItem)
    .onConflictDoUpdate({
      target: [deals.FiWipStatusCode, deals.Branch, deals.HostItemID],
      set: { ...validatedItem },
    });
}

type InsertDealTrade1 = typeof dealTrade1.$inferInsert;
export async function upsertDealTrade1(item: InsertDealTrade1) {
  const validatedItem = transformInsert<InsertDealTrade1>(item);

  console.log(validatedItem);
  await db
    .insert(dealTrade1)
    .values(validatedItem)
    .onConflictDoUpdate({
      target: [deals.FiWipStatusCode, deals.Branch, deals.HostItemID],
      set: { ...validatedItem },
    });
}
type InsertDealTrade2 = typeof dealTrade2.$inferInsert;
export async function upsertDealTrade2(item: InsertDealTrade2) {
  const validatedItem = transformInsert<InsertDealTrade2>(item);

  console.log(validatedItem);
  await db
    .insert(dealTrade2)
    .values(validatedItem)
    .onConflictDoUpdate({
      target: [deals.FiWipStatusCode, deals.Branch, deals.HostItemID],
      set: { ...validatedItem },
    });
}

type InsertDealFiAux = typeof dealFiaux.$inferInsert;
export async function upsertDealFiaux(item: InsertDealFiAux) {
  const validatedItem = transformInsert<InsertDealFiAux>(item);

  console.log(validatedItem);
  await db
    .insert(dealFiaux)
    .values(validatedItem)
    .onConflictDoUpdate({
      target: [deals.FiWipStatusCode, deals.Branch, deals.HostItemID],
      set: { ...validatedItem },
    });
}

type InsertDeals = typeof deals.$inferInsert;
export async function upsertDeals(item: InsertDeals) {
  const validatedItem = transformInsert<InsertDeals>(item);

  await db
    .insert(deals)
    .values(validatedItem)
    .onConflictDoUpdate({
      target: [deals.FiWipStatusCode, deals.Branch, deals.HostItemID],
      set: { ...validatedItem },
    });
  await upsertDealInitialfee(item);
  await upsertDealTrade1(item);
  await upsertDealTrade2(item);
  await upsertDealTradedealerdefined(item);
  await upsertDealFiaux(item);
}

type InsertVehicles = typeof vehicles.$inferInsert;
export async function upsertVehicle(item: InsertVehicles) {
  const validatedItem = transformInsert<InsertVehicles>(item);

  console.log(validatedItem.StockNo);
  await db
    .insert(vehicles)
    .values(validatedItem)
    .onConflictDoUpdate({
      target: [vehicles.VIN],
      set: { ...validatedItem },
    });
}

type InsertCustomers = typeof customers.$inferInsert;
export async function upsertCustomers(item: InsertCustomers) {
  const validatedItem = transformInsert<InsertCustomers>(item);

  await db
    .insert(customers)
    .values(validatedItem)
    .onConflictDoUpdate({
      target: [customers.hostItemId, customers.custNo],
      set: { ...validatedItem },
    });
}

const insertGLJEschema = createInsertSchema(GLJE);

type InsertGLJE = typeof GLJE.$inferInsert;
export async function upsertGLJEDetail(item: InsertGLJE) {
  const validatedItem = transformInsert<InsertGLJE>(item);
  // const record = {
  //   hostItemId: item.HostItemID ? item.HostItemID.toString() : null,
  //   accountingDate: item.AccountingDate,
  //   accountNumber: item.AccountNumber ? item.AccountNumber.toString() : null,
  //   accountNumberRight: item.AccountNumberRight
  //     ? item.AccountNumberRight.toString()
  //     : null,
  //   companyID: item.CompanyID ? item.CompanyID.toString() : null,
  //   companyIDRight: item.CompanyIDRight ? item.CompanyIDRight.toString() : null,
  //   control: item.control ? item.control.toString() : null,
  //   controlRight: item.controlRight
  //     ? item.controlcontrolRight.toString()
  //     : null,
  //   controlType: item.ControlType,
  //   control2: item.Control2 ? item.Control2.toString() : null, // Convert number to string
  //   control2Right: item.Control2Right ? item.Control2Right.toString() : null, // Convert number to string
  //   controlType2: item.ControlType2,
  //   currentMonth: item.CurrentMonth,
  //   detailDescription: item.DetailDescription
  //     ? item.DetailDescription.toString()
  //     : null, // Convert number to string
  //   distillControlType: item.DistillControlType,
  //   distillControlType2: item.DistillControlType2,
  //   errorLevel: item.ErrorLevel,
  //   errorMessage: item.ErrorMessage,
  //   journalID: item.JournalID,
  //   journalIDRight: item.JournalIDRight,
  //   postingAmount: item.PostingAmount ? item.PostingAmount.toString() : null,
  //   postingSequence: item.PostingSequence,
  //   postingTime: item.PostingTime,
  //   prodNo: item.ProdNo,
  //   prodNo2: item.ProdNo2,
  //   prodNoRight: item.ProdNoRight,
  //   prodNo2Right: item.ProdNo2Right,
  //   prodType: item.ProdType,
  //   prodType2: item.ProdType2,
  //   refer: item.Refer ? item.Refer.toString() : null,
  //   referRight: item.ReferRight ? item.ReferRight.toString() : null,
  //   scheduleNumber: item.ScheduleNumber,
  //   statCount: item.StatCount,
  // };

  // try {
  //   parse(insertGLJEschema, record);
  // } catch (error) {
  //   console.log("ERROR!");
  //   console.error(v.flatten<typeof insertGLJEschema>(error));
  // }

  console.log(validatedItem);
  await db
    .insert(GLJE)
    .values(validatedItem)
    .onConflictDoUpdate({
      target: [GLJE.hostItemId, GLJE.accountingDate, GLJE.accountNumber],
      set: { ...validatedItem },
      // set: record,
    });
}

const insertCOAschema = createInsertSchema(COA);

export async function upsertCOA(item) {
  const record = {
    statCountType: item.StatCountType ? item.StatCountType.toString() : null,
    pattern: item.Pattern,
    postDescFlag: item.PostDescFlag ? item.PostDescFlag.toString() : null,
    techFlag: item.TechFlag,
    hostItemId: item.HostItemID ? item.HostItemID.toString() : null,
    accountDescription: item.AccountDescription,
    accountNumber: item.AccountNumber ? item.AccountNumber.toString() : null,
    accountNumberRight: item.AccountNumberRight
      ? item.AccountNumberRight.toString()
      : null,
    accountType: item.AccountType,
    acctSubType: item.AcctSubType,
    acctUpdDate: item.AcctUpdDate ? item.AcctUpdDate.toString() : null, // Convert Date to string in 'YYYY-MM-DD' format
    beginDate: item.BeginDate ? item.BeginDate.toString() : null, // Convert Date to string in 'YYYY-MM-DD' format
    cntl2Type: item.Cntl2Type ? item.Cntl2Type.toString() : null, // Convert number to string
    cntlType: item.CntlType ? item.CntlType.toString() : null, // Convert number to string
    companyID: item.CompanyID ? item.CompanyID.toString() : null,
    deptID: item.DeptID ? item.DeptID.toString() : null, // Convert number to string
    deptIDRight: item.DeptIDRight ? item.DeptIDRight.toString() : null, // Convert number to string
    companyIDRight: item.CompanyIDRight ? item.CompanyIDRight.toString() : null,
    endDate: item.EndDate ? new Date(item.EndDate) : null,
    errorLevel: item.ErrorLevel,
    errorMessage: item.ErrorMessage,
    franchiseId: item.FranchiseId,
    bfSched: item.BFSched,
    dfSched: item.DFSched ? item.DFSched.toString() : null, // Convert number to string
    incBalGrp: item.IncBalGrp,
    incBalGrpDesc: item.IncBalGrpDesc,
    incBalSubGrp: item.IncBalSubGrp,
    incBalSubGrpDesc: item.IncBalSubGrpDesc,
    prodType: item.ProdType,
    rptGrp: item.RptGrp,
    rptGrpDesc: item.RptGrpDesc,
    unaGrp: item.UnaGrp,
    unaGrpDesc: item.UnaGrpDesc,
    chain: item.Chain ? item.Chain.toString() : null,
  };

  try {
    parse(insertCOAschema, record);
  } catch (error) {
    console.log("ERROR!");
    console.error(v.flatten<typeof insertCOAschema>(error));
  }

  await db
    .insert(COA)
    .values(record)
    .onConflictDoUpdate({
      target: [COA.hostItemId, COA.accountNumber, COA.companyID],
      set: record,
    });
}
