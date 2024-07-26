const {parseOlt} = require('../services/parses')
const {insertDataHuawei} = require('../repositories/huaweiOltInsert')
const { zteOltInsertType1, zteOltInsertType2 } = require('../repositories/zteOltInsert')
const { regexHuawei, regexZteType1, regexZteType2 } = require('../../../utils/regex')

const uploadFile = async (req, res) => {
  try {
    let result = undefined
    if(req.type == 1){
      const data = parseOlt(req.file.path, req.type, regexZteType1)
      result = await zteOltInsertType1(data)
    } else if (req.type == 2) {
      const data = parseOlt(req.file.path, req.type, regexZteType2)
      result = await zteOltInsertType2(data)
    } else {
      const data = parseOlt(req.file.path, req.type, regexHuawei)
      result = await insertDataHuawei(data)
    }  

    if (!result.success) {
      res.status(500).json({message: 'Erro interno do servidor. Não foi possível inserir os dados.'})
    }

    res.status(200).json({message: 'Arquivo processado com sucesso.'});
  
  } catch (error) {
    console.log(error)
    return res.status(500).send('Erro interno do servidor.');
  }
}

module.exports = {
  uploadFile
}