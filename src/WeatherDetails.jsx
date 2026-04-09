import HourlyForecast from "./HourlyForecast";
import WeatherContent from "./WeatherContent";

const WeatherDetails = () => {
	return (
		<section className="grid gap-8 lg:gap-12 lg:grid-cols-[2fr_1fr]">
			<WeatherContent />
			<HourlyForecast />
		</section>
	);
};

export default WeatherDetails;
