"use client";
import React from "react";
import IndustryCard from "@/components/industryCard";
import {DiscussionEmbed} from "disqus-react";

// 예시 데이터 구조
const industryData = [
    {
        "id": "202308513320",
        "date": "202308",
        "year": 2023,
        "month": 8,
        "companyIndustryCode": "513320",
        "companyIndustryName": "화장품 및 화장용품 도매업",
        "industryCompanyCount": 2059,
        "totalMemberCount": 34424,
        "newMemberCount": 3069,
        "lostMemberCount": 2430,
        "industryAverageSalary": 37295983,
        "industryUpperQuartileSalary": 44678666,
        "industryLowerQuartileSalary": 30766933,
        "industryMedianSalary": 37837712,
        "regDt": "2024-02-11 11:33:16"
    },
    {
        "id": "202308289910",
        "date": "202308",
        "year": 2023,
        "month": 8,
        "companyIndustryCode": "289910",
        "companyIndustryName": "그 외 금속 파스너 및 나사제품 제조업",
        "industryCompanyCount": 5,
        "totalMemberCount": 48,
        "newMemberCount": 3,
        "lostMemberCount": 1,
        "industryAverageSalary": 36057156,
        "industryUpperQuartileSalary": 42836000,
        "industryLowerQuartileSalary": 29051691,
        "industryMedianSalary": 34102095,
        "regDt": "2024-02-11 11:33:21"
    },
    {
        "id": "202308289915",
        "date": "202308",
        "year": 2023,
        "month": 8,
        "companyIndustryCode": "289915",
        "companyIndustryName": "그 외 기타 분류 안된 금속 가공제품 제조업",
        "industryCompanyCount": 11,
        "totalMemberCount": 82,
        "newMemberCount": 1,
        "lostMemberCount": 3,
        "industryAverageSalary": 32778105,
        "industryUpperQuartileSalary": 42600000,
        "industryLowerQuartileSalary": 27323556,
        "industryMedianSalary": 32800266,
        "regDt": "2024-02-11 11:33:21"
    },
    {
        "id": "202308630500",
        "date": "202308",
        "year": 2023,
        "month": 8,
        "companyIndustryCode": "630500",
        "companyIndustryName": "기타 항공 운송지원 서비스업",
        "industryCompanyCount": 54,
        "totalMemberCount": 17411,
        "newMemberCount": 659,
        "lostMemberCount": 428,
        "industryAverageSalary": 43955432,
        "industryUpperQuartileSalary": 52166375,
        "industryLowerQuartileSalary": 34664481,
        "industryMedianSalary": 43160000,
        "regDt": "2024-02-11 11:33:16"
    }
];

export default function IndustrySalaryStat() {
    // Calculate top industries by highest average salary
    const topByAverageSalary = [...industryData]
        .sort((a, b) => b.industryAverageSalary - a.industryAverageSalary)
        .slice(0, 4);

    // Calculate top industries by largest number of workers
    const topByTotalMembers = [...industryData]
        .sort((a, b) => b.totalMemberCount - a.totalMemberCount)
        .slice(0, 4);

    return (
        <div className="min-h-screen p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">산업 정보</h2>
            <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 p-2">평균 연봉이 높은 산업 TOP 4</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {topByAverageSalary.map(industry => (
                        <IndustryCard key={industry.id} industry={industry} />
                    ))}
                </div>
            </div>
            <hr className="my-4"></hr>
            <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 p-2">가장 많은 근로자를 가진 산업 TOP 4</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {topByTotalMembers.map(industry => (
                        <IndustryCard key={industry.id} industry={industry} />
                    ))}
                </div>
            </div>
            <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 p-2">많이 채용한 산업 TOP 4</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {topByTotalMembers.map(industry => (
                        <IndustryCard key={industry.id} industry={industry} />
                    ))}
                </div>
            </div>
            <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 p-2">많이 퇴사한 산업 TOP 4</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {topByTotalMembers.map(industry => (
                        <IndustryCard key={industry.id} industry={industry} />
                    ))}
                </div>
            </div>
            <hr></hr>
            <h2 className="text-3xl font-bold mb-8 text-center mt-8">전체 무작위 연봉 및 통계 정보</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {industryData.map((industry) => (
                    <IndustryCard key={industry.companyIndustryName} industry={industry} />
                ))}
            </div>
            <hr className={"my-12"}></hr>
            <DiscussionEmbed
                key="IndustrySalaryStat"
                shortname='insight-jov'
                config={
                    {
                        url: "http://localhost:3000/salary/industry",
                        identifier: "industry",
                        title: "산업별 연봉정보입니다.",
                        language: 'ko',
                    }
                }
            />
        </div>
    );
}
