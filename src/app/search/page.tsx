"use client";
import React, {useState} from "react";

export default function SearchPage() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="min-h-screen flex flex-col items-center p-10">
            <div className="max-w-screen-md w-full">
                {/* 기업 정보 */}
                <div className="mb-8 overflow-x-auto">
                    <h3 className="text-lg font-semibold mb-2">기업 정보</h3>
                    <div className="flex space-x-4">
                        {/* 기업 정보 카드 */}
                        <div className="card w-80 bg-gray-100 shadow-xl">
                            <figure><img src="company-logo-url.jpg" alt="Company" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">기업명</h2>
                                <p>기업에 대한 간단한 설명입니다.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-xs">더 보기</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
