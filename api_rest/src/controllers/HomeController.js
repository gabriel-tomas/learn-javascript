class HomeController {
  index(req, res) {
    res.json({
      Key: 'Value',
    });
  }
}

export default new HomeController();
