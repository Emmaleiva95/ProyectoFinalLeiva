import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { useCart } from '../../context/CartContext.js'
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const ItemDetail = ({id,imagen, titulo, descripcion, precio,genero,stock}) => {
    const [productoAgregado, setProductoAgregado] = useState(false);

    /* useCart */
    const {addItem} = useCart();

    const onConfirm = (cantidad) => {
        cantidad = parseInt(cantidad);
        if(cantidad > 0 && stock >= cantidad ){
            setProductoAgregado(true);
            const item = {id,imagen, titulo, precio, cantidad, subtotal: cantidad*precio}
            // AGREGAR AL CONTEXT
            addItem(item);
        }else{
             withReactContent(Swal).fire({
                title: "Error!",
                text: "La cantidad ingresada supera el stock disponible.",
                icon: "error"
            });
        }
    }
  return (
            <div className="container">
               
                <div className="row justify-content-center">
                    <div className="col-md-6 card p-3 my-2">
                        <img src={`/assets/img/${imagen}`} className="img-fluid" alt="" />
                  
                    </div>

                    <div className="col-md-4 card p-3 my-2">
                  
                        <h2>{titulo}</h2>
                        <p>{descripcion}</p>
                        <span className="d-inline mt-3 mb-2 fw-bold text-primary">Genero: {genero}</span>
                        <span className="d-inline mt-3 mb-2 fw-bold text-primary">${precio}</span>

                        {
                            productoAgregado 
                           ?
                           <p className="border-bottom border-success py-2 my-2 text-success">Producto agregado al carrito exitosamente!</p>
                           :
                       
                           <ItemCount onConfirm={onConfirm} stockDisponible={stock} />
                        }
                        
                    </div>
                    
                </div>
            </div>
  )
}

export default ItemDetail