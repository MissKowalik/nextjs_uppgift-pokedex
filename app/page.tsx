import Hero from "@/components/HeroHome";
import SearchBar from "@/components/Search/SearchBar";
import FeaturedPokemons from "@/components/FeaturedPokemons";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <Hero/>

      {/* Searchform component */}
      <SearchBar/>

      {/* Featured */}
      <FeaturedPokemons/>
      
    </main>
  );
}