"use client";
import React from 'react';
import { DiscussionEmbed } from 'disqus-react';
import CompanyCard from "@/components/companyCard";

export default function CompanyInfoView() {
    const companies = [
        // 예시 데이터
        { name: '기업A', averageSalary: 5000, medianSalary: 5500, employeeCount: 1000, totalEmployee: 1200, lostCount: 100 },
        // 추가 기업 데이터...
    ];

    return (
        <div className="min-h-screen p-8">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12">기업 정보</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {companies.map((company, index) => (
                        <CompanyCard key={index} company={company} />
                    ))}
                </div>

                {/* Disqus 댓글 시스템 */}
                <hr className={"my-8"}></hr>
                <DiscussionEmbed
                    key="CompanyInfoView"
                    shortname='insight-jov'
                    config={
                        {
                            url: "http://localhost:3000/company",
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
