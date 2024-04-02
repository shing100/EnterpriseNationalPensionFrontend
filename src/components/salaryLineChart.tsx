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


const salaryLineChart = ({ graphData }) => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={graphData} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
                <XAxis dataKey="year" tick={{ fontSize: 14 }} tickFormatter={(value) => `${value}년`} />
                <YAxis type="number" domain={[2000000, 7000000]} tickFormatter={(value) => `${value / 1000}만원`} tick={{ fontSize: 14 }} />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip labelFormatter={value => `${value}년도`} formatter={(value : number) => `${value / 1000}만원`}  />
                <Legend verticalAlign="top" height={36} />
                <Line type="monotone" dataKey="averageSalary" stroke="#8884d8" strokeWidth={3} name="평균 연봉" />
                <Line type="monotone" dataKey="medianSalary" stroke="#82ca9d" strokeWidth={3} name="중위 연봉" />
                <Line type="monotone" dataKey="upperQuartileSalary" stroke="#ffc658" strokeWidth={3} name="상위 25%" />
            </LineChart>
        </ResponsiveContainer>
    );
};


export default salaryLineChart;