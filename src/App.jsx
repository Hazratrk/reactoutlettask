import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/pages/client/Home";
import Contact from "./components/pages/client/Contact";
import Products from "./components/pages/client/Products";
import ProductDetails from "./components/pages/client/ProductDetails";
import Dashboard from './components/pages/admin/Dashboard';
import AdminProducts from './components/pages/admin/AdminProducts';
import AddProduct from './components/pages/admin/AddProduct';
import Navbar from './components/Navbar';
import Error from "./components/Error";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
  
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
        
       
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;