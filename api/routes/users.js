import express from "express";
import { getUsers,addUser,updateUser,deleUser } from "../controllers/user.js";

//CRIO UMA CONSTANTE PARA INDICAR A ROTA:
const router = express.Router();

//ATRIBUO PARA A ROTA /USERS O MÉTODO GET, QUE RETORNA TODOS OS USUÁRIOS
router.get("/", getUsers);
router.post("/", addUser);
router.put("/:id", updateUser);
router.delete("/:id", deleUser);


//EXPORTO ELA POR PADRÃO
export default router;