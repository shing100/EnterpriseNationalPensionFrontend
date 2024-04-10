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
import {formatNumberWithCommas} from "@/libs/utils";


const employeeLineChart = ({ graphData } : any) => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={graphData} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
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