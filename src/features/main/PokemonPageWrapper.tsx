
"use client"
import PokemonCard from "@/components/pokemon/pokemonCard";
import { getFromLocalStorage, storeLocally } from "@/services/utils/Storage";
import { getPokemonsData, getTypes } from "@/services/utils/functions";
import { useEffect, useState } from "react";
export const HomeWrapper = () => {
  const [pokemonsUrl, setPokemonsUrl] = useState<any>()
  const [pokemons, setPokemons] = useState<any>([])
  const [filteredData, setFilteredData] = useState<any>([])
  const [types, setTypes] = useState<any>([])
  const [selectedType, setSelectedType] = useState("");

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = event.target.selectedIndex;
    const selectedType = types[selectedIndex];
    setPokemonsUrl(selectedType.url);
    setSelectedType(selectedType.name)
    // Example of storing locally (you can adjust as per your storage method)
    localStorage.setItem("type", selectedType.name);
    localStorage.setItem("typeUrl", selectedType.url);
  };

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: any) => {
    const { value } = event.target;
    setSearchQuery(value);

    // Filter the data array based on the search query
    const filteredData = pokemons.filter((item: any) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredData(filteredData);
  };

  useEffect(() => {
    getTypes().then((typesData: any) => {
      setTypes(typesData)
      const typeUrl = localStorage.getItem("typeUrl")
      const type = localStorage.getItem("type")
      if (type) {
        setSelectedType(type)
      }
      if (typeUrl) {
        setPokemonsUrl(typeUrl)

      } else {
        setPokemonsUrl(typesData[0]?.url)
      }
    })
  }, [setPokemons, setTypes])

  useEffect(() => {
    if (pokemonsUrl) {
      getPokemonsData(pokemonsUrl).then(async (data) => {
        setPokemons(data)
        setFilteredData(data)
      }).catch((err: any) => {
        console.log(err)
      })
    }
  }, [pokemonsUrl])
  if (pokemons)
    return (
      <main>
        <div className="p-4 md:w-[40%]">
          <select
            value={selectedType} // Set value attribute to the selectedType state
            onChange={handleTypeChange}
            className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          >
            {types.map((type: any, index: number) => (
              <option key={index} value={type.name}>
                {type.name}
              </option>
            ))}
          </select>
          <div className="mt-2 rounded w-full flex items-center">
            <div className="relative w-full">
              <input
                type="text"
                className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <svg
                className="w-5 h-5 text-gray-500 absolute left-3 top-2.5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.9 14.32a8 8 0 111.41-1.41l4.95 4.95a1 1 0 01-1.42 1.42l-4.94-4.96zM8 14a6 6 0 100-12 6 6 0 000 12z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <button className="ml-4 px-4 py-2 text-white bg-blue-950 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Search
            </button>
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 sm:items-center place-items-center">
          {filteredData.map((p: any, index: number) => (
            <div key={index} className="flex h-[25rem] max-w-[25rem] flex-shrink-0 w-[80%]  p-4 bg-gray-100 rounded-lg shadow-md m-4 ">
              <PokemonCard pokemon={p} image={p.image} name={p.name} details={p.details} />
            </div>
          ))}
        </div>
      </main>
    );
}


