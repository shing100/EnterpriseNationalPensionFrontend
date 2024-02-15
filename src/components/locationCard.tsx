import { useState } from "react";

export default function LocationCard({ location }: any) {
    const [activeTab, setActiveTab] = useState('salary');

    return (
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <figure className="px-10 pt-10">
                <img src={location.logo} alt={`${location.name} logo`} className="rounded-md h-20 mx-auto" />
            </figure>
            <div className="card-body items-center text-center">
                <h3 className="card-title text-2xl font-bold mb-2">{location.name}</h3>
                <div className="tabs tabs-boxed flex justify-center gap-1">
                    <a className={`tab tab-lg ${activeTab === 'salary' ? 'tab-active' : ''}`} onClick={() => setActiveTab('salary')}>연봉 정보</a>
                    <a className={`tab tab-lg ${activeTab === 'workforce' ? 'tab-active' : ''}`} onClick={() => setActiveTab('workforce')}>통계</a>
                </div>
                <div className="py-4">
                    {activeTab === 'salary' && (
                        <div className="stats">
                            <div className="stat">
                                <div className="stat-title text-md">평균 연봉</div>
                                <div className="stat-value text-sm">{location.average}</div>
                            </div>
                            <div className="stat">
                                <div className="stat-title text-md">중위 연봉</div>
                                <div className="stat-value text-sm">{location.median}</div>
                            </div>
                            <div className="stat">
                                <div className="stat-title text-md">상위 25%</div>
                                <div className="stat-value text-sm">{location.top25}</div>
                            </div>
                        </div>
                    )}
                    {activeTab === 'workforce' && (
                        <div className="stats">
                            <div className="stat">
                                <div className="stat-title text-sm">노동자 수</div>
                                <div className="stat-value text-sm">{location.workers}</div>
                            </div>
                            <div className="stat">
                                <div className="stat-title text-sm">실업자 수</div>
                                <div className="stat-value text-sm">{location.unemployed}</div>
                            </div>
                            <div className="stat">
                                <div className="stat-title text-sm">취업자 수</div>
                                <div className="stat-value text-sm">{location.employed}</div>
                            </div>
                            <div className="stat">
                                <div className="stat-title text-sm">사업자 수</div>
                                <div className="stat-value text-sm">{location.businessOwners}</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}