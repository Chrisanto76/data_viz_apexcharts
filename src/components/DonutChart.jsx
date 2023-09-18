import React from 'react';
import ReactApexChart from 'react-apexcharts';

const DonutChart = ({ data }) => {
	const options = {
		chart: {
			type: 'donut',
			toolbar: {
				show: false,
			},
		},
		plotOptions: {
			pie: {
				customScale: 0.9,
			},
		},
		labels: data.map((item) => item.address),
		legend: {
			show: true,
			position: 'bottom',
			fontWeight: '200',
			fontSize: '8px',
			fontFamily: 'Poppins, sans-serif',
		},
		theme: {
			palette: 'palette1',
		},

		title: {
			text: 'POI Average daily flow',
			align: 'center',
			style: {
				fontSize: '20px',
				fontWeight: '400',
				fontFamily: 'Poppins, sans-serif',
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
				},
			},
		],
	};

	return (
		<div className="donut-chart">
			<ReactApexChart
				options={options}
				series={data.map((item) => item.data.traffic.avg_daily_flow)}
				type="donut"
				height={300}
				width={400}
			/>
		</div>
	);
};

export default DonutChart;
