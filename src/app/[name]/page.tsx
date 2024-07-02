
import { PokemonPage } from "./PokemonPage";

async function Page({ params, env }: { params: { pokemonName: string }, env: any }) {
  return <PokemonPage pokemonName={params} />;
}
export default Page;

// export default Page;
