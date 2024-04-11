export interface IndustryData {
    id: string;
    date: string;
    year: number;
    month: number;
    companyIndustryName: string;
    industryAverageSalary: number;
    industryMedianSalary: number;
    industryUpperQuartileSalary: number;
    industryLowerQuartileSalary: number;
    newMemberCount: number;
    lostMemberCount: number;
    industryCompanyCount: number;
    totalMemberCount: number
    companyIndustryCode: string;
}


export interface CompanyData {
    id: string;
    date: string;
    dateDt: null | string;
    year: number;
    month: number;
    applicationDate: null | string;
    averageSalary: number;
    companyIndustryCode: string;
    companyIndustryName: string;
    companyJibunAddress: string;
    companyName: string;
    companyRoadNameAddress: string;
    companyStatusCode: number;
    companyTypeCode: string;
    csn: string;
    currentMonthDueAmount: number;
    industryAverageSalary: number;
    industryLowerQuartileSalary: number;
    industryMedianSalary: number;
    industryUpperQuartileSalary: number;
    lostMemberCount: number;
    newMemberCount: number;
    originalCompanyName: string;
    reRegistrationDate: null | string;
    regDt: null | string;
    totalMemberCount: number;
    withdrawalDate: null | string;
    zipCode: string;
}

export interface AverageSalary {
    year: string;
    month: string;
    averageSalary: number;
    medianSalary: number;
    upperQuartileSalary: number;
    lowerQuartileSalary: number;
    averageSalaryGrowthRate: number;
    medianSalaryGrowthRate: number;
    upperQuartileSalaryGrowthRate: number;
    lowerQuartileSalaryGrowthRate: number;
    beforeAverageSalary: number;
    beforeMedianSalary: number;
    beforeUpperQuartileSalary: number;
    beforeLowerQuartileSalary: number;
}

export interface MonthlyStatData {
    year: string;
    month: string;
    totalEmployed: number;
    beforeTotalEmployed: number;
    totalLostMemberCount: number;
    beforeTotalLostMemberCount: number;
    totalEmployedMemberCount: number;
    beforeTotalEmployedMemberCount: number;
    totalCompanyCount: number;
    beforeTotalCompanyCount: number;
    totalEmployedRate: number;
    totalLostMemberRate: number;
    totalEmployedMemberRate: number;
    totalCompanyRate: number;
}

export interface LocationStatData {
    locationName: string;
    locationAverageSalary: number;
    locationMedianSalary: number;
    locationUpperQuartileSalary: number;
    locationLowerQuartileSalary: number;
    newMemberCount: number;
    lostMemberCount: number;
    locationCompanyCount: number;
    totalMemberCount: number;
    date: string;
    year: number;
    month: number;
    regDt: string;
}