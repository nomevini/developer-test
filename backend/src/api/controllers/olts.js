const {OltDevice}  = require('../../db/models');

const getOlts = async (req, res) => {
  try {
    const data = await OltDevice.findAll({attributes: ['slot', 'port', 'ont_id', 'sn', 'state', 'brand']});
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({message: 'Erro interno do servidor'})
  }
}

module.exports = {
  getOlts
}