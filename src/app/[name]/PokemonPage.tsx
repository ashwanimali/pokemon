"use client";
import { PokemonPageWrapper } from "@/features/pokemon/PokemonPageWrapper";


export const PokemonPage = ({pokemonName}:{pokemonName:any}) => {
  return (
    < PokemonPageWrapper name={pokemonName}/>
  )
}