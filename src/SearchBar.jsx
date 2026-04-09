import searchImg from "./assets/icon-search.svg";
import SearchDropdown from "./components/SearchDropdown";
import { useContext, useState, useEffect } from "react";
import { WeatherContext } from "./context/WeatherContext";

const SearchBar = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const {
		coordinates,
		setCoordinates,
		setError,
		userLocation,
		setDefaultCity,
		setIsLoading,
		setClickValue
	} = useContext(WeatherContext);
	const [cities, setCities] = useState(null);

	function handleChange(e) {
		const { value } = e.target;
		setInputValue(value);
		if (e.target.value) {
			setIsDropdownOpen(true);
			return;
		}
		setIsDropdownOpen(false);
	}

	useEffect(() => {
		const getGeoCode = async (value) => {
			const city = value.includes(" ") ? value.replace(/ /g, "&") : value;
			try {
				if (!city) return;
				const res = await fetch(
					`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=4&language=en&format=json`,
				);
				const geoCode = await res.json();
				setCities(geoCode.results);
				setError(false);
				setIsLoading(true);
			} catch {
				setError(true);
				setIsLoading(false);
			} finally {
				setIsLoading(false);
			}
		};
		getGeoCode(inputValue);
	}, [inputValue]);
	useEffect(() => {
		if (!coordinates) {
			const fetchCity = async (lat, long) => {
				try {
					const res = await fetch(
						`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`,
					);
					const cityData = await res.json();
					setError(false);
					setIsLoading(true);
					setDefaultCity({
						city: cityData.city,
						country: cityData.countryName,
					});
				} catch {
					setError(true);
					setIsLoading(false);
				} finally {
					setIsLoading(false);
				}
			};

			navigator.geolocation.getCurrentPosition(
				(pos) => {
					setCoordinates({
						lat: pos.coords.latitude.toFixed(2),
						long: pos.coords.longitude.toFixed(2),
					});
					fetchCity(
						pos.coords.latitude.toFixed(2),
						pos.coords.longitude.toFixed(2),
					);
				},
				() => setCoordinates({ lat: 51.5, long: -0.12 }),
			);
		}
	}, []);
	function handleClick() {
		setClickValue(inputValue);
		setCoordinates({
			lat: userLocation.latitude,
			long: userLocation.longitude,
		});
	}

	return (
		<section className="flex flex-col gap-3 md:gap-4 md:flex-row md:justify-center md:items-center">
			<label
				htmlFor="search"
				className="flex gap-4 items-center px-6 py-4 bg-neutral-800 rounded-12 has-focus:bg-neutral-700 has-focus:shadow-[0_0px_0px_2px_rgba(255,255,255,1),0_0px_0px_5px_rgba(2,1,44,1)] relative md:flex-1 lg:flex-initial lg:w-md">
				<img src={searchImg} alt="search" className="" />
				<input
					value={inputValue}
					onChange={handleChange}
					type="text"
					name="search"
					className="w-full text-xl text-neutral-200 border-0 outline-0 cursor-pointer"
					placeholder="Search for a place..."
				/>
				<SearchDropdown
					setInputValue={setInputValue}
					setDropdown={setIsDropdownOpen}
					openDropdown={isDropdownOpen}
					cities={cities}
				/>
			</label>
			<button
				onClick={handleClick}
				type="button"
				className="px-6 py-4 bg-blue-500 rounded-12 text-xl text-neutral-0 font-medium cursor-pointer active:bg-blue-700 hover:bg-blue-700 focus:shadow-[0_0px_0px_2px_rgba(255,255,255,1),0_0px_0px_5px_rgba(2,1,44,1)]">
				Search
			</button>
		</section>
	);
};

export default SearchBar;
