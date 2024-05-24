import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Footer from './components/Footer/Footer';
import CartTableContainer from './components/CartTableContainer/CartTableContainer';
import CheckOut from './components/CheckOut/CheckOut';

function App() {



  return (
    <CartProvider>


      <NavBar bgColor='#222' txtColor='#fff' />
      <main style={{ textAlign: 'center' }}>
        <Routes>


          <Route path='/' element={<Home />} />

          <Route path='/items' element={<ItemListContainer />} />

          <Route path='/items/category/:categoria' element={<ItemListContainer greetings={'Productos filtrados'} />} />

          <Route path='/items/detail/:id' element={<ItemDetailContainer />} />

          <Route path='/cart' element={<CartTableContainer />} />

          <Route path='/checkout' element={<CheckOut />} />

          <Route path='*' element={<NotFound />} />

        </Routes>

      </main>

    <Footer/>
    </CartProvider>
  );
}

export default App;
