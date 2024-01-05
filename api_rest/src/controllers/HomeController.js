import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Maria',
      sobrenome: 'Oliveira',
      email: 'maria@gmail.com',
      idade: 23,
      peso: 52.76,
      altura: 1.86,
    });
    res.json({
      novoAluno,
    });
  }
}

export default new HomeController();
