import { Router } from 'express'; // eslint-disable-line
import imgController from '../controllers/ImgController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, imgController.create);

export default router;
