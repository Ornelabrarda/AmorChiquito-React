import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { ItemList } from "../itemList/itemList";
import { db } from "../../main";
import "./ItemListContainer.css";
import { getDocs, collection, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const category = useParams().category;

  useEffect(() => {
    const itemsRef = collection(db, "items");
    const q = category
      ? query(itemsRef, where("category", "==", category))
      : itemsRef;

    getDocs(q).then((snapshot) => {
      setItems(
        snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, [category]);

  return (
    <div className="ItemListContainer">
      <Container>
        <ItemList items={items} />
      </Container>
    </div>
  );
};
