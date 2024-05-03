import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./item.css";
import { Link } from "react-router-dom";

export const Item = ({ item }) => {
  return (
    <Card className="item-card">
      <Card.Img variant="top" src={item.pictureUrl} alt="card-image" />
      <Card.Body>
        <Card.Title className="title-card">{item.title}</Card.Title>
        <Card.Text className="car-text">{item.category}</Card.Text>
        <Card.Text className="cart-description">{item.description}</Card.Text>
        <Card.Text>{item.price}</Card.Text>
        <Link to={`/item/${item.id}`}>
          <Button className="card-button">Ver producto</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
