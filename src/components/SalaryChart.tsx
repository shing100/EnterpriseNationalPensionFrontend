import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import {IndustryData} from "@/types";


interface SalaryChartProps {
    data: IndustryData[];
}

const SalaryChart: React.FC<SalaryChartProps> = ({ data }) => {
    const chartData = {
        labels: data.map((industry) => industry.companyIndustryName),
        datasets: [
            {
                label: '평균 연봉',
                data: data.map((industry) => industry.industryAverageSalary),
                backgroundColor: 'rgba(0,19,216,0.5)',
            },
            {
                label: '중앙값 연봉',
                data: data.map((industry) => industry.industryMedianSalary),
                backgroundColor: 'rgba(213,0,48,0.5)',
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(200, 200, 200, 0.2)', // Light gridlines
                },
            },
            x: {
                grid: {
                    display: false, // No gridlines for X-axis
                },
            },
        },
        plugins: {
            legend: {
                display: false, // No legend for a cleaner look
            },
            tooltip: {
                mode: 'index',
                intersect: false,
                backgroundColor: 'rgba(0, 0, 0, 0.9)', // Tooltips with light background
                titleFont: {
                    size: 14,
                    family: 'Your Font Family',
                },
                bodyFont: {
                    size: 12,
                    family: 'Your Font Family',
                },
            },
        },
        responsive: true
    };

    return <Bar data={chartData} options={options} />;
};

export default SalaryChart;