import getPokemonById from "@/lib/data/Pokemon";

export default async function getRandomPokemons(count: number = 4) {
  const randomIds = Array.from({ length: count }, () =>
    Math.floor(Math.random() * 1025) + 1 // mellan 1–1025
  );
  return Promise.all(randomIds.map((id) => getPokemonById(id)));
}