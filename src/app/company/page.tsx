"use client";
import React, {useEffect, useState} from 'react';
import { DiscussionEmbed } from 'disqus-react';
import CompanyCard from "@/components/companyCard";
import useSWR, {mutate} from "swr";
import {CompanyData} from "@/types";
import {useForm} from "react-hook-form";
import Link from "next/link";

interface Companyinfo {
    resultCnt: number,
    resultList: CompanyData[]
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function CompanyInfoView() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const companyName = watch("companyName");
    const { data: companies, isLoading } = useSWR<Companyinfo>(`/api/company?sort=totalMemberCount&size=20&companyName=${companyName}`, fetcher);

    // 입력값 디바운스를 위한 상태
    const [debouncedCompanyName, setDebouncedCompanyName] = useState(companyName);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedCompanyName(companyName);
            // SWR 키 변경으로 인한 데이터 재요청
            mutate(`/api/company?sort=&size=20&companyName=${companyName}`);
        }, 1000); // 1초 딜레이

        return () => {
            clearTimeout(handler);
        };
    }, [companyName]);

    return (
        <div className="min-h-screen p-8">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12">기업 정보</h1>
                <div className="flex items-center justify-center mb-8 mt-4">
                    <div className="form-control w-full">
                        <div className="input-group">
                            <span className="input-group-text w-12">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </span>
                            <input type="text" placeholder="기업명을 입력하세요..." className="input input-bordered w-full" {...register("companyName")} />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    {companies?.resultList.map((company, index) => (
                        <Link href={`/company/${company.id}`} key={index}>
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
