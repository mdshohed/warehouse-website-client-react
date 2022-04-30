import { ToastContainer } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home/Home';
import Login from './components/Home/Login/Login/Login';
import Register from './components/Home/Login/Register/Register';
import AddItem from './components/Items/AddItem/AddItem';
import MyItems from './components/Items/MyItems/MyItems';
import ProductDetail from './components/Items/ProductDetail/ProductDetail';
import Product from './components/Items/Products/Products';
import Header from './components/Shared/Header/Header';
import NotFound from './components/Shared/NotFound/NotFound';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/product' element={<Product></Product>}></Route>
        <Route path='/product/:productId' element={<ProductDetail></ProductDetail>}></Route>
        <Route path='/additem' element={<AddItem></AddItem>}></Route>
        <Route path='/myitems' element={<MyItems></MyItems>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
