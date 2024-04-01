import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { ItemList } from "../itemList/itemList";
import "./ItemListContainer.css";

import data from "D:/Ornela/Desktop/vite-project/src/data/items.json";

export const ItemListContainer = () => {
  const [ items, setItems ] = useState ([]);
  const { id } = useParams ();

  useEffect(() => {
    const get = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });
    get.then((data) => {
      if (id) {
        const filteredData = data.filter(
          (d) => d.category === id
        );
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