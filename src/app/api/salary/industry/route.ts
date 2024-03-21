import {getIndustryStatList, getLocationStatList} from "@/libs/server/client";
import {NextRequest, NextResponse} from "next/server";

export const GET = async (req : NextRequest, res : NextResponse) => {
    const searchParams = new URLSearchParams(req.url.split("?")[1]);
    const sort = searchParams.get('sort') || "totalMemberCount";
    const result = await getIndustryStatList(20, sort);
    return NextResponse.json(result);
}
