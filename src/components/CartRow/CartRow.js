
import { useCart } from '../../context/CartContext';
import './cartRow.css';
const CartRow = ({ id, imagen, titulo, precio, cantidad, subtotal }) => {

  const {removeItem} = useCart();
  const onRemove = () => {
    
    removeItem({id,subtotal});
  }

  return (
    <tr>
      <td><img className="img-tabla" src={`/assets/img/${imagen}`} alt="" /></td>
      <td>{titulo}</td>
      <td>${precio}</td>
      <td>{cantidad}</td>
      <td>${subtotal}</td>
      <td>
        <button onClick={() => removeItem({id,subtotal})} className="btn text-danger fw-bold btn-quitar">Quitar</button>
      </td>
    </tr>
  )
}

export default CartRow