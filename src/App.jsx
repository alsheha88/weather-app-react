import { useContext, useEffect, useState } from "react";
import Header from "./Header";
import WeatherPage from "./WeatherPage";
import "./App.css";
import { WeatherContext } from "./context/WeatherContext";
import ErrorPage from "./components/ErrorPage";
function App() {
	const { error, isLoading } = useContext(WeatherContext);

	return (
		<main className={`min-h-dvh bg-neutral-900 grid gap-12  px-4 pt-4 pb-8 font-dm-sans md:px-6 md:pt-6 md:pb-20 md:gap-16 lg:px-10 lg:pt-12`}>
			<Header />
			{error ? (
				<ErrorPage />
			) : (
				<>
					<h1 className="text-neutral-0 font-bricolage-grotesque text-[3.25rem] text-center">
						How’s the sky looking today?
					</h1>
					<WeatherPage />
				</>
			)}
		</main>
	);
}

export default App;
