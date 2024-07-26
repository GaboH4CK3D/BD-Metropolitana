import { modelo_rep } from "../Models/reprobados.model.js"

export const test_rep = (()=>{
    console.log("Controles si")
})

modelo_rep.create({
    nombre:"Jose Alvaro",
    ape_pat:"Esparza",
    ape_mat:"Lopez",
    promedio:7.9
})