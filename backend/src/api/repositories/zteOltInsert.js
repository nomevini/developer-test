const {sequelize}  = require('../../db/models');
const { Sequelize } = require('sequelize');

async function zteOltInsertType1(data) {
  try {

    const values = data.map(item => 
      `(${item.slot}, ${item.port}, ${item.ont_id}, '${item.sn}', '${item.brand}', NOW(), NOW())`
    ).join(',');
    
    const query = `
      INSERT INTO "OltDevices" ("slot", "port", "ont_id", "sn", "brand", "createdAt", "updatedAt")
      VALUES ${values}
      ON CONFLICT ("slot", "port", "ont_id", "brand")
      DO UPDATE SET
        "sn" = EXCLUDED."sn",
        "updatedAt" = NOW();
    `;
    
    await sequelize.query(query, { type: Sequelize.QueryTypes.RAW });

    console.log('Dados inseridos ou atualizados com sucesso.');
    return { success: true, message: 'Dados inseridos ou atualizados com sucesso.' };
  } catch (error) {
    console.error('Erro ao inserir ou atualizar dados:', error.message);
    return { success: false, message: 'Erro ao inserir ou atualizar dados: ' + error.message };
  }
}

async function zteOltInsertType2(data) {
  try {

    const values = data.map(item => 
      `(${item.slot}, ${item.port}, '${item.ont_id}', '${item.state}', '${item.brand}', NOW(), NOW())`
    ).join(',');

    
    const query = `  
      INSERT INTO "OltDevices" ("slot", "port", "ont_id", "state", "brand", "createdAt", "updatedAt")
      VALUES ${values}
      ON CONFLICT ("slot", "port", "ont_id", "brand")
      DO UPDATE SET
      "state" = EXCLUDED."state",
      "updatedAt" = NOW();
    `;

    await sequelize.query(query, { type: Sequelize.QueryTypes.RAW });

    console.log('Dados inseridos ou atualizados com sucesso.');
    return { success: true, message: 'Dados inseridos ou atualizados com sucesso.' };
  } catch (error) {
    console.error('Erro ao inserir ou atualizar dados:', error.message);
    return { success: false, message: 'Erro ao inserir ou atualizar dados: ' + error.message };
  }
}

module.exports = {
  zteOltInsertType1,
  zteOltInsertType2
}