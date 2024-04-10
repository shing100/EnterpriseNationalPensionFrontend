"use client";
import React, {useState, useEffect } from 'react';
import formatSalaryToMillionWon, { formatNumberWithCommas } from '@/libs/utils';
import SalaryLineChart from "@/components/salaryLineChart";
import EmployeeLineChart from "@/components/employeeLineChart";

interface GraphData {
    year: number;
    averageSalary?: number;
    medianSalary?: number;
    upperQuartileSalary?: number;
    totalMemberCount?: number;
    newMemberCount?: number;
    lostMemberCount?: number;
}

const TABS = {
    TOTAL: 'total',
    NEW: 'new',
    LOST: 'lost',
};

const LocationDetailPage = ({ params }: { params: { id: string } }) => {
    const [selectedTab, setSelectedTab] = useState(TABS.TOTAL);
    const [industryData, setIndustryData] = useState<any>(null);
    const [graphData, setGraphData] = useState<GraphData[]>([]);

    useEffect(() => {
        // 여기서 industryId를 사용하여 API 호출 등의 작업을 수행하여 industryData와 graphData를 설정합니다.
        // 예시로 다음과 같은 데이터를 사용했습니다.
        const sampleData = {
            companyIndustryName: '담배 제조업',
            industryAverageSalary: 5000000,
            industryMedianSalary: 4500000,
            industryUpperQuartileSalary: 6000000,
            totalMemberCount: 10000,
            newMemberCount: 1000,
            lostMemberCount: 500,
        };
        setIndustryData(sampleData);

        // 연도별 데이터 설정
        const sampleGraphData: GraphData[] = [
            { year: 2020, totalMemberCount: 10000, newMemberCount: 1000, lostMemberCount: 500,  averageSalary: 4800000, medianSalary: 4300000, upperQuartileSalary: 5700000 },
            { year: 2021, totalMemberCount: 10200, newMemberCount: 1200, lostMemberCount: 1000, averageSalary: 4900000, medianSalary: 4400000, upperQuartileSalary: 5800000 },
            { year: 2022, totalMemberCount: 10500, newMemberCount: 1500, lostMemberCount: 1200, averageSalary: 4900000, medianSalary: 4400000, upperQuartileSalary: 5800000 },
            { year: 2023, totalMemberCount: 11000, newMemberCount: 2000, lostMemberCount: 1500, averageSalary: 4900000, medianSalary: 4400000, upperQuartileSalary: 5800000 },
        ];
        setGraphData(sampleGraphData);
    }, [params]);

    const renderGraph = () => {
        switch (selectedTab) {
            case TABS.TOTAL:
                return <EmployeeLineChart graphData={graphData.map(({ year, totalMemberCount }) => ({ year, value: totalMemberCount, tag: "전체" }))} />;
            case TABS.NEW:
                return <EmployeeLineChart graphData={graphData.map(({ year, newMemberCount }) => ({ year, value: newMemberCount, tag: "입사" }))} />;
            case TABS.LOST:
                return <EmployeeLineChart graphData={graphData.map(({ year, lostMemberCount }) => ({ year, value: lostMemberCount, tag:"퇴사" }))} />;
            default:
                return null;
        }
    };

    if (!industryData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto my-8">
            <div className="bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8">
                <h1 className="text-3xl font-bold m-4">{industryData.companyIndustryName}</h1>
                <div className="stats">
                    <div className="stat">
                        <div className="stat-title text-md">평균 연봉</div>
                        <div className="stat-value text-sm">{formatSalaryToMillionWon(industryData.industryAverageSalary)}</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title text-md">중위 연봉</div>
                        <div className="stat-value text-sm">{formatSalaryToMillionWon(industryData.industryMedianSalary)}</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title text-md">상위 25%</div>
                        <div className="stat-value text-sm">
                            {formatSalaryToMillionWon(industryData.industryUpperQuartileSalary)}
                        </div>
                    </div>
                </div>
                <div className="stats">
                    <div className="stat">
                        <div className="stat-title text-sm">전체</div>
                        <div className="stat-value text-sm">{formatNumberWithCommas(industryData.totalMemberCount)}명</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title text-sm">입사</div>
                        <div className="stat-value text-sm">{formatNumberWithCommas(industryData.newMemberCount)}명</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title text-sm">퇴사</div>
                        <div className="stat-value text-sm">{formatNumberWithCommas(industryData.lostMemberCount)}명</div>
                    </div>
                </div>
                <div className="mt-8 px-4">
                    <h2 className="text-2xl font-bold mb-4">연도별 연봉 추이</h2>
                    <SalaryLineChart graphData={graphData} />
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