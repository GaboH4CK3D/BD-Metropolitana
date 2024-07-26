import { modelo_apro } from "../Models/aprobados.model.js"

export const test_apro = (()=>{
    console.log("Controles si")
})

modelo_apro.create({
    nombre:"Alan Gabriel",
    ape_pat:"Saldaña",
    ape_mat:"Guerrero",
    promedio:8
})

