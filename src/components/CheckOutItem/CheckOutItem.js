

const CheckOutItem = ({titulo,cantidad,precio,subtotal}) => {
    return (
        <tr>
            <td>{titulo}</td>
            <td>{cantidad}</td>
            <td>${precio}</td>
            <td>${subtotal}</td>
        </tr>
    )
}

export default CheckOutItem