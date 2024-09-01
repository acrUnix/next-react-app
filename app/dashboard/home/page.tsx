'use client'

import CardUsers from "@/app/components/cardusers";
import Carrito from "@/app/components/carrito";
import { pokeApi } from "@/app/components/pokeApi";
import { useState, useEffect } from "react";
import { string } from "zod";

export default function HomePage() {

 const initialState = [{
    id: 0,
    name: '',
    url: ''
}]

    const [product, setProduct] = useState(0)
    const [pokeUrl, setPokeUrl] = useState(initialState)


useEffect(()=>{
      pokeApi()
      .then(data => setPokeUrl(data))
}, [])


    return(
        <main >
            <div className="flex w-full min-h-screen flex-col place-items-center gap-2 md:overflow-y-auto">
                
                <div className="w-full h-20">
                    <Carrito products={product}/>
                </div>
                
                 
                <div className="flex grid grid-cols-3 rounded-md p-1 gap-3 md:shadow-2xl md:overflow-auto">
                    {pokeUrl && pokeUrl.map((us) => {
                            return (
                                <div key={us.id}>
                                    <CardUsers
                                     name={us.name} url={us.url} id={us.id}
                                    />
                                </div>

                            )}
                    )}
                </div>
                 
            </div>
        </main>
    )
}