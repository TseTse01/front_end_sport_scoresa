import ListGroup from 'react-bootstrap/ListGroup';
import Star from './Star';

function Competitions() {
  return (
    <ListGroup className='competitionsContainer'>
      <ListGroup.Item className='competitions'>
        <Star />Premier league</ListGroup.Item>
      <ListGroup.Item className='competitions'>
        <Star />Ligue 1</ListGroup.Item>
      <ListGroup.Item className='competitions'>
        <Star />Serie A</ListGroup.Item>
      <ListGroup.Item className='competitions'>
        <Star />Erovnuli liga</ListGroup.Item>
    </ListGroup>
  );
}

export default Competitions;