

export default function Card() {
    return (
        <div className="card w-50 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">
                    <div className="avatar">
                        <div className="w-12 rounded-xl">
                            <img src="https://w7.pngwing.com/pngs/244/422/png-transparent-samsung-electronics-plug-in-printer-samsung-blue-text-trademark.png" />
                        </div>
                    </div>
                    삼성전자
                </h2>
                <div className="text-gray-500 text-sm">서울특별시</div>
                <p>핸드폰 갤럭시 24 제조업</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">연봉 8000</div>
                    <div className="badge badge-outline">상위 2%</div>
                </div>
            </div>
        </div>
    )
}