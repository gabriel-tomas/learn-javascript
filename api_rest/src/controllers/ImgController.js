import multer from 'multer';
import multerConfig from '../config/multerConfig';

import Foto from '../models/Foto';

const upload = multer(multerConfig).single('image');

class ImgController {
  create(req, res) {
    return upload(req, res, async (err) => {
      try {
        if (err) {
          return res.status(400).json({
            errors: [err.code],
          });
        }

        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;

        const foto = await Foto.create({ originalname, filename, aluno_id });

        return res.json(foto);
      } catch (e) {
        return res.status(400).json({
          errors: ['id inválido', e],
        });
      }
    });
  }
}

export default new ImgController();
