import Image from "next/image";
import Link from "next/link";
import PokemonList from "@/components/PokemonList";


export default async function PokedexPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const { limit, page } = await searchParams;
    const currentPage = Number(page) || 1;
    const pageLimit = Number(limit) || 15;
    const skip = (currentPage - 1) * pageLimit;

    return (
        <section className="flex flex-col items-center bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)]">
            <h1 className="text-center p-6 text-6xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">Pokedex</h1>
        
            {/* Search */}
            <div className="flex items-align justify-between w-150 shadow-md/25  rounded-md p-3 mb-6 bg-white">
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

            {/* Page navigation buttons */}
            <div className="flex gap-4 text-xl">
                <Link href={`?page=${currentPage - 1}`} className="border rounded-lg px-2 bg-white shadow-md/25">Previous</Link>
                <Link href={`?page=${currentPage + 1}`} className="border rounded-lg px-2 bg-white shadow-md/25">Next</Link>
            </div>

            <PokemonList limit={pageLimit} skip={skip}/>
        </section>
    )
}