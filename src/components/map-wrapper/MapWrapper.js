import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from 'leaflet';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import icon from "./icon-location.svg";


const locationIcon = new L.Icon({
    iconUrl: icon
});

const MapWrapper = ({ data, isLoading }) => {

	const coords = !isLoading && [data.location.lat, data.location.lng];

	if (isLoading) {
		return (
			<div className="container skeleton">
				<Skeleton count={1} height={"50%"} containerClassName="align-center" />
			</div>
		)
	}
	return (
		<MapContainer center={coords} zoom={13} scrollWheelZoom={false} className="map-container">
			<TileLayer
		  		attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		    	url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={coords} icon={locationIcon}></Marker>
		</MapContainer>
	)
}

export default MapWrapper;
