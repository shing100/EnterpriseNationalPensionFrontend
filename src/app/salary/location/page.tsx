"use client";
import React from "react";
import LocationCard from "@/components/locationCard";
import useSWR from "swr";
import {LocationStatData} from "@/types";
import Link from "next/link";
import {locationLogoSrc} from "@/libs/utils";

interface LocationinfoWiithLogo extends LocationStatData {
    logo?: string;
}

interface Locationinfo {
    resultCnt: number;
    resultList: LocationStatData[];
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function LocationSalaryStat() {
    const { data: locationStatList } = useSWR<Locationinfo>("/api/salary/location?size=20", fetcher);

    const enrichedLocationStatList: LocationinfoWiithLogo[] = locationStatList?.resultList.map(location => {
        // locationName에 맞는 로고 찾기
        const logo = locationLogoSrc.find(logoSrc => logoSrc.name === location.locationName)?.logo;
        // 새로운 객체 반환
        return { ...location, logo };
    }) ?? [];

    // @ts-ignore
    return (
        <div className="min-h-screen p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">지역별 연봉 및 통계 정보</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {enrichedLocationStatList.map((location : LocationinfoWiithLogo)  => (
                    <Link className="cursor-pointer" href={`/salary/location/${location.locationName}`} key={location.locationName}>
                        <LocationCard key={location.locationName} {...location} />
                    </Link>
                ))}
            </div>
        </div>
    );
}
