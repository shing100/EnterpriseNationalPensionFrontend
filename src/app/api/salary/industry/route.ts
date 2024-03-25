import {getIndustryStatList, getLocationStatList} from "@/libs/server/client";
import {NextRequest, NextResponse} from "next/server";

export const GET = async (req : NextRequest, res : NextResponse) => {
    const searchParams = new URLSearchParams(req.url.split("?")[1]);
    const sort = searchParams.get('sort') || "totalMemberCount";
    const size = searchParams.get('size') || "20";
    const result = await getIndustryStatList(size, sort);
    return NextResponse.json(result);
}
