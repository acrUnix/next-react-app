import { useEffect, useState} from "react"
import { number } from "zod"




export function usePokeById (id: number){


  const baseUrl = 'https://pokeapi.co/api/v2/pokemon'

  const initialState = [{
    name: '',
    order: 0,
    height: 0,
    weight: 0,
    criesUrl: ''
  }]
  
  const [pokdata,  setPokData] = useState(initialState)
  
  const getPokemon = ()=>{ 
    
    fetch(`${baseUrl}/${id}`)
    .then(response => response.json())
    .then(data => {
      console.log('datos en setpokeData: ', data)
      const {name, order, height, weight, sprites} = data
      const listInfo = [{
        name,
        order,
        height,
        weight,
        criesUrl: sprites.front_default
      }]
      setPokData(listInfo)
    })
  }

  useEffect(getPokemon,[id])

  return { pokdata }

}