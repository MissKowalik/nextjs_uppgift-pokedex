import { PokeType } from "@/lib/types/PokeType";

export type PokemonListItem = { name: string; url: string };

export async function searchPokemon(query: string) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`);
  const data = await response.json();

  // Filter by substring match
  const matches = data.results.filter((p: { name: string }) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  // Fetch details for each match
  const detailed = await Promise.all(
    matches.map(async (p: PokemonListItem) => {
      const response = await fetch(p.url);
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
    })
  );

  return detailed;
}