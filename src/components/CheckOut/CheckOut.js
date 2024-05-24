import { useNavigate } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import CheckOutItem from "../CheckOutItem/CheckOutItem"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import { serverTimestamp } from "firebase/firestore"
import { addNewOrder } from "../../APIdata/APIdata"
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner"



const CheckOut = () => {
    
    const [isLoading, setIsLoading] = useState(false);
    const [userData, setUserData] = useState({name:"Juan Perez",email:"juan@gmail.com",phone:"115644654",address:"Av. Libertad 123"})
    const { cart, cartTotal, cartItems,clearCart } = useCart()
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setUserData({
           ...userData,
            [e.target.name]: e.target.value
        })
       
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        let orderData = {
            comprador:userData,
            total: cartTotal,
            items: cart,
            date: serverTimestamp() //método de firebase para asignar la fecha y hora del servidor
        };

        addNewOrder(orderData).then((response) => {
         
            if(response.id){  
                clearCart();
                withReactContent(Swal).fire({
                    title: "Éxito!",
                    html: `Su compra ha sido procesada exitosamente, gracias. <br><br> Número de orden: <strong>${response.id}</strong>`,
                    icon: "success"
                });
                navigate('/items');
            }
            
        }).catch((error) => {
            console.log(error)
            withReactContent(Swal).fire({
                title: "Error!",
                text: "Hubo un error al procesar su compra, por favor intente nuevamente.",
                icon: "error"
            });
        })
        .finally(() => {
            setIsLoading(false);
        })
        
   
    }


    useEffect(() => {
        if (cartItems == 0) {
            navigate('/items');
        }
    }, [])

    return (

        <section className="py-4">
            <h1 className="text-center display-5">Checkout</h1>
            <hr className="mb-5 text-primary bg-primary" />
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-md-6 px-4">
                        <h4>Datos:</h4>
                        <hr />
                        <form onSubmit={handleSubmit} action="" className="mb-4">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="" className="form-label w-100 text-start">Nombre Completo</label>
                                    <input name="name" onChange={e => handleInputChange(e)} type="text" id="nombre" className="form-control input-form" defaultValue="Juan Perez" required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="" className="form-label w-100 text-start">Email</label>
                                    <input name="email" onChange={e => handleInputChange(e)} type="email" id="email" className="form-control input-form" defaultValue="juan@gmail.com" required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="" className="form-label w-100 text-start">Teléfono</label>
                                    <input name="phone" onChange={e => handleInputChange(e)} type="text" id="telefono" className="form-control input-form" defaultValue="115644654" required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="" className="form-label w-100 text-start">Dirección</label>
                                    <input name="address" onChange={e => handleInputChange(e)} type="text" id="direccion" className="form-control input-form" defaultValue="Av. Libertador 123" required />
                                </div>
                                <button type="submit" className="btn btn-primary">{ isLoading ? <LoaderSpinner widthSpinner="50px"/> : 'Finalizar'}</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 px-4">
                        <h4>Resumen:</h4>
                        <hr />
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th key="tdProducto">Producto</th>
                                    <th key="tdCantidad">Cantidad</th>
                                    <th key="tdPrecio">Precio</th>
                                    <th key="tdSubtotal">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map(item => {
                                        const { id, titulo, cantidad, precio, subtotal } = item
                                        return (

                                            <CheckOutItem key={id} titulo={titulo} cantidad={cantidad} precio={precio} subtotal={subtotal} />

                                        )
                                    })
                                }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td className="text-primary">Total</td>
                                    <td className="fw-bold text-primary">${cartTotal}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>


            </div>

        </section>
    )
}

export default CheckOut