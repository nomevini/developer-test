const {parseHuaweiOlt} = require('../services/parse')
const {upsertData} = require('../repositories/huaweiOltInsert')

const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({message: 'Nenhum arquivo foi enviado.'});
    }

    const data = parseHuaweiOlt(req.file.path)
    console.log(data)

    // salvar no banco
    const result = await upsertData(data)
    if (!result.success) {
      res.status(500).json({message: 'Erro interno do servidor. Não foi possível inserir os dados.'})
    }

    res.status(200).json({message: 'Arquivo recebido e processado com sucesso.'});
  
  } catch (error) {
    return res.status(500).send('Erro interno do servidor.');
  }
}

module.exports = {
  uploadFile
}