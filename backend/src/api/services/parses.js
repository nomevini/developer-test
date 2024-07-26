const fs = require('fs')

const parseOlt = (filePath, type, regex) => {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const lines = fileContent.split('\n');
  const data = [];

  lines.map((line) => { 
    const info = line.match(regex);

    if (info) {
      const informations = {
        ...info.groups,
        brand: type == 1 || type == 2 ? 'zte' : 'huawei'
      };
      data.push(informations);
    }
  })

  return data;
}

module.exports = {
  parseOlt
}