CREATE TABLE IF NOT EXISTS "COA" (
	"StatCountType" text,
	"Pattern" text,
	"PostDescFlag" text,
	"TechFlag" text,
	"HostItemID" text NOT NULL,
	"AccountDescription" text,
	"AccountNumber" text NOT NULL,
	"AccountNumberRight" text NOT NULL,
	"AccountType" text,
	"AcctSubType" text,
	"AcctUpdDate" date,
	"BeginDate" date,
	"Cntl2Type" text,
	"CntlType" text,
	"CompanyID" text NOT NULL,
	"CompanyIDRight" text NOT NULL,
	"DeptID" text,
	"DeptIDRight" text,
	"EndDate" date,
	"ErrorLevel" integer,
	"ErrorMessage" text,
	"FranchiseId" text,
	"BFSched" text,
	"DFSched" text,
	"IncBalGrp" text,
	"IncBalGrpDesc" text,
	"IncBalSubGrp" text,
	"IncBalSubGrpDesc" text,
	"ProdType" integer,
	"RptGrp" text,
	"RptGrpDesc" text,
	"UnaGrp" text,
	"UnaGrpDesc" text,
	"Chain" text,
	CONSTRAINT "COA_pkey" PRIMARY KEY("HostItemID","AccountNumber","CompanyID")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "GLJE" (
	"HostItemID" text NOT NULL,
	"AccountingDate" date NOT NULL,
	"AccountNumber" text NOT NULL,
	"AccountNumberRight" text NOT NULL,
	"CompanyID" text NOT NULL,
	"CompanyIDRight" text NOT NULL,
	"Control" text,
	"Control2" text,
	"ControlRight" text,
	"Control2Right" text,
	"ControlType" integer,
	"ControlType2" integer,
	"CurrentMonth" text,
	"DetailDescription" text,
	"DistillControlType" integer,
	"DistillControlType2" integer,
	"ErrorLevel" integer,
	"ErrorMessage" text,
	"JournalID" integer,
	"JournalIDRight" integer,
	"PostingAmount" numeric(10, 2),
	"PostingSequence" integer,
	"PostingTime" bigint,
	"ProdNo" text,
	"ProdNo2" text,
	"ProdNoRight" text,
	"ProdNo2Right" text,
	"ProdType" integer,
	"ProdType2" integer,
	"Refer" text,
	"ReferRight" text,
	"ScheduleNumber" text,
	"StatCount" integer,
	CONSTRAINT "GLJE_pkey" PRIMARY KEY("HostItemID","AccountingDate","AccountNumber")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "customers" (
	"HostItemID" varchar(40) NOT NULL,
	"CustNo" varchar(17) NOT NULL,
	"ErrorLevel" varchar(1) NOT NULL,
	"NameCode" varchar(1) NOT NULL,
	"DateAdded" date NOT NULL,
	"BlockEMail" varchar(1) NOT NULL,
	"BlockMail" varchar(1) NOT NULL,
	"BlockPhone" varchar(1) NOT NULL,
	"Mailability" varchar(1),
	"NameBalances1" numeric(15, 2),
	"Address" varchar(45),
	"AddressSecondLine" varchar(45),
	"BusinessPhone" varchar(20),
	"BusinessPhoneExt" varchar(7),
	"Cellular" varchar(20),
	"City" varchar(35),
	"ContactMethod" varchar(1),
	"Country" varchar(20),
	"County" varchar(25),
	"DriverLicenseStOrProv" varchar(2),
	"Email" varchar(50),
	"EmailDesc" varchar(20),
	"EmailDesc2" varchar(20),
	"EmailDesc3" varchar(20),
	"Employer" varchar(32),
	"ErrorMessage" varchar(80),
	"FirstName" varchar(25),
	"HomeFax" varchar(20),
	"Telephone" varchar(12),
	"Language" varchar(2),
	"LastName" varchar(40),
	"MiddleName" varchar(25),
	"Name1" varchar(45),
	"Name2Company" varchar(30),
	"NameCompany" varchar(45),
	"Pager" varchar(20),
	"PartsCounterCode" varchar(20),
	"PartsFlag" varchar(2),
	"PartsType" varchar(1),
	"PreferredContactDay" varchar(1),
	"PreferredContactMethod" varchar(1),
	"PreferredContactTime" varchar(1),
	"SaleType" varchar(20),
	"SecondaryHomePhone" varchar(12),
	"State" varchar(2),
	"TaxCode" varchar(20),
	"Title1" varchar(30),
	"ZipOrPostalCode" varchar(20),
	"HomePhone" varchar(12),
	"PreferredLanguage" varchar(20),
	"Comment" varchar(255),
	"CommentDate" date,
	"DriverLicenseExpDate" date,
	"Email2" varchar(50),
	"Email3" varchar(50),
	"LastUpdated" date,
	"Gender" varchar(1),
	"CreditLimit" numeric(15, 2),
	"CurrentDue" numeric(12, 2),
	"Over30Due" numeric(12, 2),
	"Over60Due" numeric(12, 2),
	"Over90Due" numeric(12, 2),
	"Over120Due" numeric(12, 2),
	"SpecInstructions2" varchar(60),
	"SpecInstructions3" varchar(60),
	"SpecInstructions4" varchar(60),
	"SpecInstructions5" varchar(60),
	"InsAgency" varchar(30),
	"InsAgentAddress1" varchar(45),
	"InsAgentAddress2" varchar(45),
	"InsAgentCity" varchar(35),
	"InsAgentPhone" varchar(20),
	"InsAgentState" varchar(2),
	"InsAgentZipOrPostalCode" varchar(20),
	"InsCompanyAddress1" varchar(45),
	"InsCompanyAddress2" varchar(45),
	"InsCompanyCity" varchar(35),
	"InsCompanyPhone" varchar(20),
	"InsCompanyState" varchar(2),
	"InsCompanyZipOrPostalCode" varchar(20),
	"InsPolicyExpDate" date,
	"InsVerifiedBy" varchar(30),
	"InsVerifiedDate" date,
	"InsPolicyNo" varchar(25),
	"ServiceCustomer" varchar(2),
	"TextMessagePhone" varchar(20),
	"TextMessageCarrier" varchar(25),
	"Name2First" varchar(20),
	"Name2Last" varchar(30),
	"Name2Middle" varchar(20),
	"Name2Suffix" varchar(5),
	"Name2Title" varchar(5),
	"NameSuffix" varchar(5),
	"NameTitle" varchar(5),
	"InsAgent" varchar(30),
	"InsCompany" varchar(30),
	"SpecInstructions" varchar(40),
	"DeleteDataFlag" smallint,
	"OptOutFlag" smallint,
	"OptOutDate" date,
	"OptOutTime" varchar(20),
	"DeleteDataDate" date,
	"DeleteDataTime" varchar(20),
	CONSTRAINT "customers_pkey" PRIMARY KEY("HostItemID","CustNo")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "deal_fiaux" (
	"FiWipStatusCode" varchar(2) NOT NULL,
	"Branch" varchar(20) NOT NULL,
	"HostItemID" varchar(20) NOT NULL,
	"FiAux1" varchar(50),
	"FiAux40" integer,
	"FiAux41" integer,
	"FiAux42" integer,
	"FiAux43" integer,
	"FiAux44" integer,
	"FiAux45" integer,
	"FiAux46" integer,
	"FiAux47" integer,
	"FiAux48" integer,
	"FiAux49" integer,
	"FiAux5" integer,
	"FiAux50" varchar(50),
	"FiAux6" varchar(50),
	"FiAux7" integer,
	"FiAux8" varchar(50),
	"FiAux9" varchar(50),
	"FiAux10" varchar(50),
	"FiAux11" varchar(50),
	"FiAux12" varchar(50),
	"FiAux13" varchar(50),
	"FiAux14" varchar(50),
	CONSTRAINT "deal_fiaux_pkey" PRIMARY KEY("FiWipStatusCode","Branch","HostItemID")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "deal_initialfee" (
	"FiWipStatusCode" varchar(2) NOT NULL,
	"Branch" varchar(20) NOT NULL,
	"HostItemID" varchar(20) NOT NULL,
	"InitialFee4ProfitType" varchar(1),
	CONSTRAINT "deal_initialfee_pkey" PRIMARY KEY("FiWipStatusCode","Branch","HostItemID")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "deal_trade1" (
	"FiWipStatusCode" varchar(2) NOT NULL,
	"Branch" varchar(20) NOT NULL,
	"HostItemID" varchar(20) NOT NULL,
	"Trade1Model" varchar(50),
	"Trade1ModelName" varchar(50),
	"Trade1ModelNo" varchar(50),
	"Trade1ModelType" varchar(50),
	"Trade1Over" numeric(10, 2),
	"Trade1PayOff" numeric(10, 2),
	"Trade1Stock" varchar(50),
	"Trade1Style" varchar(15),
	"Trade1VIN" varchar(17),
	"Trade1Year" integer,
	"Trade1ACV" numeric(12, 2),
	"Trade1Color" varchar(50),
	"Trade1Gross" numeric(12, 2),
	"Trade1Make" varchar(50),
	"Trade1MakeName" varchar(50),
	"Trade1Mileage" integer,
	CONSTRAINT "deal_trade1_pkey" PRIMARY KEY("FiWipStatusCode","Branch","HostItemID")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "deal_trade2" (
	"FiWipStatusCode" varchar(2) NOT NULL,
	"Branch" varchar(20) NOT NULL,
	"HostItemID" varchar(20) NOT NULL,
	"Trade2ACV" varchar(17),
	"Trade2Color" varchar(17),
	"Trade2Gross" numeric(10, 2),
	"Trade2Make" varchar(50),
	"Trade2Mileage" integer,
	"Trade2Model" varchar(17),
	"Trade2ModelName" varchar(17),
	"Trade2ModelNo" varchar(17),
	"Trade2ModelType" varchar(17),
	"Trade2Over" numeric(10, 2),
	"Trade2PayOff" numeric(10, 2),
	"Trade2Stock" varchar(50),
	"Trade2Style" varchar(15),
	"Trade2VIN" varchar(17),
	"Trade2Year" integer,
	CONSTRAINT "deal_trade2_pkey" PRIMARY KEY("FiWipStatusCode","Branch","HostItemID")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "deal_tradedealerdefined" (
	"FiWipStatusCode" varchar(2) NOT NULL,
	"Branch" varchar(20) NOT NULL,
	"HostItemID" varchar(20) NOT NULL,
	"TradeDealerDefined1" varchar(17),
	"TradeDealerDefined2" varchar(17),
	"TradeDealerDefined3" varchar(17),
	"TradeDealerDefined4" varchar(17),
	"TradeDealerDefined5" varchar(17),
	"TradeDealerDefined6" varchar(17),
	"TradeDealerDefined7" varchar(17),
	"TradeDealerDefined8" varchar(17),
	CONSTRAINT "deal_tradedealerdefined_pkey" PRIMARY KEY("FiWipStatusCode","Branch","HostItemID")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "deals" (
	"FiWipStatusCode" varchar(2) NOT NULL,
	"Branch" varchar(20) NOT NULL,
	"HostItemID" varchar(20) NOT NULL,
	"State" varchar(2),
	"Make" varchar(50),
	"MakeName" varchar(50),
	"MileageExpected" integer,
	"MileagePenaltyRate" numeric(10, 2),
	"StockNo" varchar(50),
	"Tax" numeric(10, 2),
	"Tax1Name" varchar(50),
	"Tax1Rate" numeric(10, 2),
	"Tax1Base" numeric(10, 2),
	"Tax1Amount" numeric(10, 2),
	"MBITerm" smallint,
	"MSRP" numeric(10, 2),
	"MbiPolicyNo" varchar(50),
	"MileagePenaltyAmount" varchar(50),
	"SurplusCash" numeric(10, 2),
	"Tax2Amount" numeric(10, 2),
	"Tax2Name" varchar(50),
	"Tax2Rate" numeric(10, 2),
	"Tax3Amount" numeric(10, 2),
	"Tax3Name" varchar(50),
	"Tax3Rate" numeric(10, 2),
	"Tax4Amount" numeric(10, 2),
	"Tax4Name" varchar(50),
	"Tax4Rate" numeric(10, 2),
	"USLuxuryExciseTaxAmount" numeric(10, 2),
	"FeeOption3Amount" numeric(10, 2),
	"FeeOption3Cost" numeric(10, 2),
	"FeeOption3Name" varchar(25),
	"FeeOption3ProfitType" varchar(2),
	"FeeOption4Amount" numeric(10, 2),
	"FeeOption4Cost" numeric(10, 2),
	"FeeOption4Name" varchar(25),
	"FeeOption4ProfitType" varchar(2),
	"FeeOption5Amount" numeric(10, 2),
	"FeeOption5Cost" numeric(10, 2),
	"FeeOption5Name" varchar(25),
	"FeeOption5ProfitType" varchar(2),
	"FeeOption6Amount" numeric(10, 2),
	"FeeOption6Cost" numeric(10, 2),
	"FeeOption6Name" varchar(25),
	"FeeOption6ProfitType" varchar(2),
	"FeeOption7Amount" numeric(10, 2),
	"FeeOption7Cost" numeric(10, 2),
	"FeeOption7Name" varchar(25),
	"FeeOption7ProfitType" varchar(2),
	"FeeOption8Amount" numeric(10, 2),
	"FeeOption8Cost" numeric(10, 2),
	"FeeOption8Name" varchar(25),
	"FeeOption8ProfitType" varchar(2),
	"FeeOption9Amount" numeric(10, 2),
	"FeeOption9Cost" numeric(10, 2),
	"FeeOption9Name" varchar(18),
	"FeeOption9ProfitType" varchar(2),
	"InitialFee4ProfitType" varchar(1),
	"InitialFee5Amount" numeric(10, 2),
	"InitialFee5CostAmount" numeric(10, 2),
	"InitialFee5Name" varchar(21),
	"InitialFee5ProfitType" varchar(1),
	"InitialFee6Amount" numeric(10, 2),
	"InitialFee6CostAmount" numeric(10, 2),
	"InitialFee6Name" varchar(21),
	"InitialFee6ProfitType" varchar(1),
	"InitialFee7Amount" numeric(10, 2),
	"InitialFee7CostAmount" numeric(10, 2),
	"InitialFee7Name" varchar(21),
	"InitialFee7ProfitType" varchar(1),
	"InitialFee8Amount" numeric(10, 2),
	"InitialFee8CostAmount" numeric(10, 2),
	"InitialFee8Name" varchar(21),
	"InitialFee8ProfitType" varchar(1),
	"InitialFee9Amount" numeric(10, 2),
	"InitialFee9CostAmount" numeric(10, 2),
	"InitialFee9Name" varchar(21),
	"InitialFee9ProfitType" varchar(1),
	"Ins1Cost" numeric(10, 2),
	"Ins1Fee" numeric(10, 2),
	"Ins1Income" numeric(10, 2),
	"Ins2Cost" numeric(10, 2),
	"Ins2Fee" numeric(10, 2),
	"Ins2Income" numeric(10, 2),
	"Ins3Cost" numeric(10, 2),
	"Ins3Fee" numeric(10, 2),
	"Ins3Income" numeric(10, 2),
	"Insurance1Deductible" numeric(10, 2),
	"Insurance1Limit" numeric(10, 2),
	"Insurance1LimitMiles" smallint,
	"Insurance1Name" varchar(21),
	"BalloonRate" numeric(10, 2),
	"OnePayAmount" numeric(10, 2),
	"FinInstituteCode" varchar(12),
	"FinanceAmt" numeric(10, 2),
	"FinanceCharge" numeric(10, 2),
	"FinanceSource" varchar(50),
	"FirstPayDate" date,
	"BackGross" numeric(10, 2),
	"BackWeOwes" numeric(10, 2),
	"BalloonAmount" numeric(10, 2),
	"BankFee" numeric(10, 2),
	"BaseResidual" numeric(10, 2),
	"BillingClerk" integer,
	"BodyStyle" varchar(50),
	"BonusSP1" numeric(10, 2),
	"BonusSP2" numeric(10, 2),
	"BonusSP3" numeric(10, 2),
	"BusinessPhone" varchar(50),
	"BuyRateAPR" numeric(10, 2),
	"BuyRateAddOn" numeric(10, 2),
	"BuyRateLFM" numeric(10, 2),
	"BuyRateLMF" numeric(10, 2),
	"CLCost" numeric(10, 2),
	"CLIncome" numeric(10, 2),
	"CLPremium" numeric(10, 2),
	"CRMClosingMgrId" varchar(50),
	"CRMClosingMgrName" varchar(50),
	"CRMCommisionClosingMgr" varchar(50),
	"CRMCommisionFIMgr" numeric(10, 2),
	"CRMCommisionSP1" numeric(10, 2),
	"CRMCommisionSP2" numeric(10, 2),
	"CRMCommisionSP3" numeric(10, 2),
	"CRMCommisionSalesMgr" numeric(10, 2),
	"CRMCommisionTotal" numeric(10, 2),
	"CRMFIMgrId" varchar(50),
	"CRMFIMgrName" varchar(50),
	"CRMFlag" smallint,
	"VIN" varchar(17),
	"VehInventoryCompany" smallint,
	"VehSaleCompany" smallint,
	"VehicleMileage" integer,
	"WAQNumber" integer,
	"WarrantyFee" numeric(10, 2),
	"WeOweBackSaleTotal" numeric(10, 2),
	"WeOweCostTotal" numeric(10, 2),
	"WeOweFrontGrossSales" numeric(10, 2),
	"WeOweResidualTableTotal" numeric(10, 2),
	"WeOweResidualTotal" numeric(10, 2),
	"WeOweSaleHardTotal" numeric(10, 2),
	"WeOweSaleSoftTotal" numeric(10, 2),
	"WeOweSaleTotal" numeric(10, 2),
	"Year" integer,
	"ZipOrPostalCode" varchar(20),
	"SecurityDepositAmount" numeric(10, 2),
	"SellRateAPR" numeric(10, 2),
	"SellRateAddOn" numeric(10, 2),
	"SellRateLMF" numeric(10, 2),
	"ServiceTaxAmount" numeric(10, 2),
	"LeaseEndPercentageRate" smallint,
	"LeaseEndValue" numeric(10, 2),
	"LeaseMileageAllowance" integer,
	"LeasePayment" numeric(10, 2),
	"LeaseType" varchar(2),
	"LevelizedLifeAmount" numeric(10, 2),
	"LevelizedLifeDealerComm" numeric(10, 2),
	"LevelizedLifeIncome" numeric(10, 2),
	"LienHolderAddress" varchar(100),
	"LienHolderCity" varchar(50),
	"LienHolderName" varchar(100),
	"LienHolderName2" varchar(100),
	"LienHolderPhone" varchar(20),
	"LienHolderState" varchar(2),
	"LienHolderZip" varchar(20),
	"AddToCapCostFee4ProfitType" varchar(2),
	"AddToCapCostFee5Amount" numeric(10, 2),
	"AddToCapCostFee5CostAmount" numeric(10, 2),
	"AddToCapCostFee5Name" varchar(25),
	"AddToCapCostFee5ProfitType" varchar(2),
	"AddToCapCostFee6Amount" numeric(10, 2),
	"AddToCapCostFee6CostAmount" numeric(10, 2),
	"AddToCapCostFee6Name" varchar(25),
	"AddToCapCostFee6ProfitType" varchar(2),
	"AddToCapCostFee7Amount" numeric(10, 2),
	"AddToCapCostFee7CostAmount" numeric(10, 2),
	"AddToCapCostFee7Name" varchar(25),
	"AddToCapCostFee7ProfitType" varchar(2),
	"Address" varchar(100),
	"AdjustedCapCost" numeric(10, 2),
	"AdjustedCostofVehicle" numeric(10, 2),
	"AdjustmentsDealerDefined" numeric(10, 2),
	"AdjustmentsROPO" numeric(10, 2),
	"AdjustmentsStandard" numeric(10, 2),
	"Age" smallint,
	"AmountDueAtStart" numeric(10, 2),
	"AnnualFee1Amount" numeric(10, 2),
	"AnnualFee1Name" varchar(25),
	"AnnualFee2Amount" numeric(10, 2),
	"AnnualFee2Name" varchar(25),
	"AnnualFee3Amount" numeric(10, 2),
	"AnnualFee3Name" varchar(25),
	"AnnualFee3DealerCommBase" numeric(10, 2),
	"AnnualFee4Amount" numeric(10, 2),
	"AnnualFee4Name" varchar(25),
	"AnnualFee4DealerCommBase" numeric(10, 2),
	"AnnualFee5Amount" numeric(10, 2),
	"AnnualFee5Name" varchar(25),
	"AnnualFee5DealerCommBase" numeric(10, 2),
	"AssnSlsperson" varchar(50),
	"Insurance1Term" integer,
	"Insurance2Deductible" numeric(10, 2),
	"Insurance2Limit" numeric(10, 2),
	"Insurance2LimitMiles" integer,
	"Insurance2Name" varchar(50),
	"Insurance2Term" integer,
	"Insurance3Deductible" numeric(10, 2),
	"Insurance3Limit" numeric(10, 2),
	"Insurance3LimitMiles" integer,
	"Insurance3Name" varchar(50),
	"Insurance3Term" integer,
	"InsuranceCommDlr" numeric(10, 2),
	"InsuranceTypeCode" varchar(50),
	"LSTGSTAmount" numeric(10, 2),
	"LSTGSTRate" numeric(5, 4),
	"LSTGSTRateFlat" numeric(10, 2),
	"LastPayAmount" numeric(10, 2),
	"LastPayDate" date,
	"OutTheDoorPrice" numeric(10, 2),
	"PaymentAmt" numeric(10, 2),
	"PaymentCode" varchar(50),
	"PaymentStyle" varchar(50),
	"Payments" integer,
	"PickupDate1" date,
	"PickupDate2" date,
	"PickupDate3" date,
	"PickupPay1" numeric(10, 2),
	"PickupPay2" numeric(10, 2),
	"PickupPay3" numeric(10, 2),
	"ExtWarrantyExpMilesLease" integer,
	"ExtWarrantyTermLease" integer,
	"FIDealType" varchar(5),
	"FIIncome" numeric(10, 2),
	"FIMgr1" varchar(50),
	"FIMgr2" varchar(50),
	"FeeOption10Amount" numeric(10, 2),
	"FeeOption10Cost" numeric(10, 2),
	"FeeOption10Name" varchar(50),
	"FeeOption10ProfitType" varchar(5),
	"FeeOption1Amount" numeric(10, 2),
	"FeeOption1Cost" numeric(10, 2),
	"FeeOption1Name" varchar(50),
	"FeeOption1ProfitType" varchar(5),
	"FeeOption2Amount" numeric(10, 2),
	"FeeOption2Cost" numeric(10, 2),
	"FeeOption2Name" varchar(50),
	"FeeOption2ProfitType" varchar(5),
	"RebateAmount" numeric(10, 2),
	"SLSDealType" varchar(50),
	"SaleCreditSP1" numeric(10, 2),
	"SaleCreditSP2" numeric(10, 2),
	"SaleCreditSP3" numeric(10, 2),
	"SalePriceWithWeOwes" numeric(10, 2),
	"SaleType" varchar(50),
	"SalesAccount" varchar(50),
	"SalesDate" date,
	"SalesManagementDealType" varchar(50),
	"SalesMgr" varchar(50),
	"Salesperson1" varchar(50),
	"Salesperson2" varchar(50),
	"Salesperson3" varchar(50),
	"CRMSP1Id" varchar(50),
	"CRMSP1Name" varchar(50),
	"CRMSP2Id" varchar(50),
	"CRMSP2Name" varchar(50),
	"CRMSP3Id" varchar(50),
	"CRMSP3Name" varchar(50),
	"CRMSaleCreditClosingMgr" numeric(10, 2),
	"CRMSaleCreditFIMgr" numeric(10, 2),
	"CRMSaleCreditSP1" numeric(10, 2),
	"CRMSaleCreditSP2" numeric(10, 2),
	"CRMSaleCreditSP3" numeric(10, 2),
	"CRMSaleCreditSalesMgr" numeric(10, 2),
	"CRMSaleType" varchar(50),
	"CRMSalesCreditTotal" numeric(10, 2),
	"CRMSalesMgrId" varchar(50),
	"CRMSalesMgrName" varchar(50),
	"CRMSpiffClosingMgr" numeric(10, 2),
	"CRMSpiffFIMgr" numeric(10, 2),
	"CRMSpiffSP1" numeric(10, 2),
	"CRMSpiffSP2" numeric(10, 2),
	"CRMSpiffSP3" numeric(10, 2),
	"CRMSpiffSalesMgr" numeric(10, 2),
	"CRMSpiffTotal" numeric(10, 2),
	"CalcMethod" varchar(50),
	"CashCapReduction" numeric(10, 2),
	"CashDown" numeric(10, 2),
	"CashPrice" numeric(10, 2),
	"City" varchar(50),
	"ClosingMgr" varchar(50),
	"CoAddress" varchar(100),
	"CoBusinessPhone" varchar(20),
	"CoBuyer" varchar(50),
	"CoCity" varchar(50),
	"CoCounty" varchar(50),
	"CoCustNo" varchar(50),
	"CoHomePhone" varchar(20),
	"CoName1" varchar(50),
	"CoState" varchar(2),
	"CoZipOrPostalCode" varchar(20),
	"DealerDefined6" varchar(50),
	"DealerDefined7" varchar(50),
	"DealerDefined8" varchar(50),
	"DeliveryCoord" varchar(50),
	"DepositAmount" numeric(10, 2),
	"DepositType" varchar(50),
	"DueOnDelivery" numeric(10, 2),
	"FrontEndGrossProfit" numeric(10, 2),
	"FrontGross" numeric(10, 2),
	"FrontWeOwes" numeric(10, 2),
	"FrontWeOwesGrossCost" numeric(10, 2),
	"FrontWeOwesGrossSales" numeric(10, 2),
	"GLVehicleCost" numeric(10, 2),
	"GrossProfit" numeric(10, 2),
	"HomePhone" varchar(20),
	"IncentiveDealer" numeric(10, 2),
	"IncentiveProgram" varchar(50),
	"MBICarrier" varchar(50),
	"MBICost" numeric(10, 2),
	"MBIDeductible" numeric(10, 2),
	"MBIEligComment" varchar(200),
	"MBIEligFlag" varchar(5),
	"MBIFee" numeric(10, 2),
	"MBIIncome" numeric(10, 2),
	"MBILimit" numeric(10, 2),
	"MBILimitMax" numeric(10, 2),
	"MBIName" varchar(50),
	"AHCost" numeric(10, 2),
	"AHIncome" numeric(10, 2),
	"AHPremium" numeric(10, 2),
	"APR" numeric(5, 2),
	"AccountingAccount" varchar(50),
	"AccountingDate" date,
	"AddCapCostFee3DealerCommBase" numeric(10, 2),
	"AddCapCostFee4DealerCommBase" numeric(10, 2),
	"AddCapCostFee5DealerCommBase" numeric(10, 2),
	"AddCapCostFee6DealerCommBase" numeric(10, 2),
	"AddCapCostFee7DealerCommBase" numeric(10, 2),
	"AddToCapAmount" numeric(10, 2),
	"AddToCapCostFee1Amount" numeric(10, 2),
	"AddToCapCostFee1CostAmount" numeric(10, 2),
	"AddToCapCostFee1Name" varchar(50),
	"AddToCapCostFee1ProfitType" varchar(5),
	"AddToCapCostFee2Amount" numeric(10, 2),
	"AddToCapCostFee2CostAmount" numeric(10, 2),
	"AddToCapCostFee2Name" varchar(50),
	"AddToCapCostFee2ProfitType" varchar(5),
	"AddToCapCostFee3Amount" numeric(10, 2),
	"AddToCapCostFee3CostAmount" numeric(10, 2),
	"AddToCapCostFee3Name" varchar(50),
	"AddToCapCostFee3ProfitType" varchar(5),
	"AddToCapCostFee4Amount" numeric(10, 2),
	"AddToCapCostFee4CostAmount" numeric(10, 2),
	"AddToCapCostFee4Flag" varchar(5),
	"AddToCapCostFee4Name" varchar(50),
	"Email1" varchar(100),
	"Email1Desc" varchar(100),
	"Email2" varchar(100),
	"Email2Desc" varchar(100),
	"Email3" varchar(100),
	"Email3Desc" varchar(100),
	"ErrorLevel" integer,
	"ErrorMessage" varchar(255),
	"Miscellaneous1" varchar(50),
	"Miscellaneous2" varchar(50),
	"Model" varchar(50),
	"ModelName" text,
	"ModelNo" varchar(50),
	"ModelType" varchar(50),
	"Name" varchar(50),
	"Name1" varchar(50),
	"NetTrade1" numeric(12, 2),
	"NetTrade2" numeric(12, 2),
	"OptionsCommDlr" numeric(12, 2),
	"Term" integer,
	"TexasGAPInsuranceAmount" numeric(12, 2),
	"TexasGAPInsuranceDealerCommissionBase" numeric(12, 2),
	"TotalAnnFees" numeric(12, 2),
	"TotalCapReduction" numeric(12, 2),
	"TotalCashSurplus" numeric(12, 2),
	"TotalCommission" numeric(12, 2),
	"TotalCommissionSP1" numeric(12, 2),
	"TotalCommissionSP2" numeric(12, 2),
	"TotalDown" numeric(12, 2),
	"TotalFinancedFeeOptions" numeric(12, 2),
	"TotalGross" numeric(12, 2),
	"TotalInitFees" numeric(12, 2),
	"TotalInsurancePremiums" numeric(12, 2),
	"TotalOfMonthlyPayments" numeric(12, 2),
	"TotalOptionsFees" numeric(12, 2),
	"TotalTaxableFees" numeric(12, 2),
	"TotalTradeAllowance" numeric(12, 2),
	"TotalTradesACV" numeric(12, 2),
	"TotalTradesNet" numeric(12, 2),
	"TotalTradesOver" numeric(12, 2),
	"TotalTradesPayoff" numeric(12, 2),
	"PurchaseFlexibleTax1Amount" numeric(12, 2),
	"PurchaseFlexibleTax1Base" numeric(12, 2),
	"PurchaseFlexibleTax1Max" numeric(12, 2),
	"PurchaseFlexibleTax1MaxCode" varchar(50),
	"PurchaseFlexibleTax1Name" varchar(50),
	"PurchaseFlexibleTax1Rate" numeric(5, 4),
	"PurchaseFlexibleTax2Amount" numeric(12, 2),
	"PurchaseFlexibleTax2Base" numeric(12, 2),
	"PurchaseFlexibleTax2Max" numeric(12, 2),
	"PurchaseFlexibleTax2MaxCode" varchar(50),
	"PurchaseFlexibleTax2Name" varchar(50),
	"PurchaseFlexibleTax2Rate" numeric(5, 4),
	"PurchaseMBICost" numeric(12, 2),
	"PurchaseMBISP2CommAmount" numeric(12, 2),
	"Color" varchar(50),
	"CommOnSaleDlr" numeric(12, 2),
	"CommissionPack" numeric(12, 2),
	"CommissionSP1" numeric(12, 2),
	"CommissionSP2" numeric(12, 2),
	"CommissionSP3" numeric(12, 2),
	"Cont1Date" date,
	"Cont1Reason" varchar(50),
	"Cont2Date" date,
	"Cont2Reason" varchar(50),
	"ContractDate" date,
	"CostPrice" numeric(12, 2),
	"County" varchar(50),
	"CustNo" varchar(20),
	"CustOrCompanyCode" varchar(50),
	"CustomerCashDown" numeric(12, 2),
	"CustomerComments" text,
	"InitFee10DealerCommissionBase" numeric(12, 2),
	CONSTRAINT "deals_pkey" PRIMARY KEY("FiWipStatusCode","Branch","HostItemID")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "vehicles" (
	"vin" varchar(17) PRIMARY KEY NOT NULL,
	"primary_driver_no" text,
	"accounting_account" text,
	"model" text,
	"model_name" text,
	"model_type" text,
	"trim_level" text,
	"engine_description" text,
	"engine_no" text,
	"color" text,
	"interior_color" text,
	"body_style" text,
	"fuel_type" text,
	"year" integer,
	"make" text,
	"make_name" text,
	"manufacturer" text,
	"plant_of_manufacture" text,
	"number_of_doors" integer,
	"cylinder_no" integer,
	"commission_price" numeric(10, 2),
	"retail_price_update_date" date,
	"vehicle_sold_date" date,
	"sold_date" date,
	"mileage" integer,
	"sold_mileage" integer,
	"stock_no" text,
	"stock_type" text,
	"status" text,
	"balance" numeric(10, 2),
	"price1" numeric(10, 2),
	"price2" numeric(10, 2),
	"options" text,
	"order_date" date,
	"expected_delivery_date" date,
	"actual_cash_value" numeric(10, 2),
	"advertised_price" numeric(10, 2),
	"advertised_price_exp_date" date,
	"advertised_price_start_date" date,
	"total_options_cost" numeric(10, 2),
	"total_options_invoice" numeric(10, 2),
	"total_options_retail" numeric(10, 2),
	"invoice_pack_amount" numeric(10, 2),
	"commission_pack_amount" numeric(10, 2),
	"commission_pack_percent" numeric(10, 2),
	"entry_date" date,
	"last_activity_date" date
);
