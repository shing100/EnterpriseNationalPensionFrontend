"use client";
import React, {useState} from "react";
import { useForm } from "react-hook-form";
import Card from "@/components/card";
import Table from "@/components/table";

interface IconProps {
    className?: string;
}

export default function Home() {
    const { register, watch } = useForm();
    const searchTerm = watch('search');
    return (
    <div>
        <div className={"min-h-screen"}>
            <div className="relative rounded-2xl bg-cover bg-center h-96 text-white flex flex-col justify-center items-center" style={{backgroundImage: "url('https://cdn.pixabay.com/photo/2017/08/07/06/18/people-2600578_1280.jpg')"}}>
                <h1 className="text-2xl md:text-4xl font-bold mb-4 px-4">모든 기업 정보를 한 번에 무료로 확인하세요.</h1>
                <div className="flex items-center w-3/4 md:w-1/2">
                    <div className="absolute ml-3 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <input
                        {...register('search')}
                        type="text"
                        placeholder="기업명 검색..."
                        className="input input-bordered pl-10 p-2 w-full rounded-lg text-gray-700"
                    />
                </div>
            </div>
            <section className={"py-8 px-4"}>
                <div className={"container mx-auto"}>
                    <h1 className={"text-3xl font-bold mb-4"}>오늘의 기업</h1>
                    <div className={"grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"}>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </section>
            <section className={"py-8 px-4"}>
                <div>
                    <h2 className="text-3xl font-bold mb-4">오늘의 인사이트</h2>
                    <div className="w-full h-52 stats shadow">
                        <div className="stat place-items-center">
                            <BuildingIcon className="w-12 h-12 text-black"/>
                            <div className="stat-title">확인된 기업</div>
                            <div className="stat-value">500,000개</div>
                            <div className="stat-desc ">↗︎ 40 (2%)</div>
                            <div className="stat-desc ">2023.12월 기준</div>
                        </div>
                        <div className="stat place-items-center">
                            <UsersIcon className="w-12 h-12 text-black"/>
                            <div className="stat-title">전체 근로자</div>
                            <div className="stat-value">18,000,000명</div>
                            <div className="stat-desc">↗︎ 40 (2%)</div>
                            <div className="stat-desc ">2023.12월 기준</div>
                        </div>
                        <div className="stat place-items-center">
                            <TrendingUpIcon className="w-12 h-12 text-black"/>
                            <div className="stat-title">취업자수</div>
                            <div className="stat-value">80,000명</div>
                            <div className="stat-desc">↘︎ 90 (14%)</div>
                            <div className="stat-desc ">2023.12월 기준</div>
                        </div>
                        <div className="stat place-items-center">
                            <TrendingUpIcon className="w-12 h-12 text-black"/>
                            <div className="stat-title">실업자수</div>
                            <div className="stat-value">60,000명</div>
                            <div className="stat-desc">↘︎ 90 (14%)</div>
                            <div className="stat-desc ">2023.12월 기준</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-8 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">이번달 평균연봉</h2>
                        <div className="w-full h-40 stats shadow">
                            <div className="stat place-items-center">
                                <div className="stat-title">평균연봉</div>
                                <div className="stat-value">5000만원</div>
                                <div className="stat-desc ">↗︎ 40 (2%)</div>
                                <div className="stat-desc ">2023.12월 기준</div>
                            </div>
                            <div className="stat place-items-center">
                                <div className="stat-title">중위연봉</div>
                                <div className="stat-value">5000만원</div>
                                <div className="stat-desc ">↗︎ 40 (2%)</div>
                                <div className="stat-desc ">2023.12월 기준</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">2023년 평균연봉</h2>
                        <div className="w-full h-40 stats shadow">
                            <div className="stat place-items-center">
                                <div className="stat-title">평균연봉</div>
                                <div className="stat-value">5000만원</div>
                                <div className="stat-desc ">↗︎ 40 (2%)</div>
                                <div className="stat-desc ">2023년 기준</div>
                            </div>
                            <div className="stat place-items-center">
                                <div className="stat-title">중위연봉</div>
                                <div className="stat-value">5000만원</div>
                                <div className="stat-desc ">↗︎ 40 (2%)</div>
                                <div className="stat-desc ">2023년 기준</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-8 px-4">
                <Table/>
            </section>
        </div>
    </div>
  );
}


const BuildingIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="1" width="18" height="20" rx="2" ry="2"></rect>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="6" y1="1" x2="6" y2="6"></line>
        <line x1="10" y1="1" x2="10" y2="6"></line>
        <line x1="14" y1="1" x2="14" y2="6"></line>
        <line x1="18" y1="1" x2="18" y2="6"></line>
        <line x1="6" y1="10" x2="6" y2="14"></line>
        <line x1="10" y1="10" x2="10" y2="14"></line>
        <line x1="14" y1="10" x2="14" y2="14"></line>
        <line x1="18" y1="10" x2="18" y2="14"></line>
    </svg>
);


const TrendingUpIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
);


const UsersIcon: React.FC<IconProps> = ({ className }) => (
    <svg className = {className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);
