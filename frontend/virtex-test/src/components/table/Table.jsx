import './Table.css'

function Table({ data }) {
  if (!data || data.length === 0) return <p>Nenhum dado carregado</p>;

  const headers = Object.keys(data[0]); // Assumindo que todos os objetos têm a mesma estrutura

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
        {data.map((row, index) => (
          <tr key={index}>
            {headers.map((header) => (
              <td key={header}>{row[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;