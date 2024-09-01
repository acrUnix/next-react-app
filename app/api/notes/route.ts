import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import {z} from 'zod';

const schemaUser = z.object({
    email: z.string().email(),
    name: z.string()
})

export async function GET(){
    const users = await prisma.user.findMany();
    console.log('usuarios encontrados: ', users);
return NextResponse.json(users)
}


export async function POST(request: Request){
    const body = await request.json();
    const parsedFields = schemaUser.safeParse({
        email: body.email,
        name: body.name
    })

try{
if (parsedFields.success){
    const {email, name} = parsedFields.data;
    const newUser = await prisma.user.create({
        data: {
            email,
            name
        }
    })
    console.log('usuario creado: ', newUser)
return NextResponse.json(newUser)
}
}catch(error){
console.log('Ha ocurrido un error', error)
}

}