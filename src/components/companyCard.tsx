// CompanyCard.js
const CompanyCard = ({ company }: any) => {
    // 비율을 계산하는 함수
    const getPercentage = (value : any, total : any) : any => {
        return total > 0 ? ((value / total) * 100).toFixed(2) + "%" : "0%";
    };

    return (
        <div className="max-w-sm bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="p-5">
                <h5 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">{company.name}</h5>
                <p className="text-gray-700 mb-3">평균 연봉: {company.averageSalary}만원</p>
                <p className="text-gray-700 mb-3">중위 연봉: {company.medianSalary}만원</p>
                <p className="text-gray-700">취업자 수: {company.employeeCount}명 ({getPercentage(company.employeeCount, company.totalEmployee)})</p>
                <p className="text-gray-700">탈출자 수: {company.lostCount}명</p>
                <div className="pt-5 flex items-center justify-between">
                    <span className="text-xs font-medium text-blue-600 bg-blue-100 rounded-full px-3 py-1">상위 25%</span>
                    <span className="text-xs font-medium text-red-600 bg-red-100 rounded-full px-3 py-1">탈출률 {getPercentage(company.lostCount, company.employeeCount)}</span>
                </div>
            </div>
        </div>
    );
};

export default CompanyCard;
