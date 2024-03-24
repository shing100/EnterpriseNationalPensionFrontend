"use client";
import React from "react";
import IndustryCard from "@/components/industryCard";
import {DiscussionEmbed} from "disqus-react";
import useSWR from "swr";
import {IndustryData} from "@/types";

interface Industryinfo {
    resultCnt: number;
    resultList: IndustryData[];
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function IndustrySalaryStat() {
    const { data: industryData } = useSWR<Industryinfo>("/api/salary/industry?size=100", fetcher);
    // Calculate top industries by highest average salary
    const topByAverageSalary = industryData?.resultList
        .sort((a, b) => b.industryAverageSalary - a.industryAverageSalary)
        .slice(0, 4);

    // Calculate top industries by largest number of workers
    const topByTotalMembers = industryData?.resultList
        .sort((a, b) => b.totalMemberCount - a.totalMemberCount)
        .slice(0, 4);

    return (
        <div className="min-h-screen p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">산업 정보</h2>
            <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 p-2">평균 연봉이 높은 산업 TOP 4</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {topByAverageSalary?.map(industry => (
                        <IndustryCard key={industry.id} industry={industry} />
                    ))}
                </div>
            </div>
            <hr className="my-4"></hr>
            <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 p-2">가장 많은 근로자를 가진 산업 TOP 4</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {topByTotalMembers?.map(industry => (
                        <IndustryCard key={industry.id} industry={industry} />
                    ))}
                </div>
            </div>
            <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 p-2">많이 채용한 산업 TOP 4</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {topByTotalMembers?.map(industry => (
                        <IndustryCard key={industry.id} industry={industry} />
                    ))}
                </div>
            </div>
            <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 p-2">많이 퇴사한 산업 TOP 4</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {topByTotalMembers?.map(industry => (
                        <IndustryCard key={industry.id} industry={industry} />
                    ))}
                </div>
            </div>
            <hr></hr>
            <h2 className="text-3xl font-bold mb-8 text-center mt-8">전체 무작위 연봉 및 통계 정보</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {industryData?.resultList.map((industry) => (
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
