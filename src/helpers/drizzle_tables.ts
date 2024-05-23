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
  GLJE,
  COA,
} from "../../db/schema";
import "dotenv/config";

const sql = neon(process.env.NEON_DATABASE_URL!);
const db = drizzle(sql);

export async function upsertDealInitialfee(item) {
  const record = {
    fiWipStatusCode: item.FiWipStatusCode,
    branch: item.Branch,
    hostItemId: item.HostItemID,
    initialFee4ProfitType: item.InitialFee4ProfitType,
  };

  const insertDealsInitialFeeschema = createInsertSchema(deals);
  try {
    parse(insertDealsInitialFeeschema, record);
  } catch (error) {
    console.log("ERROR!");
    console.error(v.flatten<typeof insertDealsInitialFeeschema>(error));
  }
  await db.insert(dealInitialfee).values(record).onConflictDoNothing();
}

export async function upsertDealTradedealerdefined(item) {
  const record = {
    fiWipStatusCode: item.FiWipStatusCode,
    branch: item.Branch,
    hostItemId: item.HostItemID,
    tradeDealerDefined1: item.TradeDealerDefined1,
    tradeDealerDefined2: item.TradeDealerDefined2,
    tradeDealerDefined3: item.TradeDealerDefined3,
    tradeDealerDefined4: item.TradeDealerDefined4,
    tradeDealerDefined5: item.TradeDealerDefined5,
    tradeDealerDefined6: item.TradeDealerDefined6,
    tradeDealerDefined7: item.TradeDealerDefined7,
    tradeDealerDefined8: item.TradeDealerDefined8,
  };

  const insertDealTradedealerdefinedschema = createInsertSchema(deals);
  try {
    parse(insertDealTradedealerdefinedschema, record);
  } catch (error) {
    console.log("ERROR!");
    console.error(v.flatten<typeof insertDealTradedealerdefinedschema>(error));
  }
  await db.insert(dealTradedealerdefined).values(record).onConflictDoNothing();
}

export async function upsertDealTrade2(item) {
  const record = {
    fiWipStatusCode: item.FiWipStatusCode,
    branch: item.Branch,
    hostItemId: item.HostItemID,
    trade2Acv: item.Trade2ACV,
    trade2Color: item.Trade2Color,
    trade2Gross: item.Trade2Gross,
    trade2Make: item.Trade2Make,
    trade2Mileage: item.Trade2Mileage,
    trade2Model: item.Trade2Model,
    trade2ModelName: item.Trade2ModelName,
    trade2ModelNo: item.Trade2ModelNo,
    trade2ModelType: item.Trade2ModelType,
    trade2Over: item.Trade2Over,
    trade2PayOff: item.Trade2PayOff,
    trade2Stock: item.Trade2Stock,
    trade2Style: item.Trade2Style,
    trade2Vin: item.Trade2VIN,
    trade2Year: item.Trade2Year,
  };

  const insertDealTrade2schema = createInsertSchema(deals);
  try {
    parse(insertDealTrade2schema, record);
  } catch (error) {
    console.log("ERROR!");
    console.error(v.flatten<typeof insertDealTrade2schema>(error));
  }
  await db.insert(dealTrade2).values(record).onConflictDoNothing();
}

export async function upsertDealTrade1(item) {
  const record = {
    fiWipStatusCode: item.FiWipStatusCode,
    branch: item.Branch,
    hostItemId: item.HostItemID,
    trade1Model: item.Trade1Model,
    trade1ModelName: item.Trade1ModelName,
    trade1ModelNo: item.Trade1ModelNo,
    trade1ModelType: item.Trade1ModelType,
    trade1Over: item.Trade1Over,
    trade1PayOff: item.Trade1PayOff,
    trade1Stock: item.Trade1Stock,
    trade1Style: item.Trade1Style,
    trade1Vin: item.Trade1VIN,
    trade1Year: item.Trade1Year,
    trade1Acv: item.Trade1ACV,
    trade1Color: item.Trade1Color,
    trade1Gross: item.Trade1Gross,
    trade1Make: item.Trade1Make,
    trade1MakeName: item.Trade1MakeName,
    trade1Mileage: item.Trade1Mileage,
  };
  const insertDealTrade1schema = createInsertSchema(deals);
  try {
    parse(insertDealTrade1schema, record);
  } catch (error) {
    console.log("ERROR!");
    console.error(v.flatten<typeof insertDealTrade1schema>(error));
  }
  await db.insert(dealTrade1).values(record).onConflictDoNothing();
}

