import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://json-server-test-ruby.vercel.app/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Delete this product?')) {
      fetch(`https://json-server-test-ruby.vercel.app/products/${id}`, {
        method: 'DELETE'
      })
      .then(() => {
        setProducts(products.filter(product => product.id !== id));
      });
    }
  };

  return (
    <div className="admin-products">
      <h1>Manage Products</h1>
      <Link to="/admin/add-product" className="btn">Add New Product</Link>
      
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProducts;