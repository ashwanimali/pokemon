"use client";

import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  getFromLocalStorage,
  storeLocally,
} from "./utils/Storage";


export const ContextData = createContext<any | undefined>(undefined);

const STORE_KEY = "STORE_KEY";

export const ContextDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [pokemon, setPokemon] = useState<any>({});


  // Load data from local storage on component mount
  useEffect(() => {
    const parsedData = getFromLocalStorage(STORE_KEY);
    if (parsedData) {

      setPokemons(parsedData.pokemons || []);
      setPokemon(parsedData.pokemon || {});
    }
  }, []);

  const setPokemonsData = useCallback(
    (value: any) => {
      const parsedData = getFromLocalStorage(STORE_KEY);
      if (parsedData) {
        const dataToStore = {
          ...parsedData,
          pokemons: value,
        };
        setPokemons(value || []);
        storeLocally(STORE_KEY, dataToStore);
      }
    },
    [setPokemons]
  );

  const setPokemonData = useCallback(
    (value: any) => {
      const parsedData = getFromLocalStorage(STORE_KEY);
      if (parsedData) {
        const dataToStore = {
          ...parsedData,
          pokemon: value,
        };
        setPokemon(value || []);
        storeLocally(STORE_KEY, dataToStore);
      }
    },
    [setPokemon]
  );

  // We memoize the value to avoid re-rendering the context provider
  const contextValue = useMemo<any>(
    (): any => ({
      setPokemonsData,
      setPokemonData,
      pokemon,
      pokemons
    }),
    [
      setPokemon,
      setPokemons,
      pokemon,
      pokemons
    ]
  );
  return (
    <ContextData.Provider value={contextValue}>
      {children}
    </ContextData.Provider>
  );
};
