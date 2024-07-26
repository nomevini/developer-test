// Button.js
import React from 'react';
import { useDataContext } from '../DataContext';
import './BtnLoadData.css';

function BtnLoadData() {
  const { updateData } = useDataContext();

  const loadData = async () => {
    try {
      const response = await fetch(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/api/olts`, {
        method: 'GET'
      });

      const result = await response.json(); 

      if (!response.ok) {
        throw new Error(result.message || 'Erro desconhecido');
      }

      updateData(result); // Atualiza os dados no contexto
    } catch (error) {
      console.error('Erro ao enviar arquivo:', error);
    }
  };

  return (
    <button className='btn-red load' onClick={loadData}>
      Listar dados da base
    </button>
  );
}

export default BtnLoadData;
