import { model } from "mongoose"
import { esquema_alumnos } from "./reprobados.model.js";

const modelo_apro = new model('aprobados', esquema_alumnos)

export { modelo_apro }