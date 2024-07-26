const {sequelize}  = require('../../db/models');
const { Sequelize } = require('sequelize');

async function insertDataHuawei(data) {
  try {
    // Construa a string de valores para a query SQL
    const values = data.map(item => 
      `(${item.slot}, ${item.port}, '${item.ont_id}', '${item.sn}', '${item.state}', '${item.brand}', NOW(), NOW())`
    ).join(',');

    // Construa a query SQL
    const query = `
      INSERT INTO "OltDevices" ("slot", "port", "ont_id", "sn", "state", "brand", "createdAt", "updatedAt")
      VALUES ${values}
      ON CONFLICT ("sn")
      DO UPDATE SET
        "slot" = EXCLUDED."slot",
        "port" = EXCLUDED."port",
        "ont_id" = EXCLUDED."ont_id",
        "state" = EXCLUDED."state",
        "brand" = EXCLUDED."brand",
        "updatedAt" = NOW();
    `;

    // Execute a query com Sequelize
    await sequelize.query(query, { type: Sequelize.QueryTypes.RAW });

    console.log('Dados inseridos ou atualizados com sucesso.');
    return { success: true, message: 'Dados inseridos ou atualizados com sucesso.' };
  } catch (error) {
    console.error('Erro ao inserir ou atualizar dados:', error.message);
    return { success: false, message: 'Erro ao inserir ou atualizar dados: ' + error.message };
  }
}

module.exports = {
  insertDataHuawei
}