import dropdownImg from "./assets/icon-dropdown.svg";
import HourCard from "./components/HourCard";
import DaysDropdown from "./components/DaysDropdown";
import { useContext, useState } from "react";
import { WeatherContext } from "./context/WeatherContext";
import { getLocalTime } from "./utils";
import {getSelectedDayTime} from './utils'

const HourlyForecast = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [selectedDay, setSelectedDay] = useState(undefined);
	const { data } = useContext(WeatherContext);
	if (!data) return null;

	const formatter = new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
		hour12: true,
	});
	const day = new Date().toLocaleDateString("en-US", { weekday: "long" });

	const today = getLocalTime(data.utc_offset_seconds, new Date())

	const todayIndex = data?.hourly?.time.indexOf(today);
	const dateSelected =
		data &&
		data?.daily?.time.find(
			(item) =>
				new Date(item).toLocaleDateString("en-US", { weekday: "long" }) ===
				selectedDay,
		);

	const daySelected = getSelectedDayTime(dateSelected, today)
	const selectedIndex = dateSelected && data?.hourly?.time.indexOf(daySelected);

	const hours =
		data &&
		data?.hourly?.time
			.slice(selectedIndex ?? todayIndex, (selectedIndex ?? todayIndex) + 7)
			.map((item) => formatter.format(new Date(item)));
	const hourlyTemp =
		data &&
		data?.hourly?.temperature_2m.slice(
			selectedIndex ?? todayIndex,
			(selectedIndex ?? todayIndex) + 7,
		);
	const weatherCode =
		data &&
		data?.hourly?.weather_code.slice(
			selectedIndex ?? todayIndex,
			(selectedIndex ?? todayIndex) + 7,
		);

	function handleClick() {
		setIsDropdownOpen(!isDropdownOpen);
	}
	return (
		<div className="px-4 py-5 grid gap-4 bg-neutral-800 rounded-20 md:p-6">
			<div className="flex justify-between items-center">
				<h3 className="text-neutral-0 font-semibold text-xl">
					Hourly forecast
				</h3>
				<div className="relative">
					<button
						type="button"
						className="flex items-center gap-3 px-4 py-2 bg-neutral-600 text-neutral-0 rounded-8 cursor-pointer"
						onClick={handleClick}>
						{selectedDay ? selectedDay : day} <img src={dropdownImg} alt="" />
					</button>
					<DaysDropdown
						onClick={setSelectedDay}
						openDropdown={isDropdownOpen}
						closeDropdown={setIsDropdownOpen}
					/>
				</div>
			</div>
			{hours &&
				hours.map((hour, i) => (
					<HourCard
						key={i}
						hours={hour}
						temp={hourlyTemp[i]}
						weather={weatherCode[i]}
					/>
				))}
		</div>
	);
};

export default HourlyForecast;
