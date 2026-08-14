import type React from "react";
import searchIcon from "./../assets/icons/search-icon.svg";
import type { SearchBarProps } from "../types/searchBarType";

function SearchBar({ searchTerm, onSearchChange, setRefresh }: SearchBarProps) {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setRefresh(prev => !prev)
    }

    return (
        <form className="flex justify-center items-center gap-1" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Search Pokémon by name or number..." 
                value={searchTerm} 
                onChange={(e) => onSearchChange(e.target.value)}
                className="border-2 border-[#1F1F1F]/50 rounded-xl px-4 py-2 w-[55vw] max-w-80" 
            />
            <button type="submit" className="bg-[#1F1F1F] hover:bg-[#333333] text-white p-2 rounded-xl shrink-0">
                <img src={searchIcon} alt="Search" width="28" height="28" />
            </button>
        </form>
    )
}

export default SearchBar;