export async function upsertDealFiaux(item) {
  const record = {
    fiWipStatusCode: item.FiWipStatusCode,
    branch: item.Branch,
    hostItemId: item.HostItemID,
    fiAux1: item.FiAux1,
    fiAux40: item.FiAux40,
    fiAux41: item.FiAux41,
    fiAux42: item.FiAux42,
    fiAux43: item.FiAux43,
    fiAux44: item.FiAux44,
    fiAux45: item.FiAux45,
    fiAux46: item.FiAux46,
    fiAux47: item.FiAux47,
    fiAux48: item.FiAux48,
    fiAux49: item.FiAux49,
    fiAux5: item.FiAux5,
    fiAux50: item.FiAux50,
    fiAux6: item.FiAux6,
    fiAux7: item.FiAux7,
    fiAux8: item.FiAux8,
    fiAux9: item.FiAux9,
    fiAux10: item.FiAux10,
    fiAux11: item.FiAux11,
    fiAux12: item.FiAux12,
    fiAux13: item.FiAux13,
    fiAux14: item.FiAux14,
  };

  const insertDealFiAuxschema = createInsertSchema(deals);
  try {
    parse(insertDealFiAuxschema, record);
  } catch (error) {
    console.log("ERROR!");
    console.error(v.flatten<typeof insertDealFiAuxschema>(error));
  }
  await db.insert(dealFiaux).values(record).onConflictDoNothing();
}

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
];

function transformInsertDeals(data: { [key: string]: any }): InsertDeals {
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

  return transformedData as InsertDeals;
}

type InsertDeals = typeof deals.$inferInsert;
export async function upsertDeals(item: InsertDeals) {
  const validatedItem = transformInsertDeals(item);
  console.log(item.StockNo);
  console.log(validatedItem.StockNo);

  await db
    .insert(deals)
    .values(validatedItem)
    .onConflictDoUpdate({
      target: [deals.FiWipStatusCode, deals.Branch, deals.HostItemID],
      set: { ...validatedItem },
    });
  //TODO: Update the rest below to do UPDATE!
  //
  // await upsertDealInitialfee(item);
  // await upsertDealTrade1(item);
  // await upsertDealTrade2(item);
  // await upsertDealTradedealerdefined(item);
  // await upsertDealFiaux(item);
}

const insertVehicleschema = createInsertSchema(vehicles);

