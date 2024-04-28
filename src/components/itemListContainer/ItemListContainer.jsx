import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { ItemList } from "../itemList/itemList";
import data from "D:/Ornela/Desktop/vite-project/src/data/items.json";
import "./ItemListContainer.css";
/*import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";*/

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const get = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });
    get.then((data) => {
      if (id) {
        const filteredData = data.filter((d) => d.category === id);
        setItems(filteredData);
      } else {
        setItems(data);
      }
    });
  }, [id]);

  return (
    <div className="ItemListContainer">
      <Container>
        <ItemList items={items} />
      </Container>
    </div>
  );
};

/*export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    let refCollection;

    if (!id) refCollection = collection(db, "items");
    else {
      refCollection = query(
        collection(db, "items"),
        where("categoryId", "==", id)
      );
    }

    getDocs(refCollection).then((snapshot) => {
      setItems(
        snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      );
    });
  }, [id]);*/
