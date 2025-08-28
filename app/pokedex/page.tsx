import Image from "next/image";
import { getAllPokemons } from "@/lib/data/Pokemon";
import PokeCard from "@/components/PokeCard";


export default async function PokedexPage() {
    const pokemons = await getAllPokemons();

    return (
        <section className="flex flex-col items-center bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)]">
            <h1 className="text-center p-6 text-6xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">Pokedex</h1>
        
            <div className="flex items-align justify-between w-150 shadow-md/25  rounded-md p-3 bg-white">
            
                <input 
                    name="query"
                    placeholder="Search for a Pokémon..." 
                    className="w-full focus:outline-none "
                />

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

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-8">
                {pokemons.map((pokemon) => (
                    <PokeCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </section>
    )
}