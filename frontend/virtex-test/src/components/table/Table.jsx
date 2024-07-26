// Table.js
import React from 'react';
import { useDataContext } from '../DataContext';
import './Table.css';

function Table() {
  const { data } = useDataContext();

  if (!data || data.length === 0) return <p>Nenhum dado carregado</p>;

  const headers = Object.keys(data[0]);
  const rows = data.map((item) => Object.values(item));

  return (
    <table className="data-table">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {
          rows.map((row, index) => (
            <tr key={index}>
              {row.map((info, i) => (
                <td key={i}>{info}</td>
              ))}
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Table;
