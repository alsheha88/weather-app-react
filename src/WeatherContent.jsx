import { useContext } from "react";
import DayForecast from "./components/DayForecast";
import TodayWeather from "./components/TodayWeather";
import WeatherCard from "./components/WeatherCard";
import { WeatherContext } from "./context/WeatherContext";

const WeatherContent = () => {
	const { data, userLocation } = useContext(WeatherContext);
	if (!data) return null

	const time = data?.daily?.time;
	const days = time && time.map((item) => new Date(item).toLocaleDateString('en-US', { weekday: 'short' }));
	const formattedDate = time && new Date(time[0]).toLocaleDateString('en-US', {
		weekday: 'long',  
		month: 'short',    
		day: 'numeric',    
		year: 'numeric'    
		});
	const maxTemp = data?.daily?.temperature_2m_max;
	const minTemp = data?.daily?.temperature_2m_min;
	const weatherCode = data?.daily?.weather_code;

	return (
		<div className="grid gap-8 md:gap-12">
			<div className="grid gap-4 md:gap-8">
				<TodayWeather day={formattedDate && formattedDate} location={userLocation} temperature={data?.current.temperature_2m} />
				<div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-6">
					<WeatherCard weather={data?.current.apparent_temperature.toFixed(0)} unit={data?.current_units?.apparent_temperature.slice(0,1)}  currentWeather="Feels Like" />
					<WeatherCard weather={data?.current.relative_humidity_2m} unit={data?.current_units?.relative_humidity_2m} currentWeather="Humidity" />
					<WeatherCard weather={data?.current.wind_speed_10m.toFixed(0)} unit={data?.current_units?.wind_speed_10m} currentWeather="Wind" />
					<WeatherCard weather={data?.current.precipitation} unit={data?.current_units?.precipitation} currentWeather="Precipitation" />
				</div>
			</div>
			<div className="flex flex-col gap-5">
				<h3 className="text-neutral-0 font-semibold text-xl">Daily Forecast</h3>
				<div className="grid grid-cols-3 gap-4  md:grid-cols-7">
					{days && days.map((day, i) => (
						<DayForecast key={i} days={day} maxTemp={maxTemp[i].toFixed(0)} minTemp={minTemp[i].toFixed(0)} weatherCode={weatherCode[i]} />
					))}
				</div>
			</div>
		</div>
	);
};

export default WeatherContent;
