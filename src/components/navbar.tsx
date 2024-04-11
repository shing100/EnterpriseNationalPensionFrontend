import Link from "next/link";


export default function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link href={"/"} className={"btn btn-ghost text-xl"}>인사이트잡</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <details>
                            <summary>
                                기업/채용
                            </summary>
                            <ul className="p-2 bg-base-100 rounded-t-none z-10">
                                <li><Link href="/recruit">채용정보</Link></li>
                                <li><Link href="/company/top100">기업 TOP100</Link></li>
                                <li><Link href="/company">기업정보</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>
                                연봉정보
                            </summary>
                            <ul className="p-2 bg-base-100 rounded-t-none z-10">
                                <li><Link href={"/salary/location"}>지역별</Link></li>
                                <li><Link href={"/salary/industry"}>산업별</Link></li>
                                <li><Link href={"/salary/receive"}>실수령액</Link></li>
                                <li><Link target={"_blank"} href={"https://ai-lab.saramin.co.kr/salary-prototype/index"}>직무별 연봉정보</Link></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    )
}