const DaysDropdown = ({onClick, openDropdown, closeDropdown}) => {
    function handleDayClick(e){
        const {innerText} = e.target;
        onClick(innerText);
        closeDropdown(false);
    }

    return ( 
        <div className={`${openDropdown ? 'grid' : 'hidden'} z-1000 min-w-max w-50 gap-1 p-2 bg-neutral-800 rounded-12 border border-neutral-600 absolute right-0 top-[calc(100%+6px)] `}>
            <ul>
                <li className="px-2 py-2.5 text-neutral-0 text-[1rem] cursor-pointer  font-medium rounded-8 hover:bg-neutral-700" onClick={handleDayClick}>Monday</li>
                <li className="px-2 py-2.5 text-neutral-0 text-[1rem] cursor-pointer font-medium rounded-8 hover:bg-neutral-700" onClick={handleDayClick}>Tuesday</li>
                <li className="px-2 py-2.5 text-neutral-0 text-[1rem] cursor-pointer font-medium rounded-8 hover:bg-neutral-700" onClick={handleDayClick}>Wednesday</li>
                <li className="px-2 py-2.5 text-neutral-0 text-[1rem] cursor-pointer font-medium rounded-8 hover:bg-neutral-700" onClick={handleDayClick}>Thursday</li>
                <li className="px-2 py-2.5 text-neutral-0 text-[1rem] cursor-pointer font-medium rounded-8 hover:bg-neutral-700" onClick={handleDayClick}>Friday</li>
                <li className="px-2 py-2.5 text-neutral-0 text-[1rem] cursor-pointer font-medium rounded-8 hover:bg-neutral-700" onClick={handleDayClick}>Saturday</li>
                <li className="px-2 py-2.5 text-neutral-0 text-[1rem] cursor-pointer font-medium rounded-8 hover:bg-neutral-700" onClick={handleDayClick}>Sunday</li>
            </ul>  
        </div>
     );
}
 
export default DaysDropdown;