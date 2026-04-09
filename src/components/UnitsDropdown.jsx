import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import checkMark from '../assets/icon-checkmark.svg'

const UnitsDropdown = ({openDropdown, closeDropdown}) => {
    const {units, setUnits} = useContext(WeatherContext);
    function handleClick(){
        closeDropdown(false)
        if (units === 'Metric'){
            setUnits('Imperial')
        } else {

            setUnits('Metric')
        }
    }
    return ( 
        <div className={` ${openDropdown ? 'grid' : 'hidden'} z-50 w-50 min-w-max py-1.5 px-2 bg-neutral-800 rounded-12 border border-neutral-600 absolute right-0 top-[calc(100%+6px)]`}>
            <h3 className="px-2 py-2.5 text-[1rem] text-neutral-0 cursor-pointer rounded-8 hover:bg-neutral-700" onClick={handleClick}>Switch to {units === 'Metric' ? 'Imperial' : 'Metric'}</h3>
            <hr className="text-neutral-600 mt-1" />
            <ul>
                <li className="px-2 pt-1.5 text-sm text-neutral-300 font-medium pointer-events-none">Temperature</li>
                <li className={`flex justify-between items-center px-2 py-2.5 text-neutral-0 text-[1rem] cursor-pointer  font-medium rounded-8 hover:bg-neutral-700 ${units === 'Metric' ? 'bg-neutral-700' : ''}`}><span>Celsius (<sup>o</sup>C)</span> {units === 'Metric' ? <img src={checkMark} alt="checkmark"  className="w-3.5 h-4.25" /> : null}</li>
                <li className={`flex justify-between items-center px-2 py-2.5 text-neutral-0 text-[1rem] cursor-pointer font-medium rounded-8 hover:bg-neutral-700 ${units === 'Imperial' ? 'bg-neutral-700' : ''}`}><span>Fehrenheit (<sup>o</sup>F)</span> {units === 'Imperial' ? <img src={checkMark} alt="checkmark"  className="w-3.5 h-4.25" /> : null}</li>
            </ul>
            <hr className="text-neutral-600 my-1"  />
            <ul>
                <li className="px-2 pt-1.5 text-sm text-neutral-300 pointer-events-none">Wind Speed</li>
                <li className={`flex justify-between items-center px-2 py-2.5 text-neutral-0 text-[1rem] cursor-pointer font-medium rounded-8 hover:bg-neutral-700 ${units === 'Metric' ? 'bg-neutral-700' : ''}`}>km/h {units === 'Metric' ? <img src={checkMark} alt="checkmark"  className="w-3.5 h-4.25" /> : null}</li>
                <li className={`flex justify-between items-center px-2 py-2.5 text-neutral-0 text-[1rem] cursor-pointer  font-medium rounded-8 hover:bg-neutral-700 ${units === 'Imperial' ? 'bg-neutral-700' : ''}`}>mph {units === 'Imperial' ? <img src={checkMark} alt="checkmark"  className="w-3.5 h-4.25" /> : null}</li>
            </ul>
            <hr className="text-neutral-600 my-1" />
            <ul>
                <li className="px-2 pt-1.5 text-sm text-neutral-300 font-medium pointer-events-none">Percipitation</li>
                <li className={`flex justify-between items-center px-2 py-2.5 text-neutral-0 text-[1rem] cursor-pointer font-medium rounded-8 hover:bg-neutral-700 ${units === 'Metric' ? 'bg-neutral-700' : ''}`}>Millimeters (mm) {units === 'Metric' ? <img src={checkMark} alt="checkmark"  className="w-3.5 h-4.25" /> : null}</li>
                <li className={`flex justify-between items-center px-2 py-2.5 text-neutral-0 text-[1rem] cursor-pointer font-medium rounded-8 hover:bg-neutral-700 ${units === 'Imperial' ? 'bg-neutral-700' : ''}`}>Inches (in) {units === 'Imperial' ? <img src={checkMark} alt="checkmark"  className="w-3.5 h-4.25" /> : null}</li>
            </ul>
        </div>
     );
}
 
export default UnitsDropdown;