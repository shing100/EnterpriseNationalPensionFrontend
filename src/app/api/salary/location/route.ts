import {useAverageSalary, useInsightRecomCompany, useInsightTopContributions, useMonthlyStat} from "@/libs/server/client";
import {NextRequest, NextResponse} from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
    // 현재 날짜 객체 생성
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() - 2);
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const formattedDate = `${year}${month}`;

    // useInsightRecomCompany 함수에 계산된 날짜 사용
    const { companies, isLoading, isError } = useInsightRecomCompany('202401', 'desc', 4, 100);
    const { contributions, isLoading : cLoading, isError : cIsError } = useInsightTopContributions(10);
    const { averageSalary, isLoading: aLoading, isError: aIsError } = useAverageSalary();
    const { monthlyStat, isLoading: mLoading, isError: mIsError } = useMonthlyStat();

    return NextResponse.json({
        ok: true,
    });
};
