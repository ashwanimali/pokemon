"use client"
import Breadcrumb from "@/components/breadcrums/pokemonHeader";
import { useContextData } from "@/services/hooks";
import localApiClient from "@/services/localApiClient";
import { getFromLocalStorage } from "@/services/utils/Storage";
import { useEffect, useState } from "react";
export const PokemonPageWrapper = ({ name }: { name: any }) => {
  const [pokemonData, setPokemonData] = useState<any>({})

  useEffect(() => {
    const poke = getFromLocalStorage('pokemon')
    const data = {
      name: poke.name,
      type: poke.types.map((type: any) => type.type.name).join(', '),
      stats: poke.stats.map((stat: any) => stat.stat.name).join(', '),
      abilities: poke.abilities.map((ability: any) => ability.ability.name).join(', '),
      moves: poke.moves.slice(0, 5).map((move: any) => move.move.name).join(', '),
    }
    setPokemonData({
      ...poke,
      ...data
    })
  }, [setPokemonData])
  const contextData = useContextData();
  const items = [
    { label: 'Home', href: '/' },
    { label: pokemonData?.name?.charAt(0).toUpperCase() + pokemonData?.name?.slice(1), href: pokemonData?.name },
  ];

  if (pokemonData && Object.keys(pokemonData).length) {
    return (
      <main>
        <div className="bg-white mt-[2rem] ">
          <Breadcrumb items={items} />
          <div className="flex flex-row justify-center items-center sm:mx-[2rem]">
            <div className="flex flex-col w-[23rem] h-[35rem] items-center justify-center p-4 bg-white rounded-lg shadow-md">
              <img src={pokemonData.image} alt={name} className="w-full h-48 rounded-md" />

              <div className="mt-4 p-4 bg-yellow-100 rounded-lg">
                <p className="mb-2">Name: {pokemonData.name}</p>
                <p className="mb-2">Type: {pokemonData.type}</p>
                <p className="mb-2">
                  Stats: {pokemonData.stats}
                </p>
                <p className="mb-2">Abilities: {pokemonData.abilities}</p>
                <p className="mb-2">
                  Some Moves: {pokemonData.moves}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  } else {
    <></>
  }
};








