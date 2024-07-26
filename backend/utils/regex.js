const regexZteType1 = /^(?:gpon-onu_)((?<slot>\d)\/(?<port>\d)\/(\d):(?<ont_id>\d+))\s+([A-Za-z0-9\-_\s\W]+)\s+(?:sn)\s+(?:SN:)(?<sn>[a-zA-Z0-9]+)/
// gpon-onu_1/1/1:1    EG-8010H    sn      SN:HWTCDAFD889B         ready

const regexZteType2 = /(?:(?<slot>\d)\/(?<port>\d)\/(\d):(?<ont_id>\d+))\s+[a-z]+\s+[a-z]+\s+(?<state>[a-zA-Z]+).*$/
// 1/1/1:1     enable       disable     OffLine      1(GPON) 

const regexHuawei = /\d\/\s+(?<slot>\d)\/(?<port>\d)\s+(?<ont_id>\d+)\s+(?<sn>[a-zA-Z0-9]+)\s+(?:[a-z]+)\s+(?<state>[a-z]+)/;
// huawei -  0/ 3/6    0  444753542140AF37  active      offline   normal   match    no

const string = '1/1/1:1     enable       disable     OffLine      1(GPON)'


module.exports = {
  regexHuawei,
  regexZteType1,
  regexZteType2
}