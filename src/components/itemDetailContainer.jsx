import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import data from "D:/Ornela/Desktop/vite-project/src/data/items.json";

export const ItemDetailContainer = () => {
  const [ item, setItem ] = useState (null);
  const { id } = useParams ();

  console.log(id);

  useEffect(() => {
    const get = new Promise((resolve,reject) => {
      setTimeout(() => resolve(data), 2000);
    });

    get.then ((data) => {
        const findData = data.find((d) => d.id === Number(id));
        setItem(findData);
    });

}, [id]);
  
if(!item) return null;

return (
  
  <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "1rem" }}>
    <Card style={{ width: "30rem", height:"60rem", borderColor: "rgb(236, 179, 144)", }}>
      <Card.Img variant="top" src={item.pictureUrl} alt="card-image"/>
      <Card.Body> 
        <Card.Title style={{ fontSize: "3rem", fontWeight: "bold", fontFamily:"Kalam, cursive", color:  "rgb(236, 179, 144)"}}>{item.title}</Card.Title>
        <Card.Text style={{ fontSize: "1.5rem", marginBottom: "10px", fontFamily:"Kalam, cursive" }}>{item.category}</Card.Text>
        <Card.Text style={{ fontSize: "1.5rem", color: "#666", fontFamily: "helvetica"}}>{item.description}</Card.Text>
        <Card.Text style={{ fontSize: "1.5rem", marginBottom: "10px", fontFamily:"Kalam, cursive" }}>{item.price}</Card.Text>
      </Card.Body>
    </Card>    
  </div>             
);
};


