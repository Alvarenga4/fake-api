const company = require('../json/company.json');

module.exports = {
  async show(req, res) {
    try {

      return res.status(200).json(company);

    } catch (err) {
      console.log(err);

      return res.status(500).json({ error: 'Internal Server Error' })
    }
  }
}