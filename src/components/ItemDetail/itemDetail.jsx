import { ItemCount } from "../ItemCount/itemCount";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./itemDetail.css";
import data from "D:/Ornela/Desktop/vite-project/src/data/items.json";

export const ItemDetail = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const get = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });

    get.then((data) => {
      const findData = data.find((d) => d.id === Number(id));
      setItem(findData);
    });
  }, [id]);

  if (!item) return null;

  return (
    <div className="container-item">
      <Card className="card">
        <Card.Img variant="top" src={item.pictureUrl} alt="card-image" />
        <Card.Body>
          <Card.Title className="card-title">{item.title}</Card.Title>
          <Card.Text className="card-text">{item.categoryId}</Card.Text>
          <Card.Text
            style={{
              color: "#666",
              fontFamily: "helvetica",
            }}
          >
            {item.description}
          </Card.Text>
          <Card.Text>{item.price}</Card.Text>
          <ItemCount item={item} />
        </Card.Body>
      </Card>
    </div>
  );
};

/*import { getFirestore, getDoc, doc, query, where } from "firebase/firestore";

export const ItemDetail = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    let refDoc;

    if (!id) refDoc = doc(db, "items");
    else {
      refDoc = query(doc(db, "items", id), where("id", "==", id));
    }

    getDoc(refDoc).then((snapshot) => {
      setItem({ id: snapshot.id, ...snapshot.data() });
    });
  }, [id]);*/
