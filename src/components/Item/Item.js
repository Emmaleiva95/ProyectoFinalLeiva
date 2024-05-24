import { useState } from "react"
import { Link } from "react-router-dom";

const Item = ({idItem, imagen, titulo, descripcion, precio}) => {

 
    
  
  return (
    <div className="col-md-4 my-4">
        <div className="item card p-3">
            <img src={`/assets/img/${imagen}`} className="img-fluid" alt="" />

            <Link to={`/items/detail/${idItem}`} className="btn btn-outline-primary my-3">Ver detalle</Link>

            <h4 className="mt-3">{titulo}</h4>
            <p>{descripcion}</p>
            <span className="d-inline mt-3 mb-2 fw-bold text-primary">$ {precio}</span>
  
           

        </div>
    </div>
  )
}

export default Item

// PascalCase 
// camelCase