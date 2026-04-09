import { weatherImage } from "../utils";

const HourCard = ({hours, temp, weather}) => {
	const temperature = parseInt(Math.ceil(temp));

	return (
		<div className="grid grid-cols-[2fr_1fr] gap-2 items-center pl-4 pr-3 py-2.5 rounded-8 bg-neutral-700 border border-neutral-600 md:px-4">
			<div className="flex gap-2 items-center">
				<img src={weather !== null ? weatherImage(weather) : null} alt="weather" className="w-10" />
				<p className="text-start text-neutral-0 text-xl">{hours}</p>
			</div>
			<p className="text-neutral-0 text-[1rem] text-end">{temperature} <sup>o</sup></p>
		</div>
	);
};

export default HourCard;
