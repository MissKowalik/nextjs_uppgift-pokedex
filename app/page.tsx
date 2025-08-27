import Hero from "@/components/HeroHome";
import SearchForm from "@/components/SearchForm";
import FeaturedPokemons from "@/components/FeaturedPokemons";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <Hero/>

      {/* Searchform component */}
      <SearchForm/>

      {/* Featured */}
      <FeaturedPokemons/>
      
    </main>
  );
}