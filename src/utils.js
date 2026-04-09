export function weatherImage(weatherCode) {
	let image;

	switch (weatherCode) {
		case 0:
			image = `${import.meta.env.BASE_URL}icon-sunny.webp`;
			break;
		case 1:
		case 2:
		case 3:
			image = `${import.meta.env.BASE_URL}icon-overcast.webp`;
			break;
		case 45:
		case 48:
			image = `${import.meta.env.BASE_URL}icon-fog.webp`;
			break;
		case 51:
		case 53:
		case 55:
			image = `${import.meta.env.BASE_URL}icon-drizzle.webp`;
			break;
		case 56:
		case 57:
		case 61:
		case 63:
		case 65:
		case 66:
		case 67:
		case 80:
		case 81:
		case 82:
			image = `${import.meta.env.BASE_URL}icon-rain.webp`;
			break;
		case 71:
		case 73:
		case 75:
		case 77:
		case 85:
		case 86:
			image = `${import.meta.env.BASE_URL}icon-snow.webp`;
			break;
		case 95:
		case 96:
		case 99:
			image = `${import.meta.env.BASE_URL}icon-storm.webp`;
			break;
		default:
	}
	return image;
}

export function getLocalTime(utcOffset, dateObj) {
	const localTime = new Date(
		dateObj.getTime() + dateObj.getTimezoneOffset() * 60000 + utcOffset * 1000,
	);
	localTime.setMinutes(0);
	localTime.setSeconds(0);
	return `${localTime.getFullYear()}-${String(localTime.getMonth() + 1).padStart(2, "0")}-${String(localTime.getDate()).padStart(2, "0")}T${String(localTime.getHours()).padStart(2, "0")}:00`;
}

export function getSelectedDayTime(dateSelected, today) {
    const dateObj = new Date(dateSelected)
    dateObj.setMinutes(0)
    dateObj.setSeconds(0)

    const isToday = dateSelected === today.slice(0, 10)
    const startHour = isToday
        ? today.slice(11, 13)
        : "00"

    return `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, "0")}-${String(dateObj.getDate()).padStart(2, "0")}T${startHour}:00`
}
