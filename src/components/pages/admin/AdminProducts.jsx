import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Error from "../../Error";



const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://json-server-test-ruby.vercel.app/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      fetch(`https://json-server-test-ruby.vercel.app/products/${id}`, {
        method: 'DELETE'
      })
      .then(() => {
        setProducts(products.filter(product => product.id !== id));
      })
      .catch(err => {
        setError(err.message);
      });
    }
  };

  if (loading) return <Loader />;
  if (error) return <Error message={error} />;

  return (
    <main className="admin-products">
      <div className="container">
        <div className="admin-header">
          <h1>Manage Products</h1>
          <Link to="/admin/add-product" className="btn">Add New Product</Link>
        </div>
        
        <table className="products-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td><img src={product.image} alt={product.title} className="table-image" /></td>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td>
                  <div className="actions">
                    <button className="btn btn-edit">Edit</button>
                    <button 
                      className="btn btn-delete"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default AdminProducts;