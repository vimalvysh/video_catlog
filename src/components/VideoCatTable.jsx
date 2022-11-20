import Table from 'react-bootstrap/Table';

function VideoCatTable({ column, data }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>{column && column.map(item => <th>{item}</th>)}</tr>
      </thead>
      <tbody>
        {data &&
          data.map(item => (
            <tr>
              <td style={{ height: '20vh', width: '6vw' }}>
                <div style={{ height: '20vh', width: '6vw' }}>
                  <img src={item.Poster} alt='nothing' style={{ height: '100%', width: '100%' }} />
                </div>
              </td>
              <td>{item.Title}</td>
              <td>{item.Year}</td>
              <td>{item.Type}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default VideoCatTable;
