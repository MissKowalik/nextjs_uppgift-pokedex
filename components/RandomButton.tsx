"use client"  // tells Next.js that this is a "client component" and means this code runs in the browser (and can use hooks like useState).

import Image from "next/image";
import getRandomPokemons from "./RandomPokemons";
import PokeCard from "./PokeCard";
import { useState } from "react";
import type { Pokemon } from "@/lib/interfaces/Pokemon";


export default function RandomButton() {
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
        <>
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
        </>
    );
}