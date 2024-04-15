import axios from 'axios';

//const API_BASE_URL = 'http://128.199.127.167:9000';
const API_BASE_URL = 'http://localhost:8080';

const instance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getRecruitList = async (keywords: string, location: string, industry: string, page: string, size: string = "110") => {
    const params = new URLSearchParams({ keywords, location, industry, page, size });
    const response = await instance.get(`/insight/saramin/job-list?${params.toString()}`);
    return response.data;
};

function getInsightRecomCompany(date: string, sort: string, size: number, minMemberCount: number) {
    const params = new URLSearchParams({date, sort, size: size.toString(), minMemberCount: minMemberCount.toString(),});
    return instance.get(`/insight/recom/company?${params.toString()}`).then((response) => response.data);
}

function getInsightTopContributions(size: number) {
    const params = new URLSearchParams({size: size.toString(),});
    return instance.get(`/insight/company/contributions?${params.toString()}`).then((response) => response.data);
}

function getAverageSalary() {
    return instance.get(`/insight/average`).then((response) => response.data);
}

function getMonthlyStat() {
    return instance.get(`/insight/monthly`).then((response) => response.data);
}

export function getLocationStatList(locationName: string, size: string = "20", sort: string) {
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() - 2);
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const formattedDate = `${year}${month}`;
    const params = new URLSearchParams({location: locationName, size: size.toString(), sort: sort, date: formattedDate});;
    return instance.post(`/insight/location/list?${params.toString()}`).then((response) => response.data);
}

export function getIndustryStatList(size: string = "20", sort: string) {
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() - 2);
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const formattedDate = `${year}${month}`;
    const params = new URLSearchParams({date: formattedDate, size: size.toString(), sort: sort});
    return instance.post(`/insight/industry/list?${params.toString()}`).then((response) => response.data);
}

export function getLocationDetail(locationName: string, size: string = "20", sort: string) {
    const params = new URLSearchParams({location: locationName, size: size.toString(), sort: sort});;
    return instance.post(`/insight/location/list?${params.toString()}`).then((response) => response.data);
}

export function getIndustryDetail(industryCode: string, size: string = "20", sort: string) {
    const params = new URLSearchParams({industry: industryCode, size: size.toString(), sort: sort});;
    return instance.post(`/insight/industry/list?${params.toString()}`).then((response) => response.data);
}

export function getCompanyinfoList(companyName: string, location: string = '', industry: string = '', sort: string, size: number, minMemberCount: number) {
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() - 2);
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const formattedDate = `${year}${month}`;

    const params = new URLSearchParams({company: companyName, date: formattedDate, location: location, industry: industry, sort: sort, size: size.toString(), minMemberCount: minMemberCount.toString(),});

    return instance.post(`/insight/company/list?${params.toString()}`).then((response) => response.data);
}

export function getCompanyDataList(companyName: string, location: string = '', industry: string = '', sort: string, size: number, minMemberCount: number) {
    const params = new URLSearchParams({company: companyName, location: location, industry: industry, sort: sort, size: size.toString(), minMemberCount: minMemberCount.toString(),});
    return instance.post(`/insight/company/list?${params.toString()}`).then((response) => response.data);
}

export function getCompanyinfoDetailList(companyName: string, location: string = '', industry: string = '', sort: string, size: string) {
    const params = new URLSearchParams({company: companyName, location: location, industry: industry, sort: sort, size: size.toString(),});
    return instance.post(`/insight/company/list?${params.toString()}`).then((response) => response.data);
}

export async function getTodayStat() {
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() - 2);
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const formattedDate = `${year}${month}`;

    let averageSalary, insightRecomCompany, insightTopContributions, monthlyStat;
    let errors = [];

    // Average Salary
    try {
        averageSalary = await getAverageSalary();
    } catch (error) {
        console.error("Average Salary fetch error:", error);
        errors.push("Failed to fetch average salary.");
    }

    // Insight Recom Company
    try {
        insightRecomCompany = await getInsightRecomCompany(formattedDate, 'desc', 4, 100);
    } catch (error) {
        console.error("Insight Recom Company fetch error:", error);
        errors.push("Failed to fetch recommended companies.");
    }

    // Insight Top Contributions
    try {
        insightTopContributions = await getInsightTopContributions(10);
    } catch (error) {
        console.error("Insight Top Contributions fetch error:", error);
        errors.push("Failed to fetch top contributions.");
    }

    // Monthly Stat
    try {
        monthlyStat = await getMonthlyStat();
    } catch (error) {
        console.error("Monthly Stat fetch error:", error);
        errors.push("Failed to fetch monthly statistics.");
    }

    return {
        ok: errors.length === 0,
        errors: errors.length > 0 ? errors : undefined,
        data: {
            averageSalary,
            insightRecomCompany,
            insightTopContributions,
            monthlyStat,
        },
    };
}


export async function getSearchDefault() {
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() - 2);
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const formattedDate = `${year}${month}`;

    let insightRecomCompany
    let errors = [];

    // Insight Recom Company
    try {
        insightRecomCompany = await getInsightRecomCompany(formattedDate, 'desc', 4, 100);
    } catch (error) {
        console.error("Insight Recom Company fetch error:", error);
        errors.push("Failed to fetch recommended companies.");
    }

    return {
        ok: errors.length === 0,
        errors: errors.length > 0 ? errors : undefined,
        data: {
            insightRecomCompany,
        },
    };
}