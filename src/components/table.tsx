import formatSalaryToMillionWon, {formatNumberWithCommas} from "@/libs/utils";
import {CompanyData} from "@/types";

export default function Table(data: { [key: number]: CompanyData }) {
    const dataArray = Object.values(data);
    return (
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">국민연금 납부액 TOP10</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                    <tr>
                        <th className="whitespace-nowrap">Name</th>
                        <th className="whitespace-nowrap">산업 및 연봉정보</th>
                        <th className="whitespace-nowrap">직원수</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {dataArray && dataArray?.map((company: CompanyData) => (
                        <tr key={company.id}>
                            <td className="min-w-[200px] max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/default_company.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{company.companyName}</div>
                                        <div className="text-sm opacity-50">{company.companyRoadNameAddress.split(" ")[0]} {company.companyRoadNameAddress.split(" ")[1]}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="min-w-[200px] max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">
                                {company.companyIndustryName}
                                <br/>
                                <span className="badge badge-ghost badge-sm">{formatSalaryToMillionWon(company.averageSalary)}</span>
                            </td>
                            <td className="min-w-[200px] max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">
                                전체 {formatNumberWithCommas(company.totalMemberCount)}
                                <p>입사 {formatNumberWithCommas(company.newMemberCount)}명 | 퇴사 {formatNumberWithCommas(company.lostMemberCount)}명</p>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}