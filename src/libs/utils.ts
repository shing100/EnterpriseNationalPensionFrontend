export default function formatSalaryToMillionWon(salary : number) : string {
    // 연봉을 10000으로 나누어 "만원" 단위로 변환합니다.
    const millionWon = Math.floor(salary / 10000);
    // 변환된 값을 문자열로 변환하여 "만원"을 붙입니다.
    const formattedSalary = millionWon.toString() + "만원";
    return formattedSalary;
}