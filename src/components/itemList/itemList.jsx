/* eslint-disable react/prop-types */
import { Item } from "../Item/item";

// eslint-disable-next-line react/prop-types
export const ItemList = ({items}) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {items.map( (item) => 
        <Item key= {item.id} item={item}/>
      )}
    </div>
  )
}