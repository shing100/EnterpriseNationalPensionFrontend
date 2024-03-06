import {CompanyData} from "@/types";
import formatSalaryToMillionWon, {formatNumberWithCommas} from "@/libs/utils";


export default function Table(data: { [key: number]: CompanyData }) {
    console.log(data)
    // 객체를 배열로 변환
    const dataArray = Object.values(data);
    return (
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">국민연금 납부액 TOP10</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>산업 및 연봉정보</th>
                        <th>직원수</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {dataArray && dataArray?.map((company: CompanyData) => (
                        <tr key={company.id}>
                            <td className="min-w-20">
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://w7.pngwing.com/pngs/244/422/png-transparent-samsung-electronics-plug-in-printer-samsung-blue-text-trademark.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{company.companyName}</div>
                                        <div className="text-sm opacity-50">{company.companyRoadNameAddress.split(" ")[0]} {company.companyRoadNameAddress.split(" ")[1]}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="min-w-20">
                                {company.companyIndustryName}
                                <br/>
                                <span className="badge badge-ghost badge-sm">{formatSalaryToMillionWon(company.averageSalary)}</span>
                            </td>
                            <td className="min-w-24">
                                전체 {formatNumberWithCommas(company.totalMemberCount)}명
                                <p>in {formatNumberWithCommas(company.newMemberCount)}명 out {formatNumberWithCommas(company.lostMemberCount)}명</p>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}