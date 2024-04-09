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


const employeeLineChart = ({ graphData } : any) => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={graphData} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
                <XAxis dataKey="year" tick={{ fontSize: 14 }} tickFormatter={(value) => `${value}년`} />
                <YAxis tick={{ fontSize: 14 }} />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip labelFormatter={(value) => `${value}년`} formatter={(value: number) => `${value}명`} />
                <Legend verticalAlign="top" height={36} />
                <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={3} name={graphData.tag} />
            </LineChart>
        </ResponsiveContainer>
    );
};


export default employeeLineChart;