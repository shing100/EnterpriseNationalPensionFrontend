"use client";
import React from "react";
import IndustryCard from "@/components/industryCard";

// 예시 데이터 구조
const industryData = [
    { name: '서울특별시', logo: 'https://mblogthumb-phinf.pstatic.net/MjAxOTEyMDVfMTg2/MDAxNTc1NTA1MDk4Nzc1.dGbNlc3194jR3CS86MVC38TK7WX7jYlvab6GKPJUXOwg.wE6FTqSfTuH8cMdWvBhkfmmwfJrEK7AuSvF-5Q8WVWwg.JPEG.appcomo/%EC%84%9C%EC%9A%B8%EC%8B%9C%EC%8B%AC%EB%B3%BC.jpg?type=w800', average: '6000만원', median: '5500만원', top25: '7000만원', workers: '100만명', unemployed: '50만명', employed: '950만명', businessOwners: '100만명' },
    { name: '경기도', logo: 'https://i.namu.wiki/i/-azxXL85alXPbFD414d8mxfLsyr5gc5NGj3gbVOWLCXD_0HwzwCPvUJwsdOTNbomTVbsUjSpNTorKr6-dkmm4Q.svg', average: '5500만원', median: '5000만원', top25: '6500만원', workers: '100만명', unemployed: '50만명', employed: '950만명', businessOwners: '100만명' },
    { name: '울산', logo: 'https://i.namu.wiki/i/JzN3TFx3Q1daKrO2sK0F5ZhomDc3Xc_DjIOuNdz5LvEp8wpn50UgAdxIXRQlYYEMAB4TTexGBwJXjRe6_VyUiQ.svg', average: '5500만원', median: '5000만원', top25: '6500만원', workers: '100만명', unemployed: '50만명', employed: '950만명', businessOwners: '100만명' },
    { name: '부산', logo: 'https://www.busan.go.kr/humanframe/theme/depart/assets/img/content/symbol/symbol_FULL%20COLOR.png', average: '5500만원', median: '5000만원', top25: '6500만원', workers: '100만명', unemployed: '50만명', employed: '950만명', businessOwners: '100만명' },
    { name: '강원도', logo: 'https://i.namu.wiki/i/o8KnRNTY2XDK9CuD2QMma7d0k_XKC1MBm4o7VimCaxBy9LL-2AnUEM6RXlGf6MUVZXK7sZSuXjMq_aAKcvqmxw.webp', average: '5500만원', median: '5000만원', top25: '6500만원', workers: '100만명', unemployed: '50만명', employed: '950만명', businessOwners: '100만명' }
];

export default function IndustrySalaryStat() {
    return (
        // TODO 인상률이 높은 산업 5개를 보여주는 카드를 만들어서 보여준다.
        // TODO 평균 연봉이 높은 산업 5개를 보여주는 카드를 만들어서 보여준다.
        // TODO 5년전과 비교해서 가장 높은 인상률을 가진 산업 5개를 보여준다.
        // TODO 2023년 기준으로 가장 많은 근로자를 가진 산업 5개를 보여준다.
        <div className="min-h-screen p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">산업별 연봉 및 통계 정보</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {industryData.map((industry) => (
                    <IndustryCard key={industry.name} industry={industry} />
                ))}
            </div>
        </div>
    );
}
