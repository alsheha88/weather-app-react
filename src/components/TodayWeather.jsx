import { useContext } from "react";
import { weatherImage } from "../utils";
import WeatherContent from "../WeatherContent";
import { WeatherContext } from "../context/WeatherContext";

const TodayWeather = ({ day, location, temperature }) => {
	const { data, defaultCity, isLoading, clickValue } = useContext(WeatherContext);
	if (!data) return null;
	if (!defaultCity) return null


	const image = data !== null ? weatherImage(data.current.weather_code) : null;
	return (
		<div className="grid grid-cols-1 gap-4 py-20 px-6 rounded-20 bg-[url('/bg-today-small.svg')] bg-no-repeat bg-cover md:gap-0 md:grid-cols-2 md:items-center md:bg-[url('/bg-today-large.svg')]">
			<div className="flex flex-col items-center ">
				{isLoading || defaultCity === null ? (
					<p className="font-bold text-[28px] text-neutral-0 text-center">
						Loading...
					</p>
				) : (
					<h2 className="font-bold text-[28px] text-neutral-0 text-center">
						{clickValue && location
							? `${location.name}, ${location.country}`
							: `${defaultCity.city}, ${defaultCity.country}`}
					</h2>
				)}
				<p className="text-lg text-neutral-0 text-center">{day}</p>
			</div>
			<div className="flex gap-5 items-center justify-center">
				<img src={image} alt="current temperature" className="w-30" />
				<h2 className="text-6xl text-neutral-0 font-semibold italic text-center md:text-5xl">
					{temperature.toFixed(0)} <sup>o</sup>
				</h2>
			</div>
		</div>
	);
};

export default TodayWeather;
