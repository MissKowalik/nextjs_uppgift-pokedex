"use client"  // tells Next.js that this is a "client component" and means this code runs in the browser (and can use hooks like useState).

import Image from "next/image";
import getRandomPokemons from "./RandomPokemons";
import PokeCard from "./PokeCard";
import { useState } from "react";
import type { Pokemon } from "@/lib/interfaces/Pokemon";


export default function Hero() {
    // State variable to store the current random Pokémon.
    // - "randomPokemon" holds the current Pokémon (or null if none yet).
    // - "setRandomPokemon" is the function to update it.
    const [randomPokemon, setRandomPokemon] = useState<Pokemon | null>(null);

    // Function that fetches one random Pokémon and saves it to state
    async function showRandomPokemon() {
        const pokemons = await getRandomPokemons(1);  // getRandomPokemons(1) asks for 1 Pokémon -> returns an array with one item.
        setRandomPokemon(pokemons[0]);  // Take the first Pokémon from the array and store it in randomPokemon state.
    }

    return (
        <section className="flex flex-col items-center gap-4 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)] p-14">
            <h1 className="text-center mt-14 text-8xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">Gotta catch 'em all!</h1>
            <p className="text-center text-white text-xl">Discover, search and explore the amazing world of Pokémon. Find<br /> your favourite and learn about their stats.</p>
            
            {/* Button that fetches a random Pokémon when clicked */}
            <button onClick={showRandomPokemon} className="btn-primary">
            <Image
                src="/Dice.svg"
                width={25}
                height={25}
                alt="Dice"
            />
            Random Pokémon</button>

            {/* If "randomPokemon" exists (not null), show the Pokémon card */}
            {randomPokemon && (
                <section className="flex justify-center">
                <PokeCard pokemon={randomPokemon} />
                </section>
            )}
            </section>
    );
}