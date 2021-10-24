import axios from "axios";

const locationApiInstance = axios.create({
	baseURL: "https://geo.ipify.org/api",
	params: {
		apiKey: "at_pYqtJfYpixjYb6odVcX1d1VswpyGM"
	}
});

export function getLocationByIP(ip) {
	return locationApiInstance.get(`/v2/country,city?domain=${ip || ""}`);
}
