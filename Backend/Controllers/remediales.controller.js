import { modelo_reme } from "../Models/remediales.model.js"

const test_reme = (()=>{
    console.log("Controles si")
})

modelo_reme.create({
    nombre:"Jose Juan Perez Lopez",
    materia:"Quimica",
    carrera:"Nanotecnologia",
    estatus:"No pagado" 
})

export { test_reme}