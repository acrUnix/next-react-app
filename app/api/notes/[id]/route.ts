import { NextResponse } from "next/server";

export async function GET(){
return NextResponse.json({
    message: "obteniendo por id"
})
}

export async function DELETE(){
    return NextResponse.json({
        message: "borrando por id"
    })
}
export async function PUT(){
    return NextResponse.json({
        message: "actualizando por id"
    })
}
    