"use client";
import React, {useState, useEffect} from "react";
import Card from "@/components/card";
import Table from "@/components/table";
import SearchPage from "@/components/searchModal";
import { useInsightRecomCompany } from "@/libs/server/client";

interface IconProps {
    className?: string;
}

export default function Home() {
    const { companies, isLoading, isError } = useInsightRecomCompany('202401', 'desc', 4, 100);
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

    const handleSearchClick = () => {
        setIsSearchModalOpen(true); // 검색 아이콘 클릭시 모달 열기
    };

    const handleSearchModalClose = () => {
        setIsSearchModalOpen(false); // 모달 닫는 함수
    };

    return (
        <div>
            {isSearchModalOpen && (
                <div className="fixed inset-0 z-50 bg-white w-auto justify-center items-center">
                    <SearchPage onClose={handleSearchModalClose} />
                </div>
            )}
            <div className={"min-h-screen p-4"}>
                <div className="p-4 relative rounded-2xl bg-cover bg-center h-96 text-white flex flex-col justify-center items-center" style={{backgroundImage: "url('https://cdn.pixabay.com/photo/2017/08/07/06/18/people-2600578_1280.jpg')"}}>
                    <h2 className="text-2xl md:text-4xl font-bold mb-4 px-4 max-[500px]:text-center">모든 기업 정보를 한 번에 무료로 확인하세요.</h2>
                    <div className="flex items-center w-3/4 md:w-1/2">
                        <div className="absolute ml-3 ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div onClick={handleSearchClick} className="w-full"><input type="text" placeholder="기업명 검색..." className="input input-bordered pl-10 p-2 w-full rounded-lg text-gray-700" readOnly/></div>
                    </div>
                </div>
                <section className={"py-8 px-4"}>
                    <div className={"container mx-auto"}>
                        <h1 className={"text-3xl font-bold mb-4"}>오늘의 기업</h1>
                        <div className="grid gap-x-10 gap-y-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                            {companies && companies.map((company: any) => (
                                <Card key={company.id} {...company} />
                            ))}
                        </div>
                    </div>
                </section>
                <section className={"py-8 px-4"}>
                    <div>
                        <h2 className="text-3xl font-bold mb-4">오늘의 인사이트</h2>
                        <div className="w-full h-52 stats shadow hover:shadow-xl transition-shadow duration-300">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-6">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">이번달 평균연봉</h2>
                            <div className="w-full h-40 stats shadow hover:shadow-xl transition-shadow duration-300">
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
                            <div className="w-full h-40 stats shadow hover:shadow-xl transition-shadow duration-300">
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
        <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01" />
        <path d="M16 6h.01" />
        <path d="M12 6h.01" />
        <path d="M12 10h.01" />
        <path d="M12 14h.01" />
        <path d="M16 10h.01" />
        <path d="M16 14h.01" />
        <path d="M8 10h.01" />
        <path d="M8 14h.01" />
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
