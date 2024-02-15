import React from "react";
import { useForm } from "react-hook-form";
import { SearchIcon } from '@heroicons/react/solid'; // HeroIcons 패키지에서 검색 아이콘 가져오기

export default function SearchForm({ onSearch }: any) {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data : any) => {
        onSearch(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-5 bg-white shadow rounded-lg flex gap-4 items-end">
            <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5 text-gray-400"/>
                </div>
                <input
                    {...register("keywords")}
                    className="input input-bordered w-full pl-10"
                    type="text"
                    placeholder="검색어 입력..."
                />
            </div>
            <div className="w-full w-auto max-[700px]:hidden">
                <select {...register("location")} className="select select-bordered w-full">
                    <option value="">지역 선택</option>
                    <option value="101010">서울</option>
                    <option value="202020">부산</option>
                    {/* 다른 지역 옵션 추가 가능 */}
                </select>
            </div>
            <div className="w-full w-auto max-[700px]:hidden">
                <select {...register("jobType")} className="select select-bordered w-full">
                    <option value="">직종 선택</option>
                    <option value="IT">IT/개발</option>
                    <option value="Design">디자인</option>
                    {/* 다른 직종 옵션 추가 가능 */}
                </select>
            </div>
            <button className="btn btn-primary" type="submit">
                검색
            </button>
        </form>
    );
}