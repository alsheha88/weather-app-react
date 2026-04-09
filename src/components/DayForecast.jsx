import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { weatherImage } from "../utils";


const DayForecast = ({days, maxTemp, minTemp, weatherCode }) => {
	const { data } = useContext(WeatherContext);
	if (!data) return null

	const daily = data?.daily;

	return (
		<div>
			<div className="flex flex-col gap-4 px-2.5 py-4 bg-neutral-800 border border-neutral-600 rounded-12 ">
				<p className="text-neutral-0 text-center text-lg font-medium">{days}</p>
				<img src={data?.current?.weather_code !== null ? weatherImage(weatherCode) : null} alt="current weather" className="max-w-full w-15 self-center" />
				
				<div className="flex justify-between items-center">
					<p className="text-neutral-0 text-[0.8rem] font-medium">{maxTemp}<sup>o</sup></p>
					<p className="text-neutral-0 text-[0.8rem] font-medium">{minTemp}<sup>o</sup></p>
				</div>
			</div>
		</div>
	);
};

export default DayForecast;
