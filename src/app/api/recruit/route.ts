import {getRecruitList} from "@/libs/server/client";
import {NextRequest, NextResponse} from "next/server";

export const GET = async (req : NextRequest, res : NextResponse) => {
    const searchParams = new URLSearchParams(req.url.split("?")[1]);
    const keywords = searchParams.get('keywords') || "";
    const location = searchParams.get('location') || "";
    const industry = searchParams.get('industry') || "";
    const page = searchParams.get('page') || "1";
    const size = searchParams.get('size') || "110";
    const result = await getRecruitList(keywords, location, industry, page, size).then(stat => stat);
    return NextResponse.json(result);
}
