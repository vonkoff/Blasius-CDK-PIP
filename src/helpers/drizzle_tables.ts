import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { string, Output, parse, number } from "valibot";
import * as v from "valibot";
import { createInsertSchema, createSelectSchema } from "drizzle-valibot";
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

export async function upsertDeals(item) {
  const record = {
    fiWipStatusCode: item.FiWipStatusCode,
    branch: item.Branch,
    hostItemId: item.HostItemID,
    state: item.State,
    make: item.Make,
    makeName: item.MakeName,
    mileageExpected: item.MileageExpected,
    mileagePenaltyRate: item.MileagePenaltyRate,
    stockNo: item.StockNo,
    tax: item.Tax,
    tax1Name: item.Tax1Name,
    tax1Rate: item.Tax1Rate,
    tax1Base: item.Tax1Base,
    tax1Amount: item.Tax1Amount,
    mbiTerm: item.MBITerm,
    msrp: item.MSRP,
    mbiPolicyNo: item.MbiPolicyNo,
    mileagePenaltyAmount: item.MileagePenaltyAmount,
    surplusCash: item.SurplusCash,
    tax2Amount: item.Tax2Amount,
    tax2Name: item.Tax2Name,
    tax2Rate: item.Tax2Rate,
    tax3Amount: item.Tax3Amount,
    tax3Name: item.Tax3Name,
    tax3Rate: item.Tax3Rate,
    tax4Amount: item.Tax4Amount,
    tax4Name: item.Tax4Name,
    tax4Rate: item.Tax4Rate,
    usLuxuryExciseTaxAmount: item.USLuxuryExciseTaxAmount,
    feeOption3Amount: item.FeeOption3Amount,
    feeOption3Cost: item.FeeOption3Cost,
    feeOption3Name: item.FeeOption3Name,
    feeOption3ProfitType: item.FeeOption3ProfitType,
    feeOption4Amount: item.FeeOption4Amount,
    feeOption4Cost: item.FeeOption4Cost,
    feeOption4Name: item.FeeOption4Name,
    feeOption4ProfitType: item.FeeOption4ProfitType,
    feeOption5Amount: item.FeeOption5Amount,
    feeOption5Cost: item.FeeOption5Cost,
    feeOption5Name: item.FeeOption5Name,
    feeOption5ProfitType: item.FeeOption5ProfitType,
    feeOption6Amount: item.FeeOption6Amount,
    feeOption6Cost: item.FeeOption6Cost,
    feeOption6Name: item.FeeOption6Name,
    feeOption6ProfitType: item.FeeOption6ProfitType,
    feeOption7Amount: item.FeeOption7Amount,
    feeOption7Cost: item.FeeOption7Cost,
    feeOption7Name: item.FeeOption7Name,
    feeOption7ProfitType: item.FeeOption7ProfitType,
    feeOption8Amount: item.FeeOption8Amount,
    feeOption8Cost: item.FeeOption8Cost,
    feeOption8Name: item.FeeOption8Name,
    feeOption8ProfitType: item.FeeOption8ProfitType,
    feeOption9Amount: item.FeeOption9Amount,
    feeOption9Cost: item.FeeOption9Cost,
    feeOption9Name: item.FeeOption9Name,
    feeOption9ProfitType: item.FeeOption9ProfitType,
    initialFee4ProfitType: item.InitialFee4ProfitType,
    initialFee5Amount: item.InitialFee5Amount,
    initialFee5CostAmount: item.InitialFee5CostAmount,
    initialFee5Name: item.InitialFee5Name,
    initialFee5ProfitType: item.InitialFee5ProfitType,
    initialFee6Amount: item.InitialFee6Amount,
    initialFee6CostAmount: item.InitialFee6CostAmount,
    initialFee6Name: item.InitialFee6Name,
    initialFee6ProfitType: item.InitialFee6ProfitType,
    initialFee7Amount: item.InitialFee7Amount,
    initialFee7CostAmount: item.InitialFee7CostAmount,
    initialFee7Name: item.InitialFee7Name,
    initialFee7ProfitType: item.InitialFee7ProfitType,
    initialFee8Amount: item.InitialFee8Amount,
    initialFee8CostAmount: item.InitialFee8CostAmount,
    initialFee8Name: item.InitialFee8Name,
    initialFee8ProfitType: item.InitialFee8ProfitType,
    initialFee9Amount: item.InitialFee9Amount,
    initialFee9CostAmount: item.InitialFee9CostAmount,
    initialFee9Name: item.InitialFee9Name,
    initialFee9ProfitType: item.InitialFee9ProfitType,
    ins1Cost: item.Ins1Cost,
    ins1Fee: item.Ins1Fee,
    ins1Income: item.Ins1Income,
    ins2Cost: item.Ins2Cost,
    ins2Fee: item.Ins2Fee,
    ins2Income: item.Ins2Income,
    ins3Cost: item.Ins3Cost,
    ins3Fee: item.Ins3Fee,
    ins3Income: item.Ins3Income,
    insurance1Deductible: item.Insurance1Deductible,
    insurance1Limit: item.Insurance1Limit,
    insurance1LimitMiles: item.Insurance1LimitMiles,
    insurance1Name: item.Insurance1Name,
    balloonRate: item.BalloonRate,
    onePayAmount: item.OnePayAmount,
    finInstituteCode: item.FinInstituteCode,
    financeAmt: item.FinanceAmt,
    financeCharge: item.FinanceCharge,
    financeSource: item.FinanceSource,
    firstPayDate: item.FirstPayDate,
    backGross: item.BackGross,
    backWeOwes: item.BackWeOwes,
    balloonAmount: item.BalloonAmount,
    bankFee: item.BankFee,
    baseResidual: item.BaseResidual,
    billingClerk: item.BillingClerk,
    bodyStyle: item.BodyStyle,
    bonusS1: item.BonusSP1,
    bonusSp2: item.BonusSP2,
    bonusSp3: item.BonusSP3,
    businessPhone: item.BusinessPhone,
    buyRateApr: item.BuyRateAPR,
    buyRateAddOn: item.BuyRateAddOn,
    buyRateLfm: item.BuyRateLFM,
    buyRateLmf: item.BuyRateLMF,
    clCost: item.CLCost,
    clIncome: item.CLIncome,
    clPremium: item.CLPremium,
    crmClosingMgrId: item.CRMClosingMgrId,
    crmClosingMgrName: item.CRMClosingMgrName,
    crmCommisionClosingMgr: item.CRMCommisionClosingMgr,
    crmCommisionFiMgr: item.CRMCommisionFIMgr,
    crmCommisionSp1: item.CRMCommisionSP1,
    crmCommisionSp2: item.CRMCommisionSP2,
    crmCommisionSp3: item.CRMCommisionSP3,
    crmCommisionSalesMgr: item.CRMCommisionSalesMgr,
    crmCommisionTotal: item.CRMCommisionTotal,
    crmfiMgrId: item.CRMFIMgrId,
    crmfiMgrName: item.CRMFIMgrName,
    crmFlag: item.CRMFlag,
    vin: item.VIN,
    vehInventoryCompany: item.VehInventoryCompany,
    vehSaleCompany: item.VehSaleCompany,
    vehicleMileage: item.VehicleMileage,
    waqNumber: item.WAQNumber,
    warrantyFee: item.WarrantyFee,
    weOweBackSaleTotal: item.WeOweBackSaleTotal,
    weOweCostTotal: item.WeOweCostTotal,
    weOweFrontGrossSales: item.WeOweFrontGrossSales,
    weOweResidualTableTotal: item.WeOweResidualTableTotal,
    weOweResidualTotal: item.WeOweResidualTotal,
    weOweSaleHardTotal: item.WeOweSaleHardTotal,
    weOweSaleSoftTotal: item.WeOweSaleSoftTotal,
    weOweSaleTotal: item.WeOweSaleTotal,
    year: item.Year,
    zipOrPostalCode: item.ZipOrPostalCode,
    securityDepositAmount: item.SecurityDepositAmount,
    sellRateApr: item.SellRateAPR,
    sellRateAddOn: item.SellRateAddOn,
    sellRateLmf: item.SellRateLMF,
    serviceTaxAmount: item.ServiceTaxAmount,
    leaseEndPercentageRate: item.LeaseEndPercentageRate,
    leaseEndValue: item.LeaseEndValue,
    leaseMileageAllowance: item.LeaseMileageAllowance,
    leasePayment: item.LeasePayment,
    leaseType: item.LeaseType,
    levelizedLifeAmount: item.LevelizedLifeAmount,
    levelizedLifeDealerComm: item.LevelizedLifeDealerComm,
    levelizedLifeIncome: item.LevelizedLifeIncome,
    lienHolderAddress: item.LienHolderAddress,
    lienHolderCity: item.LienHolderCity,
    lienHolderName: item.LienHolderName,
    lienHolderName2: item.LienHolderName2,
    lienHolderPhone: item.LienHolderPhone,
    lienHolderState: item.LienHolderState,
    lienHolderZip: item.LienHolderZip,
    addToCapCostFee4ProfitType: item.AddToCapCostFee4ProfitType,
    addToCapCostFee5Amount: item.AddToCapCostFee5Amount,
    addToCapCostFee5CostAmount: item.AddToCapCostFee5CostAmount,
    addToCapCostFee5Name: item.AddToCapCostFee5Name,
    addToCapCostFee5ProfitType: item.AddToCapCostFee5ProfitType,
    addToCapCostFee6Amount: item.AddToCapCostFee6Amount,
    addToCapCostFee6CostAmount: item.AddToCapCostFee6CostAmount,
    addToCapCostFee6Name: item.AddToCapCostFee6Name,
    addToCapCostFee6ProfitType: item.AddToCapCostFee6ProfitType,
    addToCapCostFee7Amount: item.AddToCapCostFee7Amount,
    addToCapCostFee7CostAmount: item.AddToCapCostFee7CostAmount,
    addToCapCostFee7Name: item.AddToCapCostFee7Name,
    addToCapCostFee7ProfitType: item.AddToCapCostFee7ProfitType,
    address: item.Address,
    adjustedCapCost: item.AdjustedCapCost,
    adjustedCostofVehicle: item.AdjustedCostofVehicle,
    adjustmentsDealerDefined: item.AdjustmentsDealerDefined,
    adjustmentsRopo: item.AdjustmentsROPO,
    adjustmentsStandard: item.AdjustmentsStandard,
    age: item.Age,
    amountDueAtStart: item.AmountDueAtStart,
    annualFee1Amount: item.AnnualFee1Amount,
    annualFee1Name: item.AnnualFee1Name,
    annualFee2Amount: item.AnnualFee2Amount,
    annualFee2Name: item.AnnualFee2Name,
    annualFee3Amount: item.AnnualFee3Amount,
    annualFee3Name: item.AnnualFee3Name,
    annualFee3DealerCommBase: item.AnnualFee3DealerCommBase,
    annualFee4Amount: item.AnnualFee4Amount,
    annualFee4Name: item.AnnualFee4Name,
    annualFee4DealerCommBase: item.AnnualFee4DealerCommBase,
    annualFee5Amount: item.AnnualFee5Amount,
    annualFee5Name: item.AnnualFee5Name,
    annualFee5DealerCommBase: item.AnnualFee5DealerCommBase,
    assnSlsperson: item.AssnSlsperson,
    insurance1Term: item.Insurance1Term,
    insurance2Deductible: item.Insurance2Deductible,
    insurance2Limit: item.Insurance2Limit,
    insurance2LimitMiles: item.Insurance2LimitMiles,
    insurance2Name: item.Insurance2Name,
    insurance2Term: item.Insurance2Term,
    insurance3Deductible: item.Insurance3Deductible,
    insurance3Limit: item.Insurance3Limit,
    insurance3LimitMiles: item.Insurance3LimitMiles,
    insurance3Name: item.Insurance3Name,
    insurance3Term: item.Insurance3Term,
    insuranceCommDlr: item.InsuranceCommDlr,
    insuranceTypeCode: item.InsuranceTypeCode,
    lstgstAmount: item.LSTGSTAmount,
    lstgstRate: item.LSTGSTRate,
    lstgstRateFlat: item.LSTGSTRateFlat,
    lastPayAmount: item.LastPayAmount,
    lastPayDate: item.LastPayDate,
    outTheDoorPrice: item.OutTheDoorPrice,
    paymentAmt: item.PaymentAmt,
    paymentCode: item.PaymentCode,
    paymentStyle: item.PaymentStyle,
    payments: item.Payments,
    pickupDate1: item.PickupDate1,
    pickupDate2: item.PickupDate2,
    pickupDate3: item.PickupDate3,
    pickupPay1: item.PickupPay1,
    pickupPay2: item.PickupPay2,
    pickupPay3: item.PickupPay3,
    extWarrantyExpMilesLease: item.ExtWarrantyExpMilesLease,
    extWarrantyTermLease: item.ExtWarrantyTermLease,
    fiDealType: item.FIDealType,
    fiIncome: item.FIIncome,
    fiMgr1: item.FIMgr1,
    fiMgr2: item.FIMgr2,
    feeOption10Amount: item.FeeOption10Amount,
    feeOption10Cost: item.FeeOption10Cost,
    feeOption10Name: item.FeeOption10Name,
    feeOption10ProfitType: item.FeeOption10ProfitType,
    feeOption1Amount: item.FeeOption1Amount,
    feeOption1Cost: item.FeeOption1Cost,
    feeOption1Name: item.FeeOption1Name,
    feeOption1ProfitType: item.FeeOption1ProfitType,
    feeOption2Amount: item.FeeOption2Amount,
    feeOption2Cost: item.FeeOption2Cost,
    feeOption2Name: item.FeeOption2Name,
    feeOption2ProfitType: item.FeeOption2ProfitType,
    rebateAmount: item.RebateAmount,
    slsDealType: item.SLSDealType,
    saleCreditSp1: item.SaleCreditSP1,
    saleCreditSp2: item.SaleCreditSP2,
    saleCreditSp3: item.SaleCreditSP3,
    salePriceWithWeOwes: item.SalePriceWithWeOwes,
    saleType: item.SaleType,
    salesAccount: item.SalesAccount,
    salesDate: item.SalesDate,
    salesManagementDealType: item.SalesManagementDealType,
    salesMgr: item.SalesMgr,
    salesperson1: item.Salesperson1,
    salesperson2: item.Salesperson2,
    salesperson3: item.Salesperson3,
    crmsp1Id: item.CRMSP1Id,
    crmsp1Name: item.CRMSP1Name,
    crmsp2Id: item.CRMSP2Id,
    crmsp2Name: item.CRMSP2Name,
    crmsp3Id: item.CRMSP3Id,
    crmsp3Name: item.CRMSP3Name,
    crmSaleCreditClosingMgr: item.CRMSaleCreditClosingMgr,
    crmSaleCreditFiMgr: item.CRMSaleCreditFIMgr,
    crmSaleCreditSp1: item.CRMSaleCreditSP1,
    crmSaleCreditSp2: item.CRMSaleCreditSP2,
    crmSaleCreditSp3: item.CRMSaleCreditSP3,
    crmSaleCreditSalesMgr: item.CRMSaleCreditSalesMgr,
    crmSaleType: item.CRMSaleType,
    crmSalesCreditTotal: item.CRMSalesCreditTotal,
    crmSalesMgrId: item.CRMSalesMgrId,
    crmSalesMgrName: item.CRMSalesMgrName,
    crmSpiffClosingMgr: item.CRMSpiffClosingMgr,
    crmSpiffFiMgr: item.CRMSpiffFIMgr,
    crmSpiffSp1: item.CRMSpiffSP1,
    crmSpiffSp2: item.CRMSpiffSP2,
    crmSpiffSp3: item.CRMSpiffSP3,
    crmSpiffSalesMgr: item.CRMSpiffSalesMgr,
    crmSpiffTotal: item.CRMSpiffTotal,
    calcMethod: item.CalcMethod,
    cashCapReduction: item.CashCapReduction,
    cashDown: item.CashDown,
    cashPrice: item.CashPrice,
    city: item.City,
    closingMgr: item.ClosingMgr,
    coAddress: item.CoAddress,
    coBusinessPhone: item.CoBusinessPhone,
    coBuyer: item.CoBuyer,
    coCity: item.CoCity,
    coCounty: item.CoCounty,
    coCustNo: item.CoCustNo,
    coHomePhone: item.CoHomePhone,
    coName1: item.CoName1,
    coState: item.CoState,
    coZipOrPostalCode: item.CoZipOrPostalCode,
    dealerDefined6: item.DealerDefined6,
    dealerDefined7: item.DealerDefined7,
    dealerDefined8: item.DealerDefined8,
    deliveryCoord: item.DeliveryCoord,
    depositAmount: item.DepositAmount,
    depositType: item.DepositType,
    dueOnDelivery: item.DueOnDelivery,
    frontEndGrossProfit: item.FrontEndGrossProfit,
    frontGross: item.FrontGross,
    frontWeOwes: item.FrontWeOwes,
    frontWeOwesGrossCost: item.FrontWeOwesGrossCost,
    frontWeOwesGrossSales: item.FrontWeOwesGrossSales,
    glVehicleCost: item.GLVehicleCost,
    grossProfit: item.GrossProfit,
    homePhone: item.HomePhone,
    incentiveDealer: item.IncentiveDealer,
    incentiveProgram: item.IncentiveProgram,
    mbiCarrier: item.MBICarrier,
    mbiCost: item.MBICost,
    mbiDeductible: item.MBIDeductible,
    mbiEligComment: item.MBIEligComment,
    mbiEligFlag: item.MBIEligFlag,
    mbiFee: item.MBIFee,
    mbiIncome: item.MBIIncome,
    mbiLimit: item.MBILimit,
    mbiLimitMax: item.MBILimitMax,
    mbiName: item.MBIName,
    ahCost: item.AHCost,
    ahIncome: item.AHIncome,
    ahPremium: item.AHPremium,
    apr: item.APR,
    accountingAccount: item.AccountingAccount,
    accountingDate: item.AccountingDate,
    addCapCostFee3DealerCommBase: item.AddCapCostFee3DealerCommBase,
    addCapCostFee4DealerCommBase: item.AddCapCostFee4DealerCommBase,
    addCapCostFee5DealerCommBase: item.AddCapCostFee5DealerCommBase,
    addCapCostFee6DealerCommBase: item.AddCapCostFee6DealerCommBase,
    addCapCostFee7DealerCommBase: item.AddCapCostFee7DealerCommBase,
    addToCapAmount: item.AddToCapAmount,
    addToCapCostFee1Amount: item.AddToCapCostFee1Amount,
    addToCapCostFee1CostAmount: item.AddToCapCostFee1CostAmount,
    addToCapCostFee1Name: item.AddToCapCostFee1Name,
    addToCapCostFee1ProfitType: item.AddToCapCostFee1ProfitType,
    addToCapCostFee2Amount: item.AddToCapCostFee2Amount,
    addToCapCostFee2CostAmount: item.AddToCapCostFee2CostAmount,
    addToCapCostFee2Name: item.AddToCapCostFee2Name,
    addToCapCostFee2ProfitType: item.AddToCapCostFee2ProfitType,
    addToCapCostFee3Amount: item.AddToCapCostFee3Amount,
    addToCapCostFee3CostAmount: item.AddToCapCostFee3CostAmount,
    addToCapCostFee3Name: item.AddToCapCostFee3Name,
    addToCapCostFee3ProfitType: item.AddToCapCostFee3ProfitType,
    addToCapCostFee4Amount: item.AddToCapCostFee4Amount,
    addToCapCostFee4CostAmount: item.AddToCapCostFee4CostAmount,
    addToCapCostFee4Flag: item.AddToCapCostFee4Flag,
    addToCapCostFee4Name: item.AddToCapCostFee4Name,
    email1: item.Email1,
    email1Desc: item.Email1Desc,
    email2: item.Email2,
    email2Desc: item.Email2Desc,
    email3: item.Email3,
    email3Desc: item.Email3Desc,
    errorLevel: item.ErrorLevel,
    errorMessage: item.ErrorMessage,
    miscellaneous1: item.Miscellaneous1,
    miscellaneous2: item.Miscellaneous2,
    model: item.Model,
    modelName: item.ModelName,
    modelNo: item.ModelNo,
    modelType: item.ModelType,
    name: item.Name,
    name1: item.Name1,
    netTrade1: item.NetTrade1,
    netTrade2: item.NetTrade2,
    optionsCommDlr: item.OptionsCommDlr,
    term: item.Term,
    texasGapInsuranceAmount: item.TexasGAPInsuranceAmount,
    texasGapInsuranceDealerCommissionBase:
      item.TexasGAPInsuranceDealerCommissionBase,
    totalAnnFees: item.TotalAnnFees,
    totalCapReduction: item.TotalCapReduction,
    totalCashSurplus: item.TotalCashSurplus,
    totalCommission: item.TotalCommission,
    totalCommissionSp1: item.TotalCommissionSP1,
    totalCommissionSp2: item.TotalCommissionSP2,
    totalDown: item.TotalDown,
    totalFinancedFeeOptions: item.TotalFinancedFeeOptions,
    totalGross: item.TotalGross,
    totalInitFees: item.TotalInitFees,
    totalInsurancePremiums: item.TotalInsurancePremiums,
    totalOfMonthlyPayments: item.TotalOfMonthlyPayments,
    totalOptionsFees: item.TotalOptionsFees,
    totalTaxableFees: item.TotalTaxableFees,
    totalTradeAllowance: item.TotalTradeAllowance,
    totalTradesAcv: item.TotalTradesACV,
    totalTradesNet: item.TotalTradesNet,
    totalTradesOver: item.TotalTradesOver,
    totalTradesPayoff: item.TotalTradesPayoff,
    purchaseFlexibleTax1Amount: item.PurchaseFlexibleTax1Amount,
    purchaseFlexibleTax1Base: item.PurchaseFlexibleTax1Base,
    purchaseFlexibleTax1Max: item.PurchaseFlexibleTax1Max,
    purchaseFlexibleTax1MaxCode: item.PurchaseFlexibleTax1MaxCode,
    purchaseFlexibleTax1Name: item.PurchaseFlexibleTax1Name,
    purchaseFlexibleTax1Rate: item.PurchaseFlexibleTax1Rate,
    purchaseFlexibleTax2Amount: item.PurchaseFlexibleTax2Amount,
    purchaseFlexibleTax2Base: item.PurchaseFlexibleTax2Base,
    purchaseFlexibleTax2Max: item.PurchaseFlexibleTax2Max,
    purchaseFlexibleTax2MaxCode: item.PurchaseFlexibleTax2MaxCode,
    purchaseFlexibleTax2Name: item.PurchaseFlexibleTax2Name,
    purchaseFlexibleTax2Rate: item.PurchaseFlexibleTax2Rate,
    purchaseMbiCost: item.PurchaseMBICost,
    purchaseMbisp2CommAmount: item.PurchaseMBISP2CommAmount,
    color: item.Color,
    commOnSaleDlr: item.CommOnSaleDlr,
    commissionPack: item.CommissionPack,
    commissionSp1: item.CommissionSP1,
    commissionSp2: item.CommissionSP2,
    commissionSp3: item.CommissionSP3,
    cont1Date: item.Cont1Date,
    cont1Reason: item.Cont1Reason,
    cont2Date: item.Cont2Date,
    cont2Reason: item.Cont2Reason,
    contractDate: item.ContractDate,
    costPrice: item.CostPrice,
    county: item.County,
    custNo: item.CustNo,
    custOrCompanyCode: item.CustOrCompanyCode,
    customerCashDown: item.CustomerCashDown,
    customerComments: item.CustomerComments,
    initFee10DealerCommissionBase: item.InitFee10DealerCommissionBase,
  };

  const insertDealsschema = createInsertSchema(deals);
  try {
    parse(insertDealsschema, record);
  } catch (error) {
    console.log("ERROR!");
    console.error(v.flatten<typeof insertDealsschema>(error));
  }

  await db.insert(deals).values(record).onConflictDoNothing();
  await upsertDealInitialfee(item);
  await upsertDealTrade1(item);
  await upsertDealTrade2(item);
  await upsertDealTradedealerdefined(item);
  await upsertDealFiaux(item);
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

  await db
    .insert(vehicles)
    .values(record)
    .onConflictDoUpdate({ target: vehicles.vin, set: record });
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
