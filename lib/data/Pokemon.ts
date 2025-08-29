import { PokeType } from "../types/PokeType";
import { PokemonListItem } from "@/components/Search/SearchPokemon";
import { Pokemon } from "../interfaces/Pokemon";


export default async function getPokemonById(id: number) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        
        return {
            id: data.id,
            name: data.name,
            image: data.sprites.other["official-artwork"].front_default,
            types: data.types.map((t: PokeType) => t.type.name),
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
        };
}

export async function pokeProps(id: number) {
    const pokemon = await getPokemonById(id);
    return {props: {pokemon} };
}


export async function getAllPokemons(): Promise<Pokemon[]> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  const data = await res.json();

  const results = await Promise.all(
    data.results.map(async (p: PokemonListItem) => {
      const detailsRes = await fetch(p.url);
      const details = await detailsRes.json();

      return {
        id: details.id,
        name: details.name,
        image: details.sprites.other["official-artwork"].front_default,
        types: details.types.map((t: PokeType) => t.type.name),
        hp: details.stats[0].base_stat,
        attack: details.stats[1].base_stat,
        defense: details.stats[2].base_stat,
      };
    })
  );


  return results;
}