import React from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChart = ({ data }) => {
	const options = {
		chart: {
			type: 'pie',
			toolbar: {
				show: false,
			},
			fontFamily: 'Poppins, sans-serif',
		},
		plotOptions: {
			pie: {
				customScale: 0.8,
			},
		},
		labels: data.map((item) => item.address),
		legend: {
			show: true,
			position: 'bottom',
			fontWeight: '400',
			fontSize: '8px',
		},
		theme: {
			palette: 'palette4',
		},
		dataLabels: {
			enabled: true,
		},
		title: {
			text: 'POI soft mode',
			align: 'center',
			style: {
				fontSize: '20px',
				fontWeight: '400',
				color: '#444',
			},
		},
		responsive: [
			{
				breakpoint: 768,
				options: {
					chart: {
						width: 450,
					},
					legend: {
						position: 'bottom',
					},
					title: {
						align: 'center',
					},
				},
			},
		],
	};

	return (
		<div className="donut-chart">
			<ReactApexChart
				options={options}
				series={data.map((item) => item.data.traffic.avg_daily_flow)}
				type="pie"
				height={300}
				width={400}
			/>
		</div>
	);
};

export default PieChart;
