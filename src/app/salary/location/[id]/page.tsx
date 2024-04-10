"use client";
import React, {useState, useEffect } from 'react';
import formatSalaryToMillionWon, {formatNumberWithCommas, locationLogoSrc} from '@/libs/utils';
import SalaryLineChart from "@/components/salaryLineChart";
import EmployeeLineChart from "@/components/employeeLineChart";
import {LocationStatData} from "@/types";
import useSWR from "swr";
import {id} from "postcss-selector-parser";

const TABS = {
    TOTAL: 'total',
    NEW: 'new',
    LOST: 'lost',
};

interface LocationinfoWiithLogo extends LocationStatData {
    logo?: string;
}

interface Locationinfo {
    resultCnt: number;
    resultList: LocationStatData[];
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

const LocationDetailPage = ({ params }: { params: { id: string } }) => {
    const [selectedTab, setSelectedTab] = useState(TABS.TOTAL);
    const [size, setSize] = useState(3);
    const { data, isLoading } = useSWR<Locationinfo>(`/api/salary/location/detail?locationName=${params.id}&sort=date.keyword&size=${size * 12}`, fetcher);

    const enrichedLocationStatList: LocationinfoWiithLogo[] = data?.resultList.map(location => {
        // locationName에 맞는 로고 찾기
        const logo = locationLogoSrc.find(logoSrc => logoSrc.name === location.locationName)?.logo;
        // 새로운 객체 반환
        return { ...location, logo };
    }) ?? [];

    const reversedData = [...(data?.resultList || [])].reverse(); // 데이터를 복사하고 역순으로 정렬

    // 셀렉트 박스를 통해 `size` 값을 변경할 수 있도록 UI에 추가
    const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSize(Number(event.target.value));
    };

    const renderGraph = () => {
        switch (selectedTab) {
            case TABS.TOTAL:
                return <EmployeeLineChart graphData={reversedData.map(({ date, totalMemberCount }) => ({ date, value: totalMemberCount, tag: "전체" }))} />;
            case TABS.NEW:
                return <EmployeeLineChart graphData={reversedData.map(({ date, newMemberCount }) => ({ date, value: newMemberCount, tag: "입사" }))} />;
            case TABS.LOST:
                return <EmployeeLineChart graphData={reversedData.map(({ date, lostMemberCount }) => ({ date, value: lostMemberCount, tag: "퇴사" }))} />;
            default:
                return null;
        }
    };

    if (isLoading) {
        return <div className="flex items-center justify-center h-screen">
            <div className="text-xl font-bold text-center">Loading...</div>
        </div>;
    }

    return (
        <div className="container mx-auto my-8">
            <div className="bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8">
                <div className="flex items-center">
                    <img src={enrichedLocationStatList[0].logo} alt="Logo" className="w-32 h-28 rounded ml-4"/>
                    <h1 className="text-3xl font-bold ml-2 pl-3">{data?.resultList[0].locationName}</h1>
                    <div className="ml-auto">
                        <div className="w-48">
                            <select
                                value={size}
                                onChange={handleSizeChange}
                                className="form-select appearance-none block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            >
                                {[...Array(9).keys()].map((year: number) => (
                                    <option key={year + 1} value={year + 1}>{year + 1}년</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="stats">
                    <div className="stat">
                        <div className="stat-title text-md">평균 연봉</div>
                        <div className="stat-value text-sm">{formatSalaryToMillionWon(data?.resultList[0].locationAverageSalary ?? 0)}</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title text-md">중위 연봉</div>
                        <div className="stat-value text-sm">{formatSalaryToMillionWon(data?.resultList[0].locationMedianSalary ?? 0)}</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title text-md">상위 25%</div>
                        <div className="stat-value text-sm">
                            {formatSalaryToMillionWon(data?.resultList[0].locationUpperQuartileSalary ?? 0)}
                        </div>
                    </div>
                </div>
                <div className="stats">
                    <div className="stat">
                        <div className="stat-title text-sm">전체</div>
                        <div className="stat-value text-sm">{formatNumberWithCommas(data?.resultList[0].totalMemberCount ?? 0)}명</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title text-sm">입사</div>
                        <div className="stat-value text-sm">{formatNumberWithCommas(data?.resultList[0].newMemberCount ?? 0)}명</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title text-sm">퇴사</div>
                        <div className="stat-value text-sm">{formatNumberWithCommas(data?.resultList[0].lostMemberCount ?? 0)}명</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title text-sm">회사수</div>
                        <div className="stat-value text-sm">{formatNumberWithCommas(data?.resultList[0].locationCompanyCount ?? 0)}</div>
                    </div>
                </div>
                <div className="mt-8 px-4">
                    <h2 className="text-2xl font-bold mb-4">월별 연봉 추이</h2>
                    <SalaryLineChart graphData={reversedData} />
                </div>
                <div className="mt-8 px-4">
                    <h2 className="text-2xl font-bold mb-4">월별 입/퇴사 추이</h2>
                    <div className="flex justify-end">
                        <div className="tabs">
                            <a className={`text-lg tab ${selectedTab === TABS.TOTAL ? 'tab-active' : ''}`} onClick={() => setSelectedTab(TABS.TOTAL)}>전체</a>
                            <a className={`text-lg tab ${selectedTab === TABS.NEW ? 'tab-active' : ''}`} onClick={() => setSelectedTab(TABS.NEW)}>입사</a>
                            <a className={`text-lg tab ${selectedTab === TABS.LOST ? 'tab-active' : ''}`} onClick={() => setSelectedTab(TABS.LOST)}>퇴사</a>
                        </div>
                    </div>
                    <div className="mt-8">
                        {renderGraph()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationDetailPage;