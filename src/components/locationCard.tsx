import { useState } from "react";
import formatSalaryToMillionWon from "@/libs/utils";

export default function LocationCard({ location }: any) {
    const [activeTab, setActiveTab] = useState('salary');

    return (
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <figure className="px-6 pt-6">
                <img src={location.logo} alt={`${location.name} logo`} className="rounded-md h-20 mx-auto" />
            </figure>
            <div className="card-body items-center text-center">
                <h3 className="card-title text-2xl font-bold mb-2">{location.name}</h3>
                <div className="pt-2">
                    <div className="stats">
                        <div className="stat">
                            <div className="stat-title text-md">평균 연봉</div>
                            <div className="stat-value text-sm">{formatSalaryToMillionWon(location.average)}</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title text-md">중위 연봉</div>
                            <div className="stat-value text-sm">{formatSalaryToMillionWon(location.median)}</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title text-md">상위 25%</div>
                            <div className="stat-value text-sm">{formatSalaryToMillionWon(location.top25)}</div>
                        </div>
                    </div>
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
                            <div className="stat-title text-sm">기업 수</div>
                            <div className="stat-value text-sm">{location.businessOwners}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}