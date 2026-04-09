import { createContext, useState, useEffect } from "react";
import checkMark from "../assets/icon-checkmark.svg";

export const WeatherContext = createContext({});

export function WeatherProvider({ children }) {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);
	const [coordinates, setCoordinates] = useState(null);
	const [userLocation, setUserLocation] = useState(null);
	const [defaultCity, setDefaultCity] = useState({
		city: "",
		country: "",
	});
	const [units, setUnits] = useState("Metric");
	const [clickValue, setClickValue] = useState(null);
	const [retryCount, setRetryCount] = useState(0);

	// retry function
	const retry = () => {
		setError(null);
		setRetryCount((prev) => prev + 1);
	};

	useEffect(() => {
		const fetchData = async () => {
			if (!coordinates || !coordinates.lat || !coordinates.long) return;
			try {
				setIsLoading(true);
				const res = await fetch(
					`https://api.open-meteo.com/v1/forecast?latitude=${coordinates.lat}&longitude=${coordinates.long}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,weather_code,wind_speed_10m,apparent_temperature,is_day,precipitation,relative_humidity_2m&timezone=auto${units === "Imperial" ? "&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch" : ""}`,
				);
				if (!res.ok) throw new Error("Failed to fetch"); // this triggers catch

				const results = await res.json();
				setData(results);
				setError(false);
			} catch {
				setError(true);
				setIsLoading(false);
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, [coordinates, units, retryCount]);

	return (
		<WeatherContext.Provider
			value={{
				data,
				isLoading,
				error,
				setCoordinates,
				setUserLocation,
				userLocation,
				setDefaultCity,
				defaultCity,
				setError,
				setIsLoading,
				setUnits,
				units,
				setClickValue,
				clickValue,
				retry
			}}>
			{children}
		</WeatherContext.Provider>
	);
}
