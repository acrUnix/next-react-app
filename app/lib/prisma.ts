import {PrismaClient} from '@prisma/client'

const prismaClientConnect = ()=>{
    return new PrismaClient()
}

declare const globalThis:{
    prismaGlobal: ReturnType<typeof prismaClientConnect>;
} & typeof global;

export const prisma = globalThis.prismaGlobal ?? prismaClientConnect();

if(process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;

