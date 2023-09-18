// import { useState, useEffect } from 'react';
// import './App.css';
// import axios from 'axios';

// function App() {
// 	const [data, setData] = useState([]);

// 	useEffect(() => {
// 		// Essayez de récupérer les données depuis LocalStorage
// 		const storedData = localStorage.getItem('addressData');

// 		if (storedData) {
// 			// Si des données sont trouvées dans LocalStorage, utilisez-les
// 			setData(JSON.parse(storedData));
// 		} else {
// 			// Si aucune donnée n'est trouvée dans LocalStorage, faites une requête API
// 			axios
// 				.get('https://api.seiki.co/v1/pois', {
// 					headers: {
// 						'X-API-KEY':
// 							'XgxHDnDJGSFLck-puloZZhyDaaycszcpsNjIMLkuX6gXzL5Dsdp1jypopfbvwQx8J-ywLNV0FxEleNIrW2OjgWLM60d9FFQxFlpTg7Glz61BQMVU7PUUob89U-NzltyMB4XsEQ',
// 					},
// 				})
// 				.then((response) => {
// 					const apiData = response.data.items;
// 					// Mettez à jour l'état avec les données API
// 					setData(apiData);
// 					// Stockez également les données dans LocalStorage
// 					localStorage.setItem('addressData', JSON.stringify(apiData));
// 				})
// 				.catch((error) => {
// 					console.error('Erreur lors de la récupération des données:', error);
// 				});
// 		}
// 	}, []);
// 	console.log(data);

// 	return (
// 		<>
// 			<div className="main--container">
// 				<h1>address list</h1>
// 				<ul>
// 					{data.map((item) => (
// 						<li key={item.id}>
// 							{`Adresse: ${item.address}`}
// 							<br />
// 							{`Longitude: ${item.lng}`}
// 							<br />
// 							{`Latitude: ${item.lat}`}
// 							<br />
// 							{`Average Daily Flow: ${item.data.traffic.avg_daily_flow}`}
// 							<br />
// 							{`Average Daily Flow: ${item.data.footfall.avg_daily_number}`}
// 						</li>
// 					))}
// 				</ul>
// 			</div>
// 		</>
// 	);
// }

// export default App;
import { useState, useEffect } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import './App.css';
import axios from 'axios';
import PieChart from './components/PieChart';
import BarChart from './components/BarChart';
import DonutChart from './components/DonutChart';
import LineChart from './components/LineChart';
import NavBar from './components/NavBar';
import TripChart from './components/TripChart';

function App() {
	const [data, setData] = useState([]);
	const [filterText, setFilterText] = useState(''); // État pour le texte de filtre

	useEffect(() => {
		// Essayez de récupérer les données depuis LocalStorage
		const storedData = localStorage.getItem('addressData');

		if (storedData) {
			// Si des données sont trouvées dans LocalStorage, utilisez-les
			setData(JSON.parse(storedData));
		} else {
			// Si aucune donnée n'est trouvée dans LocalStorage, faites une requête API
			axios
				.get('https://api.seiki.co/v1/pois', {
					headers: {
						'X-API-KEY':
							'XgxHDnDJGSFLck-puloZZhyDaaycszcpsNjIMLkuX6gXzL5Dsdp1jypopfbvwQx8J-ywLNV0FxEleNIrW2OjgWLM60d9FFQxFlpTg7Glz61BQMVU7PUUob89U-NzltyMB4XsEQ',
					},
				})
				.then((response) => {
					const apiData = response.data.items;
					// Mettez à jour l'état avec les données API
					setData(apiData);
					// Stockez également les données dans LocalStorage
					localStorage.setItem('addressData', JSON.stringify(apiData));
				})
				.catch((error) => {
					console.error('Erreur lors de la récupération des données:', error);
				});
		}
	}, []);

	// Fonction de gestion du changement de filtre
	const handleFilterChange = (e) => {
		setFilterText(e.target.value);
	};

	// Filtrer les données en fonction du texte de filtre
	const filteredData = data.filter((item) =>
		item.address.toLowerCase().includes(filterText.toLowerCase())
	);

	return (
		<>
			<NavBar />
			<Container fluid className="">
				<Row className="">
					<Col md={4} className="p-1  bg-light border rounded-2">
						<DonutChart data={data} />
					</Col>
					<Col md={4} className="p-1  bg-light border rounded-2">
						<BarChart data={data} />
					</Col>
					<Col md={4} className="p-1  bg-light border rounded-2">
						<PieChart data={data} />
					</Col>
				</Row>

				<Row className="justify-content-start">
					<Col md={4} className="p-1  bg-light border rounded-2">
						<TripChart data={data} />
					</Col>
					<Col md={4} className="p-1 bg-light border rounded-2">
						<LineChart data={data} />
					</Col>
				</Row>
				<Row>
					<div className="main--container">
						<input
							className="filter--input"
							type="text"
							placeholder="Filter by address"
							value={filterText}
							onChange={handleFilterChange}
						/>
						<ul>
							{filteredData.map((item) => (
								<li key={item.id}>
									{`Adresse: ${item.address}`}
									<br />
									{/* {`Longitude: ${item.lng}`}
								<br />
								{`Latitude: ${item.lat}`}
								<br />
								{`Average Daily Flow: ${item.data.traffic.avg_daily_flow}`}
								<br />
								{`Average footfall: ${item.data.footfall.avg_daily_number}`} */}
								</li>
							))}
						</ul>
					</div>
				</Row>
			</Container>
		</>
	);
}

export default App;
