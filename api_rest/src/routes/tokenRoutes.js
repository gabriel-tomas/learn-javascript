import tokenController from '../controllers/TokenController';
import { Router } from 'express'; // eslint-disable-line
const router = new Router();

router.post('/', tokenController.create);

export default router;
