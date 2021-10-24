import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';


const InfoBlock = ({ isLoading, label, children }) => {


	if (isLoading) {
		return (
			<div className="info-block">
				<Skeleton count={4}/>
			</div>
		)
	}

	return (
		<div className="info-block">
			<h4>{label}</h4>
			{ children }
		</div>
	)
}

const InfoWrapper = ({ data, isLoading }) => {

	const location = (data && data.location )|| {};
	const provider = (data && data.as) || {};

	return (
		<div className="container">
			<div className="info-wrapper">
				<InfoBlock label="Ip address" isLoading={isLoading}>
					<span className="info">{ data.ip }</span>
				</InfoBlock>
				<InfoBlock label="Location" isLoading={isLoading}>
					<span className="info">
						{ location.region || "--" } { location.city || "--" }, { location.country } { location.postalCode }
					</span>
				</InfoBlock>
				<InfoBlock label="Timezone" isLoading={isLoading}>
					<span className="info">UTC: { location.timezone || "--" }</span>
				</InfoBlock>
				<InfoBlock label="Provider" isLoading={isLoading}>
					<span className="info">
						<a href={(provider.domain &&
							provider.domain.includes("http") ?
								provider.domain : `https://${provider.domain}`) || null } target="_blank" rel="noreferrer">
									{ data.isp } <small>{ provider.name }</small>
						</a>
						<span className="under">Type: { provider.type ? provider.type : "--" }</span>
					</span>
				</InfoBlock>
			</div>
		</div>
	)
}

export default InfoWrapper;
