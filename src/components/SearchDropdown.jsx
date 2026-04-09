import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const SearchDropdown = ({setInputValue, setDropdown ,openDropdown, cities}) => {
    const {setUserLocation} = useContext(WeatherContext);

    function handleClick(id){
        const [city] = cities.filter((city) => city.id === id);
        setDropdown(false);
        setInputValue(city.name)
        setUserLocation(city)
    }
    return ( 
        <div className={`${openDropdown ? 'grid' : 'hidden'} z-50 w-full gap-1 p-2 bg-neutral-800 rounded-12 border border-neutral-600 absolute right-0 top-[calc(100%+6px)]`}>
            <ul>
                {cities ? cities.map((city) => (
                city &&  <li className="px-2 py-2.5 text-neutral-0 text-[1rem] cursor-pointer  font-medium rounded-8 hover:bg-neutral-700" key={city.id} onClick={() => handleClick(city.id)} >{`${city.name}, ${city.country}`}</li>
                )) : <>
                        <li className="px-2 py-2.5 text-neutral-0 text-[1rem] cursor-pointer  font-medium rounded-8 hover:bg-neutral-700">City Name</li> 
                        <li className="px-2 py-2.5 text-neutral-0 text-[1rem] cursor-pointer  font-medium rounded-8 hover:bg-neutral-700">City Name</li>
                        <li className="px-2 py-2.5 text-neutral-0 text-[1rem] cursor-pointer  font-medium rounded-8 hover:bg-neutral-700">City Name</li>
                        <li className="px-2 py-2.5 text-neutral-0 text-[1rem] cursor-pointer  font-medium rounded-8 hover:bg-neutral-700">City Name</li>
                    </>
                }
            </ul>  
        </div>
     );
}
 
export default SearchDropdown;