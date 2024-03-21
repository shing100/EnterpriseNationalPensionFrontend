import { getCompanyinfoList } from "@/libs/server/client";
import {NextRequest, NextResponse} from "next/server";

/*
    회사 정보 리스트를 가져오는 API
    location: string = '', industry: string = '', sort: string, size: number, minMemberCount: number
 */
export const GET = async (req : NextRequest, res : NextResponse) => {
    const searchParams = new URLSearchParams(req.url.split("?")[1]);
    const location = searchParams.get('location') || "";
    const industry = searchParams.get('industry') || "";
    const sort = searchParams.get('sort') || "currentMonthDueAmount";
    const size = Number(searchParams.get('size')) || 10;
    const minMemberCount = Number(searchParams.get('minMemberCount')) || 0;

    const result = await getCompanyinfoList(location, industry, sort, size, minMemberCount).then(stat => stat);
    return NextResponse.json(result);
}
