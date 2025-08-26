import Image from "next/image";
import { Pokemon } from "@/lib/interfaces/Pokemon";

export default function PokeCard( {pokemon}: {pokemon: Pokemon} ) {
    return (
        <div className="flex flex-col items-center bg-blue-50 border-indigo-500 border-4 rounded-lg w-50 pt-6 pb-2 mb-16">
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
                {pokemon.types.map((type: string, idx: number) => (
                <span
                    key={idx}
                    className={`px-2 rounded-full text-white text-sm capitalize 
                    ${type === "grass" && "bg-green-500"}
                    ${type === "fire" && "bg-orange-600"}
                    ${type === "water" && "bg-blue-500"}
                    ${type === "electric" && "bg-yellow-400"}
                    ${type === "bug" && "bg-lime-600"}
                    ${type === "poison" && "bg-fuchsia-800"}
                    ${type === "flying" && "bg-indigo-400"}
                    ${type === "normal" && "bg-gray-400"}
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