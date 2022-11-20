import Pagination from 'react-bootstrap/Pagination';

let active = 2;
let items = [];
for (let number = 1; number <= 4888 / 10; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}

const paginationBasic = ({ handlePageChange }) => (
  <div>
    <Pagination onClick={e => handlePageChange(e.target.innerText)}>
      {/* <Pagination.First /> */}
      <Pagination.Prev />
      <Pagination.Item active>{1}</Pagination.Item>
      {/* <Pagination.Ellipsis /> */}
      <Pagination.Item>{5}</Pagination.Item>
      <Pagination.Next />
      {/* <Pagination.Last /> */}
    </Pagination>
    {/* <Pagination onClick={e => handlePageChange(e.target.innerText)}></Pagination> */}
  </div>
);

export default paginationBasic;
