/* eslint-disable react/prop-types */
import { Item } from "../Item/item";

export const ItemList = ({ items }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};
