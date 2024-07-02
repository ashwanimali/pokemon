import apiClient from "../apiClient";
import { storeLocally } from "./Storage";



export const getPokemonsData = async (url: string) => {
    const uri = url?.split('/api')
    const responseBody = await apiClient.get(`/api${uri[1]}`)
    const returnData: any = []
    const results = responseBody.data.pokemon.slice(0, 5)
    const pokemonArray: any = results.map((item: any) => ({
        name: item.pokemon.name,
        url: item.pokemon.url
    }));

    for (var i = 0; i < pokemonArray.length; i++) {
        const result = pokemonArray[i]
        const resData = await apiClient.get(result.url)
        const respData = {
            ...result,
            ...resData.data,
            image: resData.data.sprites.other["official-artwork"].front_default,
            name: resData.data.name,
            details: '/' + resData.data.name,
        }
        returnData.push(respData)
    }
    return returnData
}

export const getTypes = async () => {
    const responseBody = await apiClient.get(`/api/v2/type`)
    const results = responseBody.data.results
    storeLocally('typesData', results)
    return results
}