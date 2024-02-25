"use client";
import React from "react";
import LocationCard from "@/components/locationCard";
import {DiscussionEmbed} from "disqus-react";

// 예시 데이터 구조
const locationData = [
    { name: '서울특별시', logo: 'https://mblogthumb-phinf.pstatic.net/MjAxOTEyMDVfMTg2/MDAxNTc1NTA1MDk4Nzc1.dGbNlc3194jR3CS86MVC38TK7WX7jYlvab6GKPJUXOwg.wE6FTqSfTuH8cMdWvBhkfmmwfJrEK7AuSvF-5Q8WVWwg.JPEG.appcomo/%EC%84%9C%EC%9A%B8%EC%8B%9C%EC%8B%AC%EB%B3%BC.jpg?type=w800', average: '42600000', median: '42600000', top25: '42600000', workers: '100만명', unemployed: '50만명', employed: '950만명', businessOwners: '100만명' },
    { name: '경기도', logo: 'https://i.namu.wiki/i/-azxXL85alXPbFD414d8mxfLsyr5gc5NGj3gbVOWLCXD_0HwzwCPvUJwsdOTNbomTVbsUjSpNTorKr6-dkmm4Q.svg', average: '42600000', median: '42600000', top25: '42600000', workers: '100만명', unemployed: '50만명', employed: '950만명', businessOwners: '100만명' },
    { name: '울산', logo: 'https://i.namu.wiki/i/JzN3TFx3Q1daKrO2sK0F5ZhomDc3Xc_DjIOuNdz5LvEp8wpn50UgAdxIXRQlYYEMAB4TTexGBwJXjRe6_VyUiQ.svg', average: '42600000', median: '42600000', top25: '42600000', workers: '100만명', unemployed: '50만명', employed: '950만명', businessOwners: '100만명' },
    { name: '부산', logo: 'https://www.busan.go.kr/humanframe/theme/depart/assets/img/content/symbol/symbol_FULL%20COLOR.png', average: '42600000', median: '42600000', top25: '42600000', workers: '42600000', unemployed: '50만명', employed: '950만명', businessOwners: '100만명' },
    { name: '강원도', logo: 'https://i.namu.wiki/i/o8KnRNTY2XDK9CuD2QMma7d0k_XKC1MBm4o7VimCaxBy9LL-2AnUEM6RXlGf6MUVZXK7sZSuXjMq_aAKcvqmxw.webp', average: '42600000', median: '42600000', top25: '42600000', workers: '100만명', unemployed: '50만명', employed: '950만명', businessOwners: '100만명' }
];

export default function LocationSalaryStat() {
    return (
        <div className="min-h-screen p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">지역별 연봉 및 통계 정보</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {locationData.map((location ) => (
                    <LocationCard key={location.name} location={location} />
                ))}
            </div>
        </div>
    );
}
