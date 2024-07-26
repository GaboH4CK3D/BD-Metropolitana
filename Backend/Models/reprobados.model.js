import {Schema, model} from "mongoose"

export const esquema_alumnos = new Schema({
    nombre:{
        type:String
    },
    ape_pat:{
        type:String
    },
    ape_mat:{
        type:String
    },
    promedio:{
        type:Number
    }
})

const modelo_rep = new model('reprobados', esquema_alumnos)



export { modelo_rep }
