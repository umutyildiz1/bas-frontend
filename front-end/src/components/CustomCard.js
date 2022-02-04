import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';

export default function CustomCard(props) {
  const {name,description} = props
  const imageUrl = "./product.jpg"
  return (
      <Card className="m-3 float-left" style={{ width: '18rem',display:'inline-block'}}>
  <Card.Img variant="top" src={imageUrl} />
  
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      {description}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
  );

}
