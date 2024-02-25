"use client";
import React, {useState} from "react";

interface SearchPageProps {
    onClose: () => void
}

export default function SearchPage({onClose}: SearchPageProps) {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="min-h-screen flex flex-col items-center p-10">
            <div className="max-w-screen-md w-full">
                {/* 닫기 버튼 */}
                <button onClick={onClose} className="absolute top-0 right-0 m-8">
                    <svg className="h-6 w-6 text-gray-700" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                {/* 검색 바 */}
                <div className="flex items-center justify-center mb-8 mt-12">
                    <div className="form-control w-full">
                        <div className="input-group">
                            <span className="input-group-text w-12">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </span>
                            <input type="text" placeholder="검색어를 입력하세요..." className="input input-bordered w-full" onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm}/>
                        </div>
                    </div>
                </div>

                {/* 최근 검색어 */}
                <div className="mb-20">
                    <h3 className="text-lg font-semibold mb-4">최근 검색어</h3>
                    <div className="flex flex-wrap gap-2">
                        <span className="badge badge-xs bg-gray-200 text-lg p-4">지마켓</span>
                        <span className="badge badge-xs bg-gray-200 text-lg p-4">네이처코스텍</span>
                        <span className="badge badge-xs bg-gray-200 text-lg p-4">네이버</span>
                        {/* ... 기타 최근 검색어 */}
                    </div>
                </div>

                {/* 실시간 인기 검색어 */}
                <div className="mb-20">
                    <h3 className="text-lg font-semibold mb-4">실시간 인기 검색어</h3>
                    <div className="flex flex-wrap gap-2">
                        <span className="badge badge-xs bg-gray-200 text-lg p-4">삼성전자</span>
                        <span className="badge badge-xs bg-gray-200 text-lg p-4">SK하이닉스</span>
                        <span className="badge badge-xs bg-gray-200 text-lg p-4">현대자동차</span>
                        {/* ... 기타 실시간 인기 검색어 */}
                    </div>
                </div>

                <div className="mb-8 overflow-x-auto">
                    <h3 className="text-lg font-semibold mb-2">랜덤 기업</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4">
                        {/* 여러 기업 정보 카드 반복 */}
                        {Array.from({ length: 5 }).map((_, index) => (
                            <div key={index} className="flex w-full bg-gray-100 rounded-md">
                                <figure className="flex-none w-16 h-16 bg-white m-4 rounded-xl">
                                    <img className="w-12 h-12 m-auto my-2" src="/default_company.png" alt="Company" />
                                </figure>
                                <div className="my-auto">
                                    <h2 className="text-md font-bold">기업명 #{index + 1}</h2>
                                    <p>기업에 대한 간단한 설명입니다.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
