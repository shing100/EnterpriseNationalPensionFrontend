"use client";
import React, { useEffect, useState } from "react";
import {SearchIcon} from "@heroicons/react/solid";
import {useForm} from "react-hook-form";
import useSWR from "swr";
import axios from "axios";

interface JobData {
    jobs: {
        job?: any[];
    };
    message: string;
}

const fetcher = (url : string) => axios.get(url).then(res => res.data);

function useDebounce(value : any, delay : any) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}


function RecruitList() {

    const {register, handleSubmit, watch} = useForm();
    const keywords = useDebounce(watch("keywords"), 1000);
    const location = watch("location");
    const jobType = watch("jobType");

    const queryString = `keywords=${keywords || ''}&location=${location || ''}&industry=${jobType || ''}`;
    const { data: jobData, error } = useSWR<JobData>(`/api/recruit?${queryString}`, fetcher);

    console.log(jobData);

    if (jobData?.message === "일일 최대 요청 가능 횟수가 초과되었습니다.") {
        return <div className="flex items-center justify-center h-screen">
            <div className="text-xl font-bold text-center">일일 최대 요청 가능 횟수가 초과되었습니다.</div>
        </div>;
    }

    if (!jobData || !jobData?.jobs?.job) {
        return <div className="flex items-center justify-center h-screen">
            <div className="text-xl font-bold text-center">Loading...</div>
        </div>;
    }

    return (
        <div className="max-w-screen-2xl mx-auto py-8 px-4 min-h-screen">
            <form onSubmit={handleSubmit(() => {})} className="p-5 bg-white shadow rounded-lg flex gap-4 items-end">
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
                        <option value="2">IT개발·데이터</option>
                        <option value="15">디자인</option>
                        {/* 다른 직종 옵션 추가 가능 */}
                    </select>
                </div>
                <button className="btn btn-primary" type="submit">
                    검색
                </button>
            </form>
            <h2 className="text-2xl font-semibold mb-4 mt-6">채용 공고</h2>
            <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
                {jobData && jobData.jobs.job?.map((job :any)  => (
                    <div key={job.id} className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h3 className="card-title text-lg font-bold">{job.position.title}</h3>
                            <p className="text-sm">{job.company.detail.name}</p>
                            <p className="text-sm font-semibold">{job.position.location.name?.replace("&gt;", ">")}</p>
                            <p className="text-sm">{job.position.industry.name} , {job.keyword}</p>
                            <div className="flex justify-between items-center mt-4">
                                <a
                                    href={job.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary btn-sm"
                                >
                                    상세보기
                                </a>
                                <span className="text-xs text-right">
                                  연봉: {job.salary.name}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecruitList;