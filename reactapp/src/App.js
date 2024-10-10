import logo from './logo.svg';
import './App.css';
import Product from './components/Product';
import { useState, useEffect } from 'react';

function App() {
  let [products, setProducts] = useState([]);
  let [productsOfCategory, setProductsOfCategory] = useState([]);
  let [productsOfPage, setProductsOfPage] = useState([]);
  let [page, setPage] = useState(0);
  let [category, setCategory] = useState('All Categories');
  let [cart, setCart] = useState([]);
  const productsPerPage = 9;
  const categories = ['All Categories', 'Sports Equipment', 'Books', 'Electronics', 'Accessories', 'Apparel', 'Stationery', 'Home Decor'];


  let [modal, setModal] = useState(false);

  useEffect(() => {
      fetch('http://localhost:8000/api/products')
        .then(res => res.json())
        .then(data => setProducts(data));
      console.log(products);
    }
  , []);

  useEffect(() => {
    setProductsOfCategory(products.filter(product => product.category === category || category === 'All Categories'));
    setPage(0);
  }, [products, category]);

  useEffect(() => {
    setProductsOfPage(productsOfCategory.slice(page * productsPerPage, (page + 1) * productsPerPage));
  }, [products, page, category]);

  // let filteredProducts = () => products.slice(page * productsPerPage, (page + 1) * productsPerPage).filter(product => product.category === category || category === 'All Categories');

  return (
    <div className="App">
      {/* create a modal overlay */}
      {modal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl mb-4">Cart</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <ul>
                {cart.map((item, index) => (
                  <li key={index} className="mb-2">
                    {item.name} - ${item.price}
                    <a href="#" className="text-red-500 ml-2" onClick={() => {
                      const productIndex = cart.findIndex(product => product._id === item._id); // Find the first occurrence
                      if (productIndex !== -1) {
                        setCart([
                          ...cart.slice(0, productIndex), 
                          ...cart.slice(productIndex + 1)
                        ]); // Remove only that instance
                      }
                    }}>x</a>
                  </li>
                ))}
              </ul>
            )}

            <p className="font-semibold mt-4">Total: ${cart.reduce((total, item) => total + item.price, 0)}</p>
            <button 
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mt-4"
              onClick={() => setModal(false)}
            >
              Close
            </button>
            <button
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 mt-4 ml-4"
              onClick={() => {
                setCart([]);
                alert('Thank you for shopping with us!');
              }}
            >
              Check Out
            </button>
          </div>
        </div>
      )}

      {/* create a blue header with page titled UCLA store (we have tailwind)*/}
      {/* also add a button to the left of the nav bar to be a check out button */}
      <header className="bg-blue-500 p-4 flex justify-between items-center">
        <h1 className="text-2xl text-white">UCLA Store</h1>
        <button className="bg-fuchsia-50 p-2 rounded-lg" onClick={() => setModal(true)}>View Cart</button>
      </header>

      {/* create a paging element to navigate to next page and previous page */}
      <div className="container mx-auto mt-5 px-4">
        <button 
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          onClick={() => setPage(Math.max(page - 1, 0))}
        >
          Previous
        </button>
        <span className="mx-4">Page {page + 1}/{Math.ceil(productsOfCategory.length/productsPerPage)}</span>
        <button 
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          onClick={() => setPage(Math.min(page + 1, Math.ceil(productsOfCategory.length/productsPerPage) - 1))}
        >
          Next
        </button>

        <span className="mx-4">Filter by category:</span>
        <select className="border border-gray-300 rounded-lg px-4 py-2"
          onChange={e => setCategory(e.target.value)}
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* create a container div with a class of container mx-auto px-4 */}
      <div className="container mx-auto mt-5 px-4">
        {/* create a div with a class of grid grid-cols-3 gap-4 */}
        <div className="grid grid-cols-3 gap-4">
          {/* loop over the products array and create a product for each for the page'th page */}
          {productsOfPage.map(product => (
            <Product key={product._id} name={product.name} description={product.description} price={product.price} 
              onAddToCart={
                () => setCart([...cart, product])
              }
              inCartCount={
                cart.filter(item => item._id === product._id).length 
              }
            />
          ))}
        </div>
      </div>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
