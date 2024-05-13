import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../main";
import { ItemDetail } from "../ItemDetail/itemDetail";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    const docRef = doc(db, "items", id);
    getDoc(docRef).then((resp) => {
      setItem({ ...resp.data(), id: resp.id });
    });
  }, [id]);

  if (!item) return null;

  return (
    <div style={{ backgroundColor: "rgb(254, 246, 228)" }}>
      <ItemDetail item={item} />
    </div>
  );
};
