import multer from 'multer';
import { Router } from 'express'; // eslint-disable-line
import imgController from '../controllers/ImgController';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig);

const router = new Router();

router.post('/', upload.single('image'), imgController.create);

export default router;
