import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import {useEffect, useState} from "react";


const salaryLineChart = ({ graphData } : any) => {
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
                <YAxis type="number" domain={[20000000, 70000000]} tickFormatter={(value) => `${Math.floor(value / 10000)}만원`} tick={{ fontSize: 14 }} />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip labelFormatter={value => `${value}년도`} formatter={(value : number) => `${Math.floor(value / 10000)}만원`}  />
                <Legend verticalAlign="top" height={36} />
                <Line type="monotone" dataKey="locationAverageSalary" stroke="#8884d8" strokeWidth={3} name="평균 연봉" />
                <Line type="monotone" dataKey="locationMedianSalary" stroke="#82ca9d" strokeWidth={3} name="중위 연봉" />
                <Line type="monotone" dataKey="locationUpperQuartileSalary" stroke="#ffc658" strokeWidth={3} name="상위 25%" />
            </LineChart>
        </ResponsiveContainer>
    );
};


export default salaryLineChart;