import Item from "../Item/Item";


const ItemList = ({listadoItems}) => {
  return (
        <div className="contenedor-items row">

         {
          listadoItems.map( (item) => {
            const {id, imagen, titulo, descripcion, precio} = item;
            return (
            <Item key={id} idItem={id} imagen={imagen} titulo={titulo} descripcion={descripcion} precio={precio}/>
            )
          })

         }
        </div>
     
  )
}

export default ItemList