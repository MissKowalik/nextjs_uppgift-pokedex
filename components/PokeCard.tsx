import Image from "next/image";
import { Pokemon } from "@/lib/interfaces/Pokemon";

export default function PokeCard( {pokemon}: {pokemon: Pokemon} ) {
    return (
        <div className="flex flex-col items-center bg-indigo-50 border-indigo-500 border-4 rounded-lg w-50 pt-6 pb-2 mb-16">
            <Image 
                src={pokemon.image}
                alt={`Picture of ${pokemon.name}`}
                width={80}
                height={80}
                className="border-3 border-black rounded-full m-1"
            />
            <p>#{pokemon.id}</p>
            <h3 className="text-2xl capitalize">{pokemon.name}</h3>


            {/* Types */}
            <div className="flex gap-2">
                {pokemon.types.map((type: string, index: number) => (
                <span
                    key={index}
                    className={`px-2 rounded-full text-white text-sm capitalize 
                    ${type === "bug" && "bg-lime-500"}
                    ${type === "dark" && "bg-zinc-500"}
                    ${type === "dragon" && "bg-indigo-400"}
                    ${type === "electric" && "bg-yellow-400"}
                    ${type === "fairy" && "bg-pink-300"}
                    ${type === "fighting" && "bg-red-500"}
                    ${type === "fire" && "bg-orange-500"}
                    ${type === "flying" && "bg-sky-400"}
                    ${type === "ghost" && "bg-violet-500"}
                    ${type === "grass" && "bg-green-500"}
                    ${type === "ground" && "bg-amber-600"}
                    ${type === "ice" && "bg-cyan-300"}
                    ${type === "normal" && "bg-stone-400"}
                    ${type === "poison" && "bg-fuchsia-500"}
                    ${type === "psychic" && "bg-pink-400"}
                    ${type === "rock" && "bg-stone-500"}
                    ${type === "steel" && "bg-slate-400"}
                    ${type === "stellar" && "bg-emerald-400"}
                    ${type === "unknown" && "bg-teal-400"}
                    ${type === "water" && "bg-blue-400"}
                    `}
                >
                    {type}
                </span>
                ))}
            </div>

            {/* Stats */}
            <ul className="w-50 px-4 font-semibold">
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
            </ul>
        </div>
    );
}