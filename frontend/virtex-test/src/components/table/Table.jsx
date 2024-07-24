import './Table.css'

function Table({ data }) {
  if (!data || data.length === 0) return <p>Nenhum dado carregado</p>;

  const headers = data[0];
  const rows = data.slice(1)

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
            <tr>
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