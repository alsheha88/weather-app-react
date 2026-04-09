import { useContext } from "react";
import SearchBar from "./SearchBar";
import WeahterSearch from "./SearchBar";
import WeatherDetails from "./WeatherDetails";
import { WeatherContext } from "./context/WeatherContext";

const WeatherPage = () => {
	const { isLoading, error } = useContext(WeatherContext);

	return (
		<section className={`grid gap-8 lg:gap-12`}>
			{error ? (
				<p className="text-neutral-0 text-5xl text-center">Error...</p>
			) : (
				<>
					<SearchBar />
					{isLoading ? (
						<p className="text-neutral-0 text-5xl text-center self-center">
							Fetcing Data....
						</p>
					) : (
						<WeatherDetails />
					)}
				</>
			)}
		</section>
	);
};

export default WeatherPage;
