import formatSalaryToMillionWon, {formatNumberWithCommas} from "@/libs/utils";
import Image from 'next/image'
import {LocationStatData} from "@/types";

interface Location extends LocationStatData {
    logo?: string;
}

export default function LocationCard(location : Location) {
    return (
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <figure className="px-6 pt-6">
                <Image width={92} height={32} src={location.logo || ''} alt={`${location.locationName} logo`} className="rounded-md h-20 mx-auto" />
            </figure>
            <div className="card-body items-center text-center">
                <h3 className="card-title text-2xl font-bold mb-2">{location.locationName}</h3>
                <div className="pt-2">
                    <div className="stats">
                        <div className="stat">
                            <div className="stat-title lg:text-lg text-md">평균 연봉</div>
                            <div className="stat-value lg:text-lg text-sm">{formatSalaryToMillionWon(location.locationAverageSalary)}</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title lg:text-lg text-md">중위 연봉</div>
                            <div className="stat-value lg:text-lg text-sm">{formatSalaryToMillionWon(location.locationMedianSalary)}</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title lg:text-lg text-md">상위 25%</div>
                            <div className="stat-value lg:text-lg text-sm">{formatSalaryToMillionWon(location.locationUpperQuartileSalary)}</div>
                        </div>
                    </div>
                    <div className="stats">
                        <div className="stat">
                            <div className="stat-title lg:text-lg text-sm">전체</div>
                            <div className="stat-value text-sm">{formatNumberWithCommas(location.totalMemberCount)}</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title lg:text-lg text-sm">입사</div>
                            <div className="stat-value text-sm">{formatNumberWithCommas(location.newMemberCount)}</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title lg:text-lg text-sm">퇴사</div>
                            <div className="stat-value text-sm">{formatNumberWithCommas(location.lostMemberCount)}</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title lg:text-lg text-sm">기업 수</div>
                            <div className="stat-value text-sm">{formatNumberWithCommas(location.locationCompanyCount)}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}