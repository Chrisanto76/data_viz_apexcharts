import React from 'react';
import ReactApexChart from 'react-apexcharts';

function TripChart({ data }) {
	return (
		<ReactApexChart
			options={{
				plotOptions: {
					bar: {
						distributed: true,
						horizontal: false,
						barHeight: '50%',
						dataLabels: {
							position: 'center',
							enabled: true,
							formatter: function (val) {
								return val + '%';
							},
						},
					},
				},
				dataLabels: {
					enabled: false,
				},
				legend: {
					show: true,
					position: 'bottom',
					fontWeight: '200',
					fontSize: '8px',
					fontFamily: 'Poppins, sans-serif',
				},
				xaxis: {
					categories: data.map((item) => item.data.section.name),
					labels: {
						show: false,
					},
				},
				tooltip: {
					y: {
						formatter: function (val) {
							return val.toFixed(2);
						},
					},
				},
				title: {
					text: 'POI vehicle',
					align: 'center',
					style: {
						fontSize: '20px',
						fontFamily: 'Poppins, sans-serif',
						fontWeight: '400',
						color: '#444',
					},
				},
				theme: {
					palette: 'palette8',
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
			}}
			series={[
				{
					name: 'vehicle',
					data: data.map((item) => item.data.mode.vehicle),
				},
			]}
			type="bar"
			height={300}
			width={400}
		/>
	);
}

export default TripChart;
