import Image from "next/image"
import { useState } from "react"
import { usePokeById } from "./pokeById"
import { number } from "zod"



export default function CardUsers({name, url, id}:{name: string, url: string, id: number}){

    const [isActive, setIsActive] = useState(false)
    const { pokdata } = usePokeById(id)

    const classname = isActive ? 'flex w-13 h-6 pt-1 items-center bg-pink-400 rounded-md text-xsm text-white hover:bg-pink-500' : 'flex w-13 h-6 pt-1 items-center bg-green-400 rounded-md text-xsm text-white  hover:bg-green-500'

    const handleClickPok = () => {
        setIsActive(!isActive)
    }


return (   
    <>
        <div className="flex md:flex-row md:w-80 md:h-80 rounded-md border border-1 p-2 gap-4 hover:shadow-lg hover:border-2">
          <section className="flex-none">
                <h1>{name}</h1>
                <Image 
                    src={url}
                    alt={"No se encontro la imagen"}
                    width={80}
                    height={80}
                />
          </section>
                

        
            {isActive ? (
                <>
                    <div className="flex bg-pink-200 rounded-md">
                        <ul>
                            {pokdata.map(dat => (
                                    
                                <li key={dat.order}>
                                    
                                    <h1>{dat.name}</h1>
                                    <p>Altura: {dat.height}</p>
                                    <p>Peso: {dat.weight}</p>
                                    <p>Orden: {dat.order}</p>
                                    
                                    <Image
                                src={dat.criesUrl}
                                alt={"No se encontro la imagen"}
                                width={70}
                                height={70}
                                /> 

                                </li>
                            ))}
                        </ul>
                    </div>
                </>
                ) : ''
            }

            <div className="flex">
                <button className={classname} onClick={handleClickPok}>
            {isActive ? 'Ocultar' : 'Ver detalles'}
            </button>
            </div>
            
            
            {/*<div className="flex items-center gap-4 p-2">
                <button className="flex mt-10 items-center h-5 font-medium text-black text-sm hover:text-pink-500" onClick={showPokemonDetail}>
                    Ver detalles
                </button>
                <button className="flex mt-10 items-center h-5 font-medium text-black text-sm hover:text-pink-500" onClick={ocultPokemonDetail}>
                    Ocultar detalles
                </button>
            </div> */}
            
        </div>
    </>
        
)
}