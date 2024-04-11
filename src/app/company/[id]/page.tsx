"use client";
import React, { useState, useEffect } from 'react';
import formatSalaryToMillionWon, { formatNumberWithCommas } from '@/libs/utils';
import SalaryLineChart from "@/components/salaryLocationLineChart";

interface GraphData {
    year: number;
    averageSalary: number;
    medianSalary: number;
    upperQuartileSalary: number;
}

const CompanyDetailPage = ({ params }: { params: { id: string } }) => {
    const [industryData, setIndustryData] = useState<any>(null);
    const [graphData, setGraphData] = useState<GraphData[]>([]);

    useEffect(() => {
        // 여기서 industryId를 사용하여 API 호출 등의 작업을 수행하여 industryData와 graphData를 설정합니다.
        // 예시로 다음과 같은 데이터를 사용했습니다.
        const sampleData = {
            companyIndustryName: '정보통신업',
            industryAverageSalary: 5000000,
            industryMedianSalary: 4500000,
            industryUpperQuartileSalary: 6000000,
            totalMemberCount: 10000,
            newMemberCount: 1000,
            lostMemberCount: 500,
        };
        setIndustryData(sampleData);

        const sampleGraphData: GraphData[] = [
            { year: 2020, averageSalary: 4800000, medianSalary: 4300000, upperQuartileSalary: 5700000 },
            { year: 2021, averageSalary: 4900000, medianSalary: 4400000, upperQuartileSalary: 5800000 },
            { year: 2022, averageSalary: 5000000, medianSalary: 4500000, upperQuartileSalary: 6000000 },
            { year: 2023, averageSalary: 5100000, medianSalary: 4600000, upperQuartileSalary: 6100000 },
        ];
        setGraphData(sampleGraphData);
    }, [params]);

    if (!industryData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto my-8">
            <div className="bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8">
                <h1 className="text-3xl font-bold mb-4">{industryData.companyIndustryName}</h1>
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
                    <SalaryLineChart graphData={graphData} />
                </div>
            </div>
        </div>
    );
};

export default CompanyDetailPage;