"use client";
import React, {useState, useEffect} from "react";
import Card from "@/components/card";
import Table from "@/components/table";
import SearchPage from "@/components/searchModal";
import formatSalaryToMillionWon, {formatNumberWithCommas} from "@/libs/utils";
import axios from "axios";
import useSWR from "swr";
import {CompanyData} from "@/types";

interface IconProps {
    className?: string;
}

interface MonthlyStatResponse {
    ok: boolean;
    data: {
        averageSalary: any,
        insightRecomCompany: {
            resultList: CompanyData[];
            resultCnt: number;
        },
        insightTopContributions: {
            resultCnt: number;
            resultList: CompanyData[];
        },
        monthlyStat: any,
    };
    errors: string[];
}

const fetcher = (url : string) => axios.get(url).then(res => res.data);

export default function Home() {
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
    const { data , error } = useSWR<MonthlyStatResponse>('/api/todayStat', fetcher);
    const monthlyStat = data?.data.monthlyStat;
    const averageSalary = data?.data.averageSalary;
    const contributions = data?.data.insightTopContributions;

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
                            {data?.data && data?.data?.insightRecomCompany.resultList.map((company: any) => (
                                <Card key={company.id} {...company} />
                            ))}
                        </div>
                    </div>
                </section>
                <section className={"py-8 px-4"}>
                    {data?.data.monthlyStat != null ? (
                    <div>
                        <h2 className="text-3xl font-bold mb-4">오늘의 인사이트</h2>
                        <div className="w-full h-52 stats shadow hover:shadow-xl transition-shadow duration-300">
                            <div className="stat place-items-center">
                                <BuildingIcon className="w-12 h-12 text-black"/>
                                <div className="stat-title">확인된 기업</div>
                                <div className="stat-value">{formatNumberWithCommas(data?.data.monthlyStat.totalCompanyCount)}개</div>
                                {data?.data.monthlyStat.totalCompanyRate > 0 ? (
                                    <><div className="stat-desc text-sm text-red-700">
                                        ↗︎ {Math.abs(monthlyStat.totalCompanyRate)}% ({formatNumberWithCommas(monthlyStat.totalCompanyCount - monthlyStat.beforeTotalCompanyCount)}개)
                                    </div></>
                                ) : monthlyStat.totalCompanyRate < 0 ? (
                                    <><div className="stat-desc text-sm text-blue-700">
                                        ↘︎ {Math.abs(monthlyStat.totalCompanyRate)}% ({formatNumberWithCommas(monthlyStat.beforeTotalCompanyCount - monthlyStat.totalCompanyCount)}개)
                                    </div></>
                                ) : (
                                    <><div className="stat-desc text-sm">— 0%</div></>
                                )}
                                <div className="stat-desc ">{monthlyStat.year}.{monthlyStat.month}월 기준</div>
                            </div>
                            <div className="stat place-items-center">
                                <UsersIcon className="w-12 h-12 text-black"/>
                                <div className="stat-title">전체 근로자</div>
                                <div className="stat-value">{formatNumberWithCommas(monthlyStat.totalEmployed)}명</div>
                                {monthlyStat.totalEmployedRate > 0 ? (
                                    <><div className="stat-desc text-sm text-red-700">
                                        ↗︎ {Math.abs(monthlyStat.totalEmployedRate)}% ({formatNumberWithCommas(monthlyStat.totalEmployed - monthlyStat.beforeTotalEmployed)}명)
                                    </div></>
                                ) : monthlyStat.totalEmployedRate < 0 ? (
                                    <><div className="stat-desc text-sm text-blue-700">
                                        ↘︎ {Math.abs(monthlyStat.totalEmployedRate)}% ({formatNumberWithCommas(monthlyStat.beforeTotalEmployed - monthlyStat.totalEmployed)}명)
                                    </div></>
                                ) : (
                                    <><div className="stat-desc text-sm">— 0%</div></>
                                )}
                                <div className="stat-desc ">{monthlyStat.year}.{monthlyStat.month}월 기준</div>
                            </div>
                            <div className="stat place-items-center">
                                <TrendingUpIcon className="w-12 h-12 text-black"/>
                                <div className="stat-title">취업자수</div>
                                <div className="stat-value">{formatNumberWithCommas(monthlyStat.totalEmployedMemberCount)}명</div>
                                {monthlyStat.totalEmployedMemberRate > 0 ? (
                                    <><div className="stat-desc text-sm text-red-700">
                                        ↗︎ {Math.abs(monthlyStat.totalEmployedMemberRate)}% ({formatNumberWithCommas(monthlyStat.totalEmployedMemberCount - monthlyStat.beforeTotalEmployedMemberCount)}명)
                                    </div></>
                                ) : monthlyStat.totalEmployedMemberRate < 0 ? (
                                    <><div className="stat-desc text-sm text-blue-700">
                                        ↘︎ {Math.abs(monthlyStat.totalEmployedMemberRate)}% ({formatNumberWithCommas(monthlyStat.beforeTotalEmployedMemberCount - monthlyStat.totalEmployedMemberCount)}명)
                                    </div></>
                                ) : (
                                    <><div className="stat-desc text-sm">— 0%</div></>
                                )}
                                <div className="stat-desc ">{monthlyStat.year}.{monthlyStat.month}월 기준</div>
                            </div>
                            <div className="stat place-items-center">
                                <TrendingDownIcon className="w-12 h-12 text-black"/>
                                <div className="stat-title">실업자수</div>
                                <div className="stat-value">{formatNumberWithCommas(monthlyStat.totalLostMemberCount)}명</div>
                                {monthlyStat.totalLostMemberRate > 0 ? (
                                    <><div className="stat-desc text-sm text-red-700">
                                        ↗︎ {Math.abs(monthlyStat.totalLostMemberRate)}% ({formatNumberWithCommas(monthlyStat.totalLostMemberCount - monthlyStat.beforeTotalLostMemberCount)}명)
                                    </div></>
                                ) : monthlyStat.totalEmployedMemberRate < 0 ? (
                                    <><div className="stat-desc text-sm text-blue-700">
                                        ↘︎ {Math.abs(monthlyStat.totalLostMemberRate)}% ({formatNumberWithCommas(monthlyStat.beforeTotalLostMemberCount - monthlyStat.totalLostMemberCount)}명)
                                    </div></>
                                ) : (
                                    <><div className="stat-desc text-sm">— 0% ({formatNumberWithCommas(monthlyStat.totalLostMemberCount - monthlyStat.beforeTotalLostMemberCount)}명)</div></>
                                )}
                                <div className="stat-desc ">{monthlyStat.year}.{monthlyStat.month}월 기준</div>
                            </div>
                        </div>
                    </div>
                    ) : null}
                </section>
                <section className="py-8 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-6">
                        {averageSalary != null ? (
                            <>
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">이번달 평균연봉</h2>
                                    <div className="w-full h-40 stats shadow hover:shadow-xl transition-shadow duration-300">
                                        <div className="stat place-items-center">
                                            <div className="stat-title">평균연봉</div>
                                            <div className="stat-value">{formatSalaryToMillionWon(averageSalary.averageSalary)}</div>
                                            {averageSalary.averageSalaryGrowthRate > 0 ? (
                                                <><div className="stat-desc text-sm text-red-700">
                                                    ↗︎ {Math.abs(averageSalary.averageSalaryGrowthRate)}% ({formatNumberWithCommas(averageSalary.averageSalary - averageSalary.beforeAverageSalary)}원)
                                                </div></>
                                            ) : averageSalary.averageSalaryGrowthRate < 0 ? (
                                                <><div className="stat-desc text-sm text-blue-700">
                                                    ↘︎ {Math.abs(averageSalary.averageSalaryGrowthRate)}% ({formatNumberWithCommas(averageSalary.beforeAverageSalary - averageSalary.averageSalary)}원)
                                                </div></>
                                            ) : (
                                                <><div className="stat-desc text-sm">— 0%</div></>
                                            )}
                                            <div className="stat-desc ">{averageSalary.year}.{averageSalary.month}월 기준</div>
                                        </div>
                                        <div className="stat place-items-center">
                                            <div className="stat-title">중위연봉</div>
                                            <div className="stat-value">{formatSalaryToMillionWon(averageSalary.medianSalary)}</div>
                                            {averageSalary.medianSalaryGrowthRate > 0 ? (
                                                <><div className="stat-desc text-sm text-red-700">
                                                    ↗︎ {Math.abs(averageSalary.medianSalaryGrowthRate)}% ({formatNumberWithCommas(averageSalary.medianSalary - averageSalary.beforeMedianSalary)}원)
                                                </div></>
                                            ) : averageSalary.medianSalaryGrowthRate < 0 ? (
                                                <><div className="stat-desc text-sm text-blue-700">
                                                    ↘︎ {Math.abs(averageSalary.medianSalaryGrowthRate)}% ({formatNumberWithCommas(averageSalary.beforeMedianSalary - averageSalary.medianSalary)}원)
                                                </div></>
                                            ) : (
                                                <><div className="stat-desc text-sm">— 0%</div></>
                                            )}
                                            <div className="stat-desc ">{averageSalary.year}.{averageSalary.month}월 기준</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">이번달 상/하위 연봉</h2>
                                    <div className="w-full h-40 stats shadow hover:shadow-xl transition-shadow duration-300">
                                        <div className="stat place-items-center">
                                            <div className="stat-title">상위 25%</div>
                                            <div className="stat-value">{formatSalaryToMillionWon(averageSalary.upperQuartileSalary)}</div>
                                            {averageSalary.upperQuartileSalaryGrowthRate > 0 ? (
                                                <><div className="stat-desc text-sm text-red-700">
                                                    ↗︎ {Math.abs(averageSalary.upperQuartileSalaryGrowthRate)}% ({formatNumberWithCommas(averageSalary.upperQuartileSalary - averageSalary.beforeUpperQuartileSalary)}원)
                                                </div></>
                                            ) : averageSalary.upperQuartileSalaryGrowthRate < 0 ? (
                                                <><div className="stat-desc text-sm text-blue-700">
                                                    ↘︎ {Math.abs(averageSalary.upperQuartileSalaryGrowthRate)}% ({formatNumberWithCommas(averageSalary.beforeUpperQuartileSalary - averageSalary.upperQuartileSalary)}원)
                                                </div></>
                                            ) : (
                                                <><div className="stat-desc text-sm">— 0%</div></>
                                            )}
                                            <div className="stat-desc ">{averageSalary.year}.{averageSalary.month}월 기준</div>
                                        </div>
                                        <div className="stat place-items-center">
                                            <div className="stat-title">하위 25%</div>
                                            <div className="stat-value">{formatSalaryToMillionWon(averageSalary.lowerQuartileSalary)}</div>
                                            {averageSalary.lowerQuartileSalaryGrowthRate > 0 ? (
                                                <><div className="stat-desc text-sm text-red-700">
                                                    ↗︎ {Math.abs(averageSalary.lowerQuartileSalaryGrowthRate)}% ({formatNumberWithCommas(averageSalary.lowerQuartileSalary - averageSalary.beforeLowerQuartileSalary)}원)
                                                </div></>
                                            ) : averageSalary.lowerQuartileSalaryGrowthRate < 0 ? (
                                                <><div className="stat-desc text-sm text-blue-700">
                                                    ↘︎ {Math.abs(averageSalary.lowerQuartileSalaryGrowthRate)}% ({formatNumberWithCommas(averageSalary.beforeLowerQuartileSalary - averageSalary.lowerQuartileSalary)}원)
                                                </div></>
                                            ) : (
                                                <><div className="stat-desc text-sm">— 0%</div></>
                                            )}
                                            <div className="stat-desc ">{averageSalary.year}.{averageSalary.month}월 기준</div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : null}
                    </div>
                </section>
                <section className="py-8 px-4">
                    {contributions != null ? <Table key={1} {...contributions.resultList} /> : null}
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

const TrendingDownIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
        <polyline points="17 18 23 18 23 12"></polyline>
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
