"use client";
import React from 'react';
import { DiscussionEmbed } from 'disqus-react';
import CompanyCard from "@/components/companyCard";
import useSWR from "swr";
import {CompanyData} from "@/types";
import Link from "next/link";

interface Companyinfo {
    resultCnt: number,
    resultList: CompanyData[]
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function CompanyInfoView() {
    const { data: companies } = useSWR<Companyinfo>("/api/company?sort=currentMonthDueAmount&size=100", fetcher);

    return (
        <div className="min-h-screen p-8">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12">국민연금 납부 TOP 100</h1>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    {companies?.resultList.map((company, index) => (
                        <Link href={`/company/${company.companyName}`} key={index}>
                            <CompanyCard key={index} {...company} />
                        </Link>
                    ))}
                </div>

                {/* Disqus 댓글 시스템 */}
                <hr className={"my-8"}></hr>
                <DiscussionEmbed
                    key="CompanyInfoView"
                    shortname='insight-jov'
                    config={
                        {
                            url: "http://localhost:3000/top100",
                            identifier: "CompanyInfoView",
                            title: "기업정보",
                            language: 'ko',
                        }
                    }
                />
            </div>
        </div>
    );
}
