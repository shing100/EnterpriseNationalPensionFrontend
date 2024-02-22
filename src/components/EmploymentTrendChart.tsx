import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { IndustryData } from '@/types';

interface EmploymentTrendChartProps {
    data: IndustryData[];
}

const EmploymentTrendChart: React.FC<EmploymentTrendChartProps> = ({ data }) => {
    const chartData = {
        labels: data.map((industry) => industry.companyIndustryName),
        datasets: [
            {
                label: '취업 성공자 수',
                data: data.map((industry) => industry.newMemberCount),
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.4,
            },
            {
                label: '탈출 성공자 수',
                data: data.map((industry) => industry.lostMemberCount),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                tension: 0.4,
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

    return <Line data={chartData} options={options} />;
};

export default EmploymentTrendChart;
