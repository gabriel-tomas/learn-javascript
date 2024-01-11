import { Router } from 'express'; // eslint-disable-line
import imgController from '../controllers/ImgController';

const router = new Router();

router.post('/', imgController.create);

export default router;
