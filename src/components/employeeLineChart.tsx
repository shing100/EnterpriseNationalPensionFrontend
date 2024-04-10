import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {formatNumberWithCommas} from "@/libs/utils";

const employeeLineChart = ({ graphData }: any) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const margin = isMobile ? { top: 0, right: 0, bottom: 0, left: 5 } : { top: 20, right: 30, bottom: 20, left: 30 };

    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={graphData} margin={margin}>
                <XAxis dataKey="date" tick={{ fontSize: 14 }} tickFormatter={(value) => `${value}`} />
                <YAxis tick={{ fontSize: 14 }} />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip labelFormatter={(value) => `${value}`} formatter={(value: number) => `${formatNumberWithCommas(value)}명`} />
                <Legend verticalAlign="top" height={36} />
                <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={3} name='사원수' />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default employeeLineChart;
