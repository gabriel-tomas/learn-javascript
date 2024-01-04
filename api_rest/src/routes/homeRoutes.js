import homeController from '../controllers/HomeController';
import { Router } from 'express'; // eslint-disable-line
const router = new Router();

router.get('/', homeController.index);

export default router;
