import React from 'react'
import CartTable from '../CartTable/CartTable'

const CartTableContainer = () => {
    
    return (
        <section className="py-5">
            <div className="container">
                <h2 className="text-center">Carrito de productos</h2>
                <hr />
                <div id="contenedorTablaCarrito">
                    
                    <CartTable />

                    
                </div>

            </div>

        </section>
    )
}

export default CartTableContainer