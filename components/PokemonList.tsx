import { getAllPokemons } from "@/lib/data/Pokemon";
import PokeCard from "./PokeCard";

export default async function PokemonList({limit, skip}: {limit?: number; skip?: number}) {
    const pokemons = await getAllPokemons(limit, skip);

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-8">
            {pokemons.map((pokemon) => (
                <PokeCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
    )
}