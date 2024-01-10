import userController from '../controllers/UserController';
import { Router } from 'express'; // eslint-disable-line

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não pode existir
// router.get('/', userController.index);
// router.get('/:id', userController.show);

router.post('/', userController.create);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATCH ou PUT
*/
