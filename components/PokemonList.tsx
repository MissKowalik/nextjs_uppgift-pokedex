import { getAllPokemons } from "@/lib/data/Pokemon";
import PokeCard from "./PokeCard";
import { searchPokemon } from "./Search/SearchPokemon";

export default async function PokemonList({limit, skip, searchTerm}: {limit?: number; skip?: number; searchTerm?: string}) {

    const pokemons = searchTerm ? await searchPokemon(searchTerm) : await getAllPokemons(limit, skip);

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-8">
            {pokemons.length === 0 ? (
                <p className="col-span-full text-center text-gray-700">No Pokémon found.</p>
            ) : (
                pokemons.map((pokemon) => <PokeCard key={pokemon.id} pokemon={pokemon} />)
            )}
        </div>
    );
}