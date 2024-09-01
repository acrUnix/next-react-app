'use client'

import { InboxIcon } from "@heroicons/react/24/outline"
import { inter, lusitana } from "../ui/fonts"
import { useEffect } from "react"


export default function Carrito({products}:{products: number}){
/*  useEffect(()=>{

    }, [])*/
    

    return (
        
            <div className="flex w-full flex-col pl-3 md:flex-row">
                <div className="grid justify-items-center place-items-center">
                    <h1 className={`${inter.className}`}><strong className="text-3xl font-bold text-pink-700">Products</strong></h1>
                </div>
                
                    
                <div className="w-full grid justify-items-end place-items-center"> 
                    <div className="flex flex-col gap-4 rounded-md md:flex-row"> 
                        <InboxIcon className="w-6"/>
                        <p>{products}</p>
                        <p className={`${lusitana.className}`}>Carrito</p>
                    </div>
                </div>
               
                
            </div>
    )
}