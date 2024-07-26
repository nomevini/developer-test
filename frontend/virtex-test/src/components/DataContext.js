// DataContext.js
import React, { createContext, useContext, useState } from 'react';

// Criação do contexto
const DataContext = createContext();

// Provedor de contexto
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  // Função para atualizar os dados
  const updateData = (newData) => {
    setData(newData);
  };

  return (
    <DataContext.Provider value={{ data, updateData }}>
      {children}
    </DataContext.Provider>
  );
};

// Hook para consumir o contexto
export const useDataContext = () => useContext(DataContext);
