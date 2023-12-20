
import Item from "./item.jsx";

const ItemList = ({ productos }) => {
  console.log(productos);
  return (
    <div>

      <h2>Productos</h2>

      <div className="productos">

        { productos.map((prod) => <Item producto ={prod} key={prod.id} />)}

      </div>

    </div>
      )
}

      export default ItemList