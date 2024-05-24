
import { useCart } from '../../context/CartContext.js'
import { CartIcon } from '../Icons.js'
const CartWidget = () => {
  const {cartItems} = useCart();

  
  return (
    <div className='cart-icon-container'>

         <CartIcon/>

        {
          cartItems === 0 ? null : <span className='span-cart-items'>{cartItems}</span>
        }
       
    </div>
  )
}

export default CartWidget