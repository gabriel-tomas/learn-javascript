import Aluno from '../models/Aluno';
import Foto from '../models/Foto';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
      include: {
        model: Foto,
        attributes: ['url', 'originalname', 'filename'],
      },
    });
    res.json({ alunos });
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) return res.status(400).json({ errors: ['ID missing'] });

      const aluno = await Aluno.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['url', 'originalname', 'filename'],
        },
      });

      if (!aluno) return res.status(400).json({ errors: ['Aluno não existe'] });

      return res.json(aluno);
    } catch (e) {
      return res.status(401).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async create(req, res) {
    try {
      const aluno = await Aluno.create(req.body);

      return res.json({
        alunoCreated: [aluno],
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) return res.status(400).json({ errors: ['ID missing'] });

      const aluno = await Aluno.findByPk(id);

      if (!aluno) return res.status(400).json({ errors: ['Aluno não existe'] });

      const novoAluno = await aluno.update(req.body);

      return res.json({
        alunoUpdated: [novoAluno],
      });
    } catch (e) {
      return res.status(401).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) return res.status(400).json({ errors: ['ID missing'] });

      const aluno = await Aluno.findByPk(id);

      if (!aluno) return res.status(400).json({ errors: ['Aluno não existe'] });

      const alunoDeleted = await aluno.destroy();
      return res.json({
        alunoDeleted: [alunoDeleted],
      });
    } catch (e) {
      return res.status(401).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new AlunoController();
