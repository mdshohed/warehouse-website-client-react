import { ToastContainer } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home/Home';
import Login from './components/Home/Login/Login/Login';
import Register from './components/Home/Login/Register/Register';
import RequireAuth from './components/Home/Login/RequireAuth/RequireAuth';
import AddItem from './components/Items/AddItem/AddItem';
import MyItems from './components/Items/MyItems/MyItems';
import Header from './components/Shared/Header/Header';
import NotFound from './components/Shared/NotFound/NotFound';
import Product from './components/Products/Products/Products';
import ProductDetail from './components/Products/ProductDetail/ProductDetail';
import ManageItem from './components/Items/ManageItem/ManageItem';
import Footer from './components/Shared/Footer/Footer';
import About from './components/About/About';

function App() {

  return (
    // style={{background: "#EAEDED"}}
    <div className="main-body" >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/product' element={<Product></Product>}></Route>
        <Route path='/product/:productId' element={
          <RequireAuth>
            <ProductDetail></ProductDetail>
          </RequireAuth>
        }></Route>
        <Route path='/manageitem' element={
          <RequireAuth>
            <ManageItem></ManageItem>
          </RequireAuth>
        }></Route>
        <Route path='/additem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>
        <Route path='/myitems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
