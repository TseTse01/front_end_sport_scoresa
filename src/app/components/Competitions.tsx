import ListGroup from 'react-bootstrap/ListGroup';

function Competitions() {
  return (
    <ListGroup>
      <ListGroup.Item disabled>Premier league</ListGroup.Item>
      <ListGroup.Item>Ligue 1</ListGroup.Item>
      <ListGroup.Item>Serie A</ListGroup.Item>
      <ListGroup.Item>Erovnuli liga</ListGroup.Item>
    </ListGroup>
  );
}

export default Competitions;