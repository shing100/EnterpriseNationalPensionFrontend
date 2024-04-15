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


const salaryLineChart = ({ graphData } : any) => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={graphData} margin={{ top: 20, right: 5, bottom: 20, left: 5 }}>
                <XAxis dataKey="date" tick={{ fontSize: 14 }} tickFormatter={(value) => `${value}`} />
                <YAxis type="number" domain={[24000000, 75000000]} tickFormatter={(value) => `${Math.floor(value / 10000)}만원`} tick={{ fontSize: 14 }} />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip labelFormatter={value => `${value}년도`} formatter={(value : number) => `${Math.floor(value / 10000)}만원`}  />
                <Legend verticalAlign="top" height={36} />
                <Line type="monotone" dataKey="averageSalary" stroke="#551534" strokeWidth={3} name="평균 연봉" />
            </LineChart>
        </ResponsiveContainer>
    );
};


export default salaryLineChart;