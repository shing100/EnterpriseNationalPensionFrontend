import fetch from 'node-fetch';

interface ApiResponse {
    ok: boolean;
    resultCnt: number;
    resultList?: any;
    error?: string;
}

const API_BASE_URL = 'http://localhost:8080';

export async function fetchInsightRecomCompany(date: string, sort: string, size: number, minMemberCount: number): Promise<{
    resultCnt?: any;
    ok: boolean;
    resultList?: any
    error?: string;
}> {
    const baseUrl = API_BASE_URL + '/insight/recom/company';
    const params = new URLSearchParams({
        date,
        sort,
        size: size.toString(),
        minMemberCount: minMemberCount.toString(),
    });

    try {
        const response = await fetch(`${baseUrl}?${params.toString()}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 필요한 경우 추가 헤더를 여기에 추가하세요.
            },
        });

        if (!response.ok) {
            // 서버에서 응답이 성공적이지 않은 경우
            return { ok: false, error: `Server responded with status: ${response.status}` };
        }

        const data = await response.json();
        return { ok: true, resultCnt: data.resultCnt, resultList: data.resultList };
    } catch (error) {
        // 네트워크 오류 또는 요청 실패
        return { ok: false, error: `Failed to fetch data: ${error}` };
    }
}
