const fs = require('fs')
const {regexZteType1, regexZteType2, regexHuawei} = require('../../../utils/regex')

const verifyUpload = (req, res, next) => {
  try {
    
    if (!req.file) {
      return res.status(400).json({message: 'Nenhum arquivo foi enviado.'});
    }

    const fileContent = fs.readFileSync(req.file.path, 'utf-8');
    const lines = fileContent.split('\n');
    let flagTypeArchive = 0;
    
    for (const line in lines) {
      if (lines[line].match(regexZteType1)) { 
        req.type = 1
        flagTypeArchive = 1;
        req.brand = 'zte'
        break
      }else if (lines[line].match(regexZteType2)) {
        req.type = 2
        flagTypeArchive = 1;
        req.brand = 'zte'
        break
      } else if (lines[line].match(regexHuawei)) {
        req.type = 3
        req.brand = 'huawei'
        flagTypeArchive = 1;
        break
      }
    }
    
    if(!flagTypeArchive){
      return res.status(400).json({message: "Arquivo enviado não condiz com o padrão esperado"})
    }

    next()

  } catch (error) {
    console.log(error)
    res.status(400).json({message: 'Erro na abertura do arquivo'})
  }
}
module.exports = {
  verifyUpload
}