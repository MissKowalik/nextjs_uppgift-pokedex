import Image from "next/image";
import Searchbar from "@/components/SearchForm";
import PokeCard from "@/components/PokeCard";
import getPokemonById from "@/lib/data/Pokemon";

export default async function Home() {
  const pokemon = await getPokemonById(1);

  return (
    <main>
      {/* Hero */}
      <section className="flex flex-col items-center gap-4 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)] p-14">
        <h1 className="text-center mt-14 text-8xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">Gotta catch 'em all!</h1>
        <p className="text-center text-white text-xl">Discover, search and explore the amazing world of Pokémon. Find<br /> your favourite and learn about their stats.</p>
        <button className="btn-primary">
          <Image
            src="/Dice.svg"
            width={25}
            height={25}
            alt="Dice"
          />
          Random Pokémon</button>
      </section>

      {/* Search */}
      <section className="flex justify-center p-10">
        <Searchbar/>
      </section>

      {/* Featured */}
      <section className="flex flex-col items-center bg-indigo-50">
        <h2 className="text-3xl p-10">Featured Pokémon</h2>
        <PokeCard pokemon={pokemon}/>
      </section>
      
    </main>
  );
}
