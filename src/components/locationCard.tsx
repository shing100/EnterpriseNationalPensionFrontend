import {useState} from "react";

export default function LocationCard({ location } : any) {
    const [activeTab, setActiveTab] = useState('salary');

    return (
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <figure className="px-10 pt-10">
                <img src={location.logo} alt={`${location.name} logo`} className="rounded-xl h-12 mx-auto" />
            </figure>
            <div className="card-body items-center text-center">
                <h3 className="card-title">{location.name}</h3>
                <div className="tabs tabs-boxed">
                    <a className={`tab ${activeTab === 'salary' ? 'tab-active' : ''}`} onClick={() => setActiveTab('salary')}>연봉</a>
                    <a className={`tab ${activeTab === 'workforce' ? 'tab-active' : ''}`} onClick={() => setActiveTab('workforce')}>노동 통계</a>
                </div>
                {activeTab === 'salary' && (
                    <div className="stats">
                        <div className="stat">
                            <div className="stat-title">평균</div>
                            <div className="stat-value text-xl">{location.average}</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title">중위값</div>
                            <div className="stat-value text-xl">{location.median}</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title">상위 25%</div>
                            <div className="stat-value text-xl">{location.top25}</div>
                        </div>
                    </div>
                )}
                {activeTab === 'workforce' && (
                    <div className="stats">
                        <div className="stat">
                            <div className="stat-title">노동자 수</div>
                            <div className="stat-value text-xl">{location.workers}</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title">실업자 수</div>
                            <div className="stat-value text-xl">{location.unemployed}</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title">취업자 수</div>
                            <div className="stat-value text-xl">{location.employed}</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title">사업자 수</div>
                            <div className="stat-value text-xl">{location.businessOwners}</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}