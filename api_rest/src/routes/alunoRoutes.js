import alunoController from '../controllers/AlunoController';
import { Router } from 'express'; // eslint-disable-line
const router = new Router();

router.get('/', alunoController.index);

export default router;
