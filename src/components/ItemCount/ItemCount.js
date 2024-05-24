import { useState } from "react";

const ItemCount = ({onConfirm, stockDisponible}) => {
    const [count, setCount] = useState(1);

    return (
        <div>
            <label className="form-label">Cantidad:</label>
            <input onChange={evt => setCount(evt.target.value)} style={{ width: '180px', marginInline: 'auto' }} type="number" min="1" defaultValue='1' max={stockDisponible} placeholder="ingresa la cantidad" className="form-control" />
            <span className="text-secondary d-block mb-3" style={{fontSize:"12px"}}>Cantidad disponible: {stockDisponible}</span>
            <button onClick={() => onConfirm(count)} className="btn btn-primary">Añadir al carrito</button>
        </div>
    )
}

export default ItemCount