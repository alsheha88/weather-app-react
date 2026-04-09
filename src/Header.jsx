import logo from "./assets/logo.svg";
import unitsImg from "./assets/icon-units.svg";
import dropdownImg from "./assets/icon-dropdown.svg";
import UnitsDropdown from "./components/UnitsDropdown";
import { useState } from "react";

const Header = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	function handleClick() {
		setIsDropdownOpen(!isDropdownOpen);
	}
	return (
		<header className="flex justify-between items-center">
			<img className="max-w-full w-36 md:w-44" src={logo} alt="logo" />
			<div className="relative">
				<button
					onClick={handleClick}
					type="button"
					className="flex items-center gap-3 bg-neutral-800 text-neutral-0 text-sm font-medium rounded-6 px-2.5 py-2 cursor-pointer hover:bg-neutral-700 md:px-3 md:py-4 md:rounded-8 md:text-[1rem]">
					<img src={unitsImg} alt="units" />
					Units <img src={dropdownImg} alt="dropdown" />
				</button>
				<UnitsDropdown
					closeDropdown={setIsDropdownOpen}
					openDropdown={isDropdownOpen}
				/>
			</div>
		</header>
	);
};

export default Header;
