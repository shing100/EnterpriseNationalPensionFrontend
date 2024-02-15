"use client";
import React from "react";
import SearchForm from "@/components/searchFrom";

function JobList({ jobs } : any) {
    return (
        <div className="max-w-screen-2xl mx-auto py-8 px-4 min-h-screen">
            <SearchForm />
            <h2 className="text-2xl font-semibold mb-4 mt-6">채용 공고</h2>
            <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
                {jobs.map((job :any)  => (
                    <div key={job.id} className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h3 className="card-title text-lg font-bold">{job.position.title}</h3>
                            <p className="text-sm">{job.company.detail.name}</p>
                            <p className="text-sm font-semibold">{job.position.location.name}</p>
                            <p className="text-sm">{job.position.industry.name}</p>
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
                  마감일: {new Date(job.expirationTimestamp * 1000).toLocaleDateString("ko-KR")}
                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Recruit() {
    const jobData : any =
        {
            "jobs": {
                "count": 2,
                "start": 1,
                "total": "7629",
                "job": [
                    {
                        "url": "http://www.saramin.co.kr/zf_user/jobs/relay/view?rec_idx=27614114&utm_source=job-search-api&utm_medium=api&utm_campaign=saramin-job-search-api",
                        "active": 1,
                        "company": {
                            "detail": {
                                "href":"http://www.saramin.co.kr/zf_user/company-info/view?csn=1138600917&utm_source=job-search-api&utm_medium=api&utm_campaign=saramin-job-search-api",
                                "name": "(주)사람인"
                            }
                        },
                        "position": {
                            "title": "(주)사람인 사무보조·문서작성 경력 채용합니다11212",
                            "industry": {
                                "code": "301",
                                "name": "솔루션·SI·ERP·CRM"
                            },
                            "location": {
                                "code": "101050,101060,101070",
                                "name": "서울 > 관악구, 서울 > 광진구, 서울 > 구로구"
                            },
                            "job-type": {
                                "code": "1",
                                "name": "정규직"
                            },
                            "job-mid-code": {
                                "code": "22",
                                "name": "요리·제빵사·영양사"
                            },
                            "job-code": {
                                "code": "2323",
                                "name": "요리·제빵사·영양사"
                            },
                            "experience-level": {
                                "code": 2,
                                "min": 2,
                                "max": 3,
                                "name": "경력 2~3년"
                            },
                            "required-education-level": {
                                "code": "0",
                                "name": "학력무관"
                            }
                        },
                        "keyword": "SI·시스템통합,Excel·도표,PowerPoint,전산입력·편집",
                        "salary": {
                            "code": "6",
                            "name": "1,800~2,000만원"
                        },
                        "id": "27614114",
                        "posting-timestamp": "1559191564",
                        "posting-date": "2019-05-30T13:46:04+0900",
                        "modification-timestamp": "1559191564",
                        "openingTimestamp": "1559188800",
                        "expirationTimestamp": "1561820399",
                        "expiration-date": "2019-06-29T23:59:59+0900",
                        "close-type": {
                            "code": "1",
                            "name": "접수마감일"
                        },
                        "read-cnt": "0",
                        "apply-cnt": "0"
                    },
                    {
                        "url":"http://www.saramin.co.kr/zf_user/jobs/relay/view?rec_idx=27614112&utm_source=job-search-api&utm_medium=api&utm_campaign=saramin-job-search-api",
                        "active": 1,
                        "company": {
                            "detail": {
                                "href":"http://www.saramin.co.kr/zf_user/company-info/view?csn=1138600917&utm_source=job-search-api&utm_medium=api&utm_campaign=saramin-job-search-api",
                                "name": "(주)사람인테스트계정04"
                            }
                        },
                        "position": {
                            "title": "건축·인테리어·설계 외 2개 부문 담당자 모집 공고123",
                            "industry": {
                                "code": "1005",
                                "name": "연구소·컨설팅·조사"
                            },
                            "location": {
                                "code": "101070",
                                "name": "서울 > 구로구"
                            },
                            "job-type": {
                                "code": "1",
                                "name": "정규직"
                            },
                            "industry-keyword-code": "100501",
                            "experience-level": {
                                "code": 1,
                                "min": 0,
                                "max": 0,
                                "name": "신입"
                            },
                            "required-education-level": {
                                "code": "0",
                                "name": "학력무관"
                            }
                        },
                        "keyword": "연구소,전기공사,창호공사,항공사무",
                        "salary": {
                            "code": "4",
                            "name": "1,400~1,600만원"
                        },
                        "id": "27614112",
                        "posting-timestamp": "1559175921",
                        "posting-date": "2019-05-30T09:25:21+0900",
                        "modification-timestamp": "1559175921",
                        "opening-timestamp": "1559174400",
                        "expiration-timestamp": "1561820399",
                        "expiration-date": "2019-06-29T23:59:59+0900",
                        "close-type": {
                            "code": "1",
                            "name": "접수마감일"
                        },
                        "read-cnt": "0",
                        "apply-cnt": "0"
                    }
                ]
            }
        }
    ;

    return <JobList jobs={jobData.jobs.job} />;
}