import getPokemonById from "@/lib/data/Pokemon";
import { Pokemon } from "@/lib/interfaces/Pokemon";
import { notFound } from "next/navigation";
import Image from "next/image";

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
            <h1 className="text-center p-6 text-6xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]"><span className="capitalize">{pokemon.name}</span> #{pokemon.id}</h1>
            
            {/* Common container for both rows with max width */}
            <div className="w-full max-w-xl">

                {/* Row 1: Image and Stats, full width */}
                <div className="flex gap-4 mb-4 w-full">
                <Image
                    src={pokemon.image}
                    alt={`Image of ${pokemon.name}`}
                    width={300}
                    height={300}
                    className="bg-white rounded-2xl shadow-xl p-4 flex-shrink-0"
                />

                {/* Stat card takes remaining space */}
                <section className="bg-white rounded-2xl shadow-xl p-8 flex-1">
                    <h2 className="text-3xl pb-2">Stats</h2>
                    <ul className="font-semibold flex flex-col gap-2">
                    <li className="flex justify-between">
                        <span>HP</span>
                        <span>{pokemon.hp}</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Attack</span>
                        <span>{pokemon.attack}</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Defense</span>
                        <span>{pokemon.defense}</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Special-Attack</span>
                        <span>65</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Special-Defense</span>
                        <span>65</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Speed</span>
                        <span>45</span>
                    </li>
                    </ul>
                </section>
                </div>

                {/* Row 2: Types, Abilities, Biometrics */}
                <div className="flex gap-4 mb-4 w-full">
                <section className="bg-white rounded-2xl shadow-xl p-8 flex-1">
                    <h2 className="text-3xl pb-2">Types</h2>
                    <ul className="font-semibold flex flex-col gap-2">
                    {pokemon.types.map((type: string, index: number) => (
                        <li key={index} className="flex gap-8 justify-between capitalize">
                        {type}
                        </li>
                    ))}
                    </ul>
                </section>

                <section className="bg-white rounded-2xl shadow-xl p-8 flex-1">
                    <h2 className="text-3xl pb-2">Abilities</h2>
                    <ul className="font-semibold flex flex-col gap-2">
                    <li className="flex gap-8 justify-between">
                        <span>Overgrow</span>
                        <span>normal</span>
                    </li>
                    <li className="flex gap-8 justify-between">
                        <span>Chlorophyll</span>
                        <span>hidden</span>
                    </li>
                    </ul>
                </section>

                <section className="bg-white rounded-2xl shadow-xl p-8 flex-1">
                    <h2 className="text-3xl pb-2">Biometrics</h2>
                    <ul className="font-semibold flex flex-col gap-2">
                    <li className="flex gap-8 justify-between">
                        <span>Weight</span>
                        <span>69</span>
                    </li>
                    <li className="flex gap-8 justify-between">
                        <span>Height</span>
                        <span>7</span>
                    </li>
                    </ul>
                </section>
                </div>
            </div>
        </section>
    )
}