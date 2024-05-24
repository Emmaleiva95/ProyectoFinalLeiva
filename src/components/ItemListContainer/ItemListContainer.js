import { useEffect, useState } from 'react'
import './itemlistcontainer.css';
import { fetchingData, fetchingDataByCategory } from '../../APIdata/APIdata'
import { Link, useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';



const ItemListContainer = ({ greetings }) => {

  const [listadoItems, setListado] = useState([])
  const [isLoading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {

    if (params.categoria) {
// FETCHING DE ITEMS POR CATEGORIA
      fetchingDataByCategory(params.categoria)
        .then((data) => {
          // CAMBIO EL ESTADO DEL LISTADO.
          setListado(data);

        })
        .finally(() => {
          setLoading(false);
        })
    } else {
      // FETCHING DE ITEMS 
      fetchingData()
        .then((data) => {

          // CAMBIO EL ESTADO DEL LISTADO.
          setListado(data);
        })
        .finally(() => {
          setLoading(false);
        })
    }



  }, [params])

  return (
    <section>
      <h2 className='py-4'>Nuestros libros</h2>
      <hr />

      <div className='contenedor-categorias bg-primary'>
        <Link to='/items/category/ficcion'>Ficción</Link>
        <Link to='/items/category/thriller'>Thriller</Link>
        <Link to='/items/category/drama'>Drama</Link>
      </div>

      <div className='container'>

        {
          isLoading
            ?
            <LoaderSpinner/>
            :
            <ItemList listadoItems={listadoItems} />
        }

      </div>


    </section>
  )
}

export default ItemListContainer