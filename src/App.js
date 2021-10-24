import { useEffect, useState } from "react";
import { getLocationByIP } from "./ip-api";
import Searchbar from "./components/searchbar";
import InfoWrapper from "./components/info-wrapper";
import MapWrapper from "./components/map-wrapper/MapWrapper";

const ErrorBoundary = ({ error, children }) => {
	const errorObject = error && error.toJSON();
	if (errorObject) {
		return (
			<div className="container skeleton">
				<div className="error">
					<h2>{ errorObject.status === 422 ? "Probaly wrong IP" : errorObject.message }</h2>
				</div>
			</div>
		)
	} 

	return(
		<> 
			{ children }
		</>
	);
}

const App = () => {

	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState({});
	const [error, setError] = useState(null);

	const populateData = (ip) => {
		setIsLoading(true);
		setError(null);
		getLocationByIP(ip)
			.then(response => {
				if (response.statusText === "OK") {
					setData(response.data);
					setIsLoading(false);
				}
			})
			.catch((error) => {
				console.log(error)
				setError(error);
				setIsLoading(false);
			});
	}

	useEffect(() => {
		populateData();
	}, []);
	
	return ( 
		<div>
			<Searchbar populateData={populateData} />
			<ErrorBoundary error={error}>
				<InfoWrapper data={data} isLoading={isLoading} />
				<MapWrapper data={data} isLoading={isLoading} />
			</ErrorBoundary>
		</div>
	)
}

export default App;
