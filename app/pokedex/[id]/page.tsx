import PokeCard from "@/components/PokeCard";
import getPokemonById from "@/lib/data/Pokemon";
import { Pokemon } from "@/lib/interfaces/Pokemon";
import { notFound } from "next/navigation";

export default async function PokemonDetailPage({
    params,
}: {
    params: Promise<{id: number}>;
}) {
    const {id} = await params;

    const pokemon: Pokemon | undefined = await getPokemonById(id);

    // Check if the pokemon object exists and has an id property.
    // If it doesn't, this means the Pokemon wasn't found, so show 404 page using Next.js
    if (!pokemon?.id) return notFound();

    return (
        <section className="flex flex-col items-center pb-12 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)]">
            <h1 className="text-center p-6 text-6xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">Details about <span className="capitalize">{pokemon.name}</span></h1>
            <PokeCard pokemon={pokemon}/>
        </section>
    )
}