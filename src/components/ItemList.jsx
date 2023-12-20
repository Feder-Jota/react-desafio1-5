
import Item from "./Item.jsx";

const ItemList = ({ productos }) => {
  console.log(productos);
  return (
    <div className="container">

      <h2 className="main-title">Productos</h2>

      <div className="productos">

        { productos &&((prod) => <Item producto ={prod} key={prod.id} />)}

      </div>

    </div>
      )
}

      export default ItemList