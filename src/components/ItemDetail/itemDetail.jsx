import { useContext } from "react";
import { ItemCount } from "../ItemCount/itemCount";
import Card from "react-bootstrap/Card";
import { CartContext } from "../../context/cartContext";

export const ItemDetail = ({ item }) => {
  const { addToCart } = useContext(CartContext);

  const add = (quantity) => addToCart(item, quantity);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem 1rem",
      }}
    >
      <Card
        style={{
          width: "30rem",
          height: "60rem",
          borderColor: "rgb(236, 179, 144)",
        }}
      >
        <Card.Img variant="top" src={item.image} alt="card-image" />
        <Card.Body>
          <Card.Title
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              fontFamily: "Kalam, cursive",
              color: "rgb(236, 179, 144)",
            }}
          >
            {item.title}
          </Card.Title>
          <Card.Text
            style={{
              fontSize: "1.5rem",
              marginBottom: "10px",
              fontFamily: "Kalam, cursive",
            }}
          >
            {item.categoryId}
          </Card.Text>
          <Card.Text
            style={{
              fontSize: "1.5rem",
              color: "#666",
              fontFamily: "helvetica",
            }}
          >
            {item.description}
          </Card.Text>
          <Card.Text
            style={{
              fontSize: "1.5rem",
              marginBottom: "10px",
              fontFamily: "Kalam, cursive",
            }}
          >
            ${item.price}
          </Card.Text>
          <Card.Text
            style={{
              fontSize: "1.5rem",
              marginBottom: "10px",
              fontFamily: "Kalam, cursive",
            }}
          >
            Stock:{item.stock}
          </Card.Text>
          <ItemCount add={add} stock={item.stock} />
        </Card.Body>
      </Card>
    </div>
  );
};
