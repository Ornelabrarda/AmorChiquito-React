import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const Item = ({ item }) => {
  return (
    <Card
      style={{
        width: "18rem",
        margin: "1rem 1rem",
        borderColor: "rgb(236, 179, 144)",
        fontFamily: "Kalam, cursive",
      }}
    >
      <Card.Img variant="top" src={item.pictureUrl} alt="card-image" />
      <Card.Body>
        <Card.Title
          style={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: "rgb(236, 179, 144)",
          }}
        >
          {item.title}
        </Card.Title>
        <Card.Text style={{ marginBottom: "10px" }}>{item.category}</Card.Text>
        <Card.Text style={{ color: "#666", fontFamily: "helvetica" }}>
          {item.description}
        </Card.Text>
        <Card.Text>{item.price}</Card.Text>
        <Link to={`/item/${item.id}`}>
          <Button
            style={{
              backgroundColor: "rgb(236, 179, 144)",
              borderColor: "white",
              ontFamily: "helvetica",
            }}
          >
            Ver producto
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
