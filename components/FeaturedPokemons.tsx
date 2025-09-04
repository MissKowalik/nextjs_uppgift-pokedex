import PokeCard from "./PokeCard"
import getRandomPokemons from "./RandomPokemons";

export default async function FeaturedPokemons() {
    const pokemons = await getRandomPokemons(4);

    // filter out any undefined pokemon before rendering
    const filteredPokemons = pokemons.filter((pokemon) => pokemon !== undefined);

    return (
        <section className="flex flex-col items-center bg-indigo-100 pb-16">
            <h2 className="text-3xl p-10">Featured Pokémon</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredPokemons.map((pokemon) => (
                    <PokeCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </section>
    )
}