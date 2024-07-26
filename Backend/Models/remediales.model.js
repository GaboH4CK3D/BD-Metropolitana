import { Schema, model  } from 'mongoose'

 const esquema_remediales = new Schema({
    nombre:{
        type:String
    },
    materia:{
        type:String
    },
    carrera:{
        type:String
    },
    estatus:{
        type:String
    }
})
const modelo_reme = new model('remediales', esquema_remediales)

export { modelo_reme }
