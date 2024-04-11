"use client";
import React, {useState} from 'react';
import formatSalaryToMillionWon, {formatNumberWithCommas} from '@/libs/utils';
import EmployeeLineChart from "@/components/employeeLineChart";
import useSWR from "swr";
import {IndustryData} from "@/types";
import SalaryIndustryLineChart from "@/components/salaryIndustryLineChart";

interface Industryinfo {
    resultCnt: number;
    resultList: IndustryData[];
}

const TABS = {
    TOTAL: 'total',
    NEW: 'new',
    LOST: 'lost',
};

const fetcher = (url: string) => fetch(url).then(res => res.json());

const LocationDetailPage = ({ params }: { params: { id: string } }) => {
    const [selectedTab, setSelectedTab] = useState(TABS.TOTAL);
    const [size, setSize] = useState(3);
    const { data, isLoading } = useSWR<Industryinfo>(`/api/salary/industry/detail?industryCode=${params.id}&sort=date.keyword&size=${size * 12}`, fetcher);
    const reversedData = [...(data?.resultList || [])].reverse();

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
                    <h1 className="text-3xl font-bold m-4">{data?.resultList[0].companyIndustryName ?? "산업명 없음"}</h1>
                    <div className="ml-auto">
                        <div className="w-20 sm:w-36 lg:w-48">
                            <select
                                value={size}
                                onChange={handleSizeChange}
                                className="form-select appearance-none block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            >
                                {[0,1,2,3,4,5,6,7,8].map((year: number) => (
                                    <option key={year + 1} value={year + 1}>{year + 1}년</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="stats">
                    <div className="stat">
                        <div className="stat-title text-md">평균 연봉</div>
                        <div className="stat-value text-sm">{formatSalaryToMillionWon(data?.resultList[0].industryAverageSalary ?? 0)}</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title text-md">중위 연봉</div>
                        <div className="stat-value text-sm">{formatSalaryToMillionWon(data?.resultList[0].industryMedianSalary ?? 0)}</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title text-md">상위 25%</div>
                        <div className="stat-value text-sm">
                            {formatSalaryToMillionWon(data?.resultList[0].industryUpperQuartileSalary ?? 0)}
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
                </div>
                <div className="mt-8 px-4">
                    <h2 className="text-2xl font-bold mb-4">연도별 연봉 추이</h2>
                    <SalaryIndustryLineChart graphData={reversedData} />
                </div>
                <div className="mt-8 px-4">
                    <h2 className="text-2xl font-bold mb-4">연도별 입/퇴사 추이</h2>
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