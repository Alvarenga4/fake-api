module.exports = {
  async show(req, res) {
    try {
      const { providerslug, contractcode } = req.headers;

      if (!providerslug || !contractcode) return res.status(404).json({ error: 'providerSlug or contractCode is empty' });

      const company = {
        "companyId": 1,
        "compayName": "Empresa do seu zé",
        "companyGroupId": 22,
        "over": 4,
        "tax": 6,
        "taxInstallment": 11
      };

      return res.status(200).json(company);

    } catch (err) {
      console.log(err);

      return res.status(500).json({ error: 'Internal Server Error' })
    }
  }
}