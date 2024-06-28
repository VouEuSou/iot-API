import { Router } from "express"
import { usuarioAlteraSenha, usuarioForgotPass, usuarioCreate, usuarioIndex } from "./controllers/usuarioController.js"
import { loginUsuario } from "./controllers/loginController.js"
import { pacoteIndex, pacoteCreate, pacoteDestroy, pacoteFind, pacoteUpdate, calcularDistancia} from "./controllers/pacoteController.js"
import { verificaLogin } from "./middlewares/verificaLogin.js"



const router = Router()

router.get('/alarme', usuarioIndex)

export default router