// CompanyCard.js
import formatSalaryToMillionWon from "@/libs/utils";
import {CompanyData} from "@/types";

const CompanyCard = (company : CompanyData) => {
    // 비율을 계산하는 함수
    const getPercentage = (value : any, total : any) : any => {
        return total > 0 ? ((value / total) * 100).toFixed(2) + "%" : "0%";
    };

    return (
        <div className="flex max-w-lg bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 lg:max-w-screen-lg">
            {/* 이미지를 포함하는 div */}
            <div className="flex p-6">
                <img className="rounded-md" src="/default_company.png" alt="Company Logo" width={130} height={60} />
            </div>
            {/* 텍스트 컨텐츠를 포함하는 div */}
            <div className="p-6">
                <h5 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">{company.originalCompanyName}</h5>
                <p className="text-gray-700 mb-1">{company.companyIndustryName} | {company.companyRoadNameAddress}</p>
                <p className="text-gray-700 mb-1">{formatSalaryToMillionWon(company.averageSalary)}</p>
                <p className="text-gray-700">전체 : {company.totalMemberCount}명 | 입사: {company.newMemberCount}명 ({getPercentage(company.newMemberCount, company.totalMemberCount)}) | 퇴사: {company.lostMemberCount}명 ({getPercentage(company.lostMemberCount, company.totalMemberCount)})</p>
                <div className="pt-5 flex items-center justify-between">
                    <span className="text-xs font-medium text-blue-600 bg-blue-100 rounded-full px-3 py-1">산업평균 {formatSalaryToMillionWon(company.averageSalary)}</span>
                    <span className="text-xs font-medium text-red-600 bg-red-100 rounded-full px-3 py-1">기준일 {company.year}년 {company.month}월</span>
                </div>
            </div>
        </div>
    );
};

export default CompanyCard;
