"use client"

import Image from 'next/image';
import PokeCard from './PokeCard';
import { searchPokemon } from './SearchPokemon';
import { useState, useEffect } from 'react';
import { Pokemon } from '@/lib/interfaces/Pokemon';

export default function SearchBar() {
    const [query, setQuery] = useState('');  // State variable to store what the user types in the input field
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);  // State variable to store the list of pokemons returned by the search

    // useEffect hook runs code when 'query' (user input) changes
    useEffect(() => {
        const trimmedQuery = query.trim();

        // Only search if the trimmed query is not empty
        if (trimmedQuery.length > 0) {
            // Call searchPokemon with the trimmed query, which returns a Promise
            searchPokemon(trimmedQuery).then((results: Pokemon[]) => {
                setPokemons(results);
            });
        } else {
            setPokemons([]); // If query is empty after trimming, clear the search results
        }
    }, [query]); // This effect depends on 'query'. It runs every time 'query' changes.

    
    return (
        <section className="flex flex-col items-center p-10">
            <div className="flex items-align justify-between w-2/5 shadow-md/25  rounded-md p-3 ">

                {/* Controlled input element: its value is 'query' and updates on each keystroke */}
                <input 
                    name="query" 
                    value={query} // Showing current state value in the input
                    onChange={(e) => setQuery(e.target.value)} // Update state as user types
                    placeholder="Search for a Pokémon..." 
                    className="w-full"/>
                <div className="bg-indigo-400 rounded-md px-1">
                    <Image
                        src="/Search.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="p-1"
                    />
                </div>
            </div>

            {/* Search results */}
            {query.trim().length > 0 && (   // only show when the trimmed query has content
                <section className="flex flex-col items-center pb-16">
                    <h2 className="text-3xl p-10">Search result for {query}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pokemons.length > 0 ? (
                        pokemons.map(pokemon => (
                            <PokeCard key={pokemon.id} pokemon={pokemon} />
                        ))
                        ) : ( // if no result show "no results" message
                        <p>No results found.</p>
                        )}
                    </div>
                </section>
            )}
        </section>
    )
}