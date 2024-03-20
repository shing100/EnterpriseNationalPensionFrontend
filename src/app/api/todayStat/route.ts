import {getTodayStat} from "@/libs/server/client";
import {NextRequest, NextResponse} from "next/server";


export const GET = async (req : NextRequest, res : NextResponse) => {
    const result = await getTodayStat().then(stat => stat);
    return NextResponse.json(result);
}