import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext"
import CartRow from "../CartRow/CartRow"

const CartTable = () => {
    
    const { cart,cartTotal } = useCart();

    return (
        <>
            {
                cart.length > 0
                    ?
                    <div>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Título</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Subtotal</th>
                                    <th scope="col">Quitar</th>
                                </tr>
                            </thead>
                            <tbody id="cuerpoTabla">

                                {
                                    cart.map((item) => {
                                        const { id, imagen, titulo, precio, cantidad, subtotal } = item;
                                        return (
                                            <CartRow key={id} imagen={imagen} id={id} titulo={titulo} precio={precio} cantidad={cantidad} subtotal={subtotal} />
                                        )
                                    })
                                }




                            </tbody>
                        </table>

                        <div className="d-flex justify-content-end align-items-center">
                            <p className="m-0 me-3">Total: $<span id="spanTotal" className="fw-bold">{cartTotal}</span></p>
                            <Link to="/checkout" type="button" className="btn btn-success" id="btnFinalizarCompra">Finalizar compra</Link>
                        </div>
                    </div>
                    :
                    <div className="text-center pb-5 msj-carrito">
                        <p style={{ width: "fit-content" }} className="mx-auto bg-info text-white p-4 rounded">Su carrito está vacío, por favor seleccione nuevos productos.</p>
                        <Link className="btn btn-secondary" to="/items">Ver productos</Link>
                    </div>

            }
        </>
    )
}

export default CartTable