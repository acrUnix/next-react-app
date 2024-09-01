
export const pokeApi = async () => {

    
    const baseUrl = 'https://pokeapi.co/api/v2/'

    type urls = {
        url: string
    }

    const datosPoke = await fetch(`${baseUrl}pokemon?limit=20&offset=0`)
    const data = await datosPoke.json()

    const imgUrl = data.results.map(async (pokemon: urls ) => {
        const pokeImg = await fetch(pokemon.url)
        const data = await pokeImg.json()
        return data
})

   const promises = await Promise.all(imgUrl)
   console.log('datos en: ', promises)
   const newList = promises.map(pok => {
   return {
    id: pok.id,
    name: pok.name,
    url: pok.sprites.front_default,
    abilities: pok.abilities[0].ability.name
    }
    
   })

   return newList

 }