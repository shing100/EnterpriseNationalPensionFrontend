export interface IndustryData {
    companyIndustryName: string;
    industryAverageSalary: number;
    industryMedianSalary: number;
    industryUpperQuartileSalary: number;
    industryLowerQuartileSalary: number;
    newMemberCount: number;
    lostMemberCount: number;
    industryCompanyCount: number;
    totalMemberCount: number;
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
