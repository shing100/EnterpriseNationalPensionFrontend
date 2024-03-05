import { CompanyData } from '@/types';
import formatSalaryToMillionWon from "@/libs/utils";

export default function Card(data: CompanyData) {
    console.log(data);

    return (
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="card-body">
                <h2 className="card-title">
                    <div className="avatar">
                        <div className="w-12 rounded-xl">
                            <img src="https://w7.pngwing.com/pngs/244/422/png-transparent-samsung-electronics-plug-in-printer-samsung-blue-text-trademark.png" />
                        </div>
                    </div>
                    {data.companyName}
                </h2>
                <div className="text-gray-500 text-sm">{data.companyRoadNameAddress}</div>
                <p>{data.companyIndustryName}</p>
                <div className="card-actions justify-end">
                    <span className="badge badge-ghost badge-md">평균연봉 {formatSalaryToMillionWon(data.averageSalary)}</span>
                    <span className="badge badge-ghost badge-md">직원수 {data.totalMemberCount}명</span>
                </div>
            </div>
        </div>
    )
}