import userController from '../controllers/UserController';
import { Router } from 'express'; // eslint-disable-line

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', userController.create);
router.get('/', loginRequired, userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;

/*
index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATCH ou PUT
*/
