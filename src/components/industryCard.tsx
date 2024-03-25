import formatSalaryToMillionWon, {formatNumberWithCommas} from "@/libs/utils";

const IndustryCard = ({industry} : any) => {
    return (
        <div className="bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="items-center text-center">
                <h3 className="text-xl font-bold mb-2 mt-6">{industry.companyIndustryName}</h3>
                <div className="py-4">
                    <div className="stats">
                        <div className="stat">
                            <div className="stat-title text-md">평균 연봉</div>
                            <div className="stat-value text-sm">{formatSalaryToMillionWon(industry.industryAverageSalary)}</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title text-md">중위 연봉</div>
                            <div className="stat-value text-sm">{formatSalaryToMillionWon(industry.industryMedianSalary)}</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title text-md">상위 25%</div>
                            <div className="stat-value text-sm">{formatSalaryToMillionWon(industry.industryUpperQuartileSalary)}</div>
                        </div>
                    </div>
                    <div className="stats">
                        <div className="stat">
                            <div className="stat-title text-sm">전체</div>
                            <div className="stat-value text-sm">{formatNumberWithCommas(industry.totalMemberCount)}명</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title text-sm">입사</div>
                            <div className="stat-value text-sm">{formatNumberWithCommas(industry.newMemberCount)}명</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title text-sm">퇴사</div>
                            <div className="stat-value text-sm">{formatNumberWithCommas(industry.lostMemberCount)}명</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default IndustryCard;