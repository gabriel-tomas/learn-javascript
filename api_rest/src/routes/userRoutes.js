import userController from '../controllers/UserController';
import { Router } from 'express'; // eslint-disable-line
const router = new Router();

router.post('/', userController.create);

export default router;

/*
index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATCH ou PUT
*/
