import { useEffect, useState } from "react";

import { pidoData } from "../nav/pidoData";

import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [Productos, setProductos] = useState([]);
  console.log(Productos)

  useEffect(() => {
    pidoData()
      .then((res) => {
        setProductos (res);
      })
  }, [])
  return (
    <div>
      <ItemList Productos = {Productos}/>
    </div>
  )
}

export default ItemListContainer