export async function upsertVehicle(item) {
  const record = {
    vin: item.VIN ? item.VIN.toString() : null,
    primaryDriverNo: item.PrimaryDriverNo
      ? item.PrimaryDriverNo.toString()
      : null,
    accountingAccount: item.AccountingAccount,
    model: item.Model ? item.Model.toString() : null,
    modelName: item.ModelName ? item.ModelName.toString() : null,
    modelType: item.ModelType ? item.ModelType.toString() : null,
    trimLevel: item.TrimLevel ? item.TrimLevel.toString() : null,
    engineDescription: item.EngineDescription
      ? item.EngineDescription.toString()
      : null,
    engineNo: item.EngineNo ? item.EngineNo.toString() : null,
    color: item.Color,
    interiorColor: item.InteriorColor ? item.InteriorColor.toString() : null,
    bodyStyle: item.BodyStyle,
    fuelType: item.FuelType,
    year: item.Year,
    make: item.Make,
    makeName: item.MakeName,
    manufacturer: item.Manufacturer,
    plantOfManufacture: item.PlantOfManufacture,
    numberOfDoors: item.NumberOfDoors,
    cylinderNo: item.CylinderNo,
    commissionPrice: item.CommissionPrice
      ? item.CommissionPrice.toString()
      : null,
    retailPriceUpdateDate: item.RetailPriceUpdateDate,
    vehicleSoldDate: item.VehicleSoldDate,
    soldDate: item.SoldDate,
    mileage: item.Mileage,
    soldMileage: item.SoldMileage,
    stockNo: item.StockNo ? item.StockNo.toString() : null,
    stockType: item.StockType,
    status: item.Status,
    balance: item.Balance ? item.Balance.toString() : null,
    price1: item.Price1 ? item.Price1.toString() : null,
    price2: item.Price2 ? item.Price2.toString() : null,
  };

  // const record = {
  //   vin: item.VIN ,
  //   primaryDriverNo: item.PrimaryDriverNo,
  //   accountingAccount: item.AccountingAccount,
  //   model: item.Model ,
  //   modelName: item.ModelName ,
  //   modelType: item.ModelType ,
  //   trimLevel: item.TrimLevel ,
  //   engineDescription: item.EngineDescription,
  //   engineNo: item.EngineNo ,
  //   color: item.Color,
  //   interiorColor: item.InteriorColor ,
  //   bodyStyle: item.BodyStyle,
  //   fuelType: item.FuelType,
  //   year: item.Year,
  //   make: item.Make,
  //   makeName: item.MakeName,
  //   manufacturer: item.Manufacturer,
  //   plantOfManufacture: item.PlantOfManufacture,
  //   numberOfDoors: item.NumberOfDoors,
  //   cylinderNo: item.CylinderNo,
  //   commissionPrice: item.CommissionPrice,
  //   retailPriceUpdateDate: item.RetailPriceUpdateDate,
  //   vehicleSoldDate: item.VehicleSoldDate,
  //   soldDate: item.SoldDate,
  //   mileage: item.Mileage,
  //   soldMileage: item.SoldMileage,
  //   stockNo: item.StockNo ,
  //   stockType: item.StockType,
  //   status: item.Status,
  //   balance: item.Balance ,
  //   price1: item.Price1 ,
  //   price2: item.Price2 ,
  // };

  try {
    parse(insertVehicleschema, record);
  } catch (error) {
    console.log("ERROR!");
    console.error(v.flatten<typeof insertVehicleschema>(error));
  }

  try {
    const result = await db
      .insert(vehicles)
      .values(record)
      .onConflictDoUpdate({ target: vehicles.vin, set: record })
      .returning({ stockNo: vehicles.stockNo });
    console.log(result);
  } catch (obj) {
    console.log("ERROR INSERTING!");
    // Object.keys(obj).forEach((key) => {
    //   console.log(`${key}: ${obj[key as keyof typeof obj]}`);
    // });
    // console.log(error.message);
  }

  console.log("MADE IT HERE!");
}

const insertGLJEschema = createInsertSchema(GLJE);
export async function upsertGLJEDetail(item) {
  const record = {
    hostItemId: item.HostItemID ? item.HostItemID.toString() : null,
    accountingDate: item.AccountingDate,
    accountNumber: item.AccountNumber ? item.AccountNumber.toString() : null,
    accountNumberRight: item.AccountNumberRight
      ? item.AccountNumberRight.toString()
      : null,
    companyID: item.CompanyID ? item.CompanyID.toString() : null,
    companyIDRight: item.CompanyIDRight ? item.CompanyIDRight.toString() : null,
    control: item.control ? item.control.toString() : null,
    controlRight: item.controlRight
      ? item.controlcontrolRight.toString()
      : null,
    controlType: item.ControlType,
    control2: item.Control2 ? item.Control2.toString() : null, // Convert number to string
    control2Right: item.Control2Right ? item.Control2Right.toString() : null, // Convert number to string
    controlType2: item.ControlType2,
    currentMonth: item.CurrentMonth,
    detailDescription: item.DetailDescription
      ? item.DetailDescription.toString()
      : null, // Convert number to string
    distillControlType: item.DistillControlType,
    distillControlType2: item.DistillControlType2,
    errorLevel: item.ErrorLevel,
    errorMessage: item.ErrorMessage,
    journalID: item.JournalID,
    journalIDRight: item.JournalIDRight,
    postingAmount: item.PostingAmount ? item.PostingAmount.toString() : null,
    postingSequence: item.PostingSequence,
    postingTime: item.PostingTime,
    prodNo: item.ProdNo,
    prodNo2: item.ProdNo2,
    prodNoRight: item.ProdNoRight,
    prodNo2Right: item.ProdNo2Right,
    prodType: item.ProdType,
    prodType2: item.ProdType2,
    refer: item.Refer ? item.Refer.toString() : null,
    referRight: item.ReferRight ? item.ReferRight.toString() : null,
    scheduleNumber: item.ScheduleNumber,
    statCount: item.StatCount,
  };

  try {
    parse(insertGLJEschema, record);
  } catch (error) {
    console.log("ERROR!");
    console.error(v.flatten<typeof insertGLJEschema>(error));
  }

  await db
    .insert(GLJE)
    .values(record)
    .onConflictDoUpdate({
      target: [GLJE.hostItemId, GLJE.accountingDate, GLJE.accountNumber],
      set: record,
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
