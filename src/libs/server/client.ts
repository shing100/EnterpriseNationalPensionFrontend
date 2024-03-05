import useSWR from 'swr';

interface ApiResponse {
    ok: boolean;
    resultCnt: number;
    resultList?: any[];
    error?: string;
}

const API_BASE_URL = 'http://localhost:8080';

// useSWR에 사용할 fetcher 함수
const fetchWithSWR = async (url: string) => {
    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            // 필요한 경우 추가 헤더를 여기에 추가하세요.
        },
    });

    if (!response.ok) {
        // 서버에서 응답이 성공적이지 않은 경우
        throw new Error(`Server responded with status: ${response.status}`);
    }

    return response.json();
};

export function useInsightRecomCompany(date: string, sort: string, size: number, minMemberCount: number) {
    const params = new URLSearchParams({
        date,
        sort,
        size: size.toString(),
        minMemberCount: minMemberCount.toString(),
    });

    const { data, error } = useSWR<ApiResponse>(`${API_BASE_URL}/insight/recom/company?${params.toString()}`, fetchWithSWR);

    return {
        companies: data?.resultList,
        isLoading: !error && !data,
        isError: error,
    };
}
