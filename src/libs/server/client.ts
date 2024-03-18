import axios from 'axios';

const API_BASE_URL = 'http://128.199.127.167:9000';

const instance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const fetchRecruitList = async (keywords: string, location: string, industry: string, page: string, size: string = "110") => {
    const params = new URLSearchParams({ keywords, location, industry, page, size });

    const response = await instance.get(`${API_BASE_URL}/insight/saramin/job-list?${params.toString()}`, {
        headers: { 'Content-Type': 'application/json' },
    });

    return response.data;
};


export async function useInsightRecomCompany(date: string, sort: string, size: number, minMemberCount: number) {
    const params = new URLSearchParams({date, sort, size: size.toString(), minMemberCount: minMemberCount.toString(),});
    return await instance.get(`/insight/recom/company?${params.toString()}`);
}

export async function useInsightTopContributions(size: number) {
    const params = new URLSearchParams({size: size.toString(),});
    return await instance.get(`/insight/company/contributions?${params.toString()}`);
}

export async function useAverageSalary() {
    return await instance.get(`/insight/average`);
}

export async function useMonthlyStat() {
    return await instance.get(`/insight/monthly`);
}

export async function useLocationStatList() {
    return await instance.get(`/insight/location/list`);
}

export async function useIndustryStatList() {
    return await instance.get(`/insight/location/list`);
}