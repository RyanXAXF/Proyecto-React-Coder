import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export const Item = ({product}) => {
    return (<Card className='cardContainer'>
    <Card.Img className='card-img' variant="top" src={product.img} />
    <Card.Body>
      <Card.Title className='cardTitle'>{product.title}</Card.Title>
      <Card.Text>{product.description}</Card.Text>
      <Card.Text>{product.categoryId}</Card.Text>
      <Link to={`/item/${product.id}`}><Button className='card-btn' variant="primary">Comprar</Button></Link>
    </Card.Body>
  </Card>)
    


}
