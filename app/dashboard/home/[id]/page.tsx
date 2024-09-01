import { prisma } from "@/app/lib/prisma"
import Image from "next/image"

export default async function customerPage({params}:{params: {id: string}}) {
    const customer = await prisma.customers.findUnique({
        where: {
            id: params.id
        }  
    })

    return(
        <main className="flex flex-col items-center justify-center gap-y-5 pt-24 text-center">
            <Image
                   src={customer ? customer.image_url : 'sin imagen'} 
                   width={100}
                   height={100}
                   alt="imagen no disponible"
                   />
            <h1 className="text=3xl font-semibold">{customer?.name}</h1>
            <p>{customer?.email}</p>
        </main>
    )
}