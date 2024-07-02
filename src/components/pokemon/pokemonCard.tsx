import { storeLocally } from "@/services/utils/Storage";

const PokemonCard = ({ image, name, details, pokemon }: { pokemon: any, image: any, name: string, details: any }) => {
    const savePokemon = (poke: any) => {
        storeLocally('pokemon' , poke)
    }
    return (
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 w-[100%]">
            <img src={image} alt={name} className="w-full h-48 rounded-md" />
            <h2 className="mt-[3rem] mb-[2rem] text-lg font-bold ">{name}</h2>
            <a onClick={() => { savePokemon(pokemon) }} href={details} className="text-blue-500 hover:underline mt-2">
                Details →
            </a>
        </div>
    );
};

export default PokemonCard