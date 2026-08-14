import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="bg-[#1F1F1F] rounded-[30px] mt-4 mx-[10vw] sm:mx-auto p-2 max-w-xl justify-end fixed flex flex-wrap top-0 left-0 right-0 z-50">
            {/* HAMBURGER BAR */}
            <div className="h-6 w-6 my-2 flex flex-col mx-3 justify-around cursor-pointer relative sm:hidden" onClick={toggleMenu}>
                <div className={`w-full h-1 bg-white rounded-full transition-transform duration-300
                                ${isOpen ? "rotate-45 absolute top-2" : ""}`}></div>
                <div className={`w-full h-1 bg-white rounded-full transition-transform duration-300
                                ${isOpen ? "-rotate-45 absolute top-2" : ""}`}></div>
            </div>

            {/* NAVLINKS */}
            <div className={`flex flex-col basis-full items-center justify-between overflow-hidden text-center transition-[max-height] duration-500 ease-in-out
                            sm:flex-row sm:overflow-visible sm:max-h-fit
                            ${isOpen ? "max-h-60" : "max-h-0"}`}>
                <NavLink to="/" onClick={closeMenu} className={({ isActive }) => `${isActive ? "text-[#1F1F1F] bg-white" : "text-white"} font-interRegular  px-[20vw] sm:px-5 py-2 rounded-[30px]`}>
                    Pokedex
                </NavLink>

                <NavLink to="/savedpokemon" onClick={closeMenu} className={({ isActive }) => `${isActive ? "text-[#1F1F1F] bg-white" : "text-white"} font-interRegular px-[20vw] sm:px-5 py-2 rounded-[30px]`}>
                    Saved Pokémon
                </NavLink>

                <NavLink to="/compare" onClick={closeMenu} className={({ isActive }) => `${isActive ? "text-[#1F1F1F] bg-white" : "text-white"} font-interRegular px-[20vw] sm:px-5 py-2 rounded-[30px]`}>
                    Compare
                </NavLink>

                <NavLink to="/statistics" onClick={closeMenu} className={({ isActive }) => `${isActive ? "text-[#1F1F1F] bg-white" : "text-white"} font-interRegular px-[20vw] sm:px-5 py-2 rounded-[30px]`}>
                    Statistics
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;