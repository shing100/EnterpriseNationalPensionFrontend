
export default function IndustryCard({ industry }: any) {
    return (
        <div className="bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <figure className="p-3"><img src={industry.logo} alt={`${industry.name} logo`} className="rounded-md h-20 mx-auto" /></figure>
            <div className="items-center text-center">
                <h3 className="text-2xl font-bold mb-2">{industry.name}</h3>
                <div className="py-4">
                    <div className="stats">
                        <div className="stat">
                            <div className="stat-title text-md">평균 연봉</div>
                            <div className="stat-value text-sm">{industry.average}</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title text-md">중위 연봉</div>
                            <div className="stat-value text-sm">{industry.median}</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title text-md">상위 25%</div>
                            <div className="stat-value text-sm">{industry.top25}</div>
                        </div>
                    </div>
                    <div className="stats">
                        <div className="stat">
                            <div className="stat-title text-md">평균 연봉</div>
                            <div className="stat-value text-sm">{industry.average}</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title text-md">중위 연봉</div>
                            <div className="stat-value text-sm">{industry.median}</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title text-md">상위 25%</div>
                            <div className="stat-value text-sm">{industry.top25}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}