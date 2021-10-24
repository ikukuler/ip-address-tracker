import { useState } from "react";
import icon from "./icon-arrow.svg"

const Searchbar = ({ populateData }) => {
	const [ip, setIp] = useState("");

	const handleChange = (event) => {
		setIp(event.target.value);
	}

	const onSubmit = (event) => {
		event.preventDefault();
		populateData(ip);
		setIp("");
	}

	return (
		<div className="bg container vertical full-width">
			<h1>IP Address Tracker</h1>
			<form action="" onSubmit={onSubmit}>
				<div className="form-group">
					<input type="text" value={ip} placeholder="search for any IP address or domain" onChange={handleChange} />
					<button type="submit" className="button square" onClick={onSubmit}><img src={icon} alt=""/></button>
				</div>
			</form>
		</div>
	)
}

export default Searchbar;
