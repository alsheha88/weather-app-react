const WeatherCard = ({currentWeather, weather, unit}) => {
    return ( 
       <div className="flex flex-col gap-6 p-5 bg-neutral-800 border border-neutral-600 rounded-12">
          <h3 className="text-neutral-200 text-[1rem] font-medium">{currentWeather}</h3>
          <h2 className="text-neutral-0 text-[1.5rem] font-light">{`${weather} ${unit}`}</h2>
       </div>
     );
}
 
export default WeatherCard;