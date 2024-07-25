const fs = require('fs')

const parseHuaweiOlt = (filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const lines = fileContent.split('\n');
  const data = [];

  lines.map((line) => {
    const regex = /\d\/\s+(?<slot>\d)\/(?<port>\d)\s+(?<ont_id>\d+)\s+(?<sn>[a-zA-Z0-9]+)\s+(?:[a-z]+)\s+(?<state>[a-z]+)/; 
    const info = line.match(regex);

    if (info) {
      const informations = {
        ...info.groups,
        brand: 'huawei'
      };
      data.push(informations);
    }
  })

  return data;
}

module.exports = {
  parseHuaweiOlt
}