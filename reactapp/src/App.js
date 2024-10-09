import logo from './logo.svg';
import './App.css';
import Product from './components/Product';
import { useState, useEffect } from 'react';

function App() {
  let [products, setProducts] = useState([]);
  let [page, setPage] = useState(0);
  const productsPerPage = 20;

  useEffect(() => {
    fetch('http://localhost:8000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
    }
  , []);

  return (
    <div className="App">
      {/* create a blue header with page titled UCLA store (we have tailwind)*/}
      {/* also add a button to the left of the nav bar to be a check out button */}
      <header className="bg-blue-500 p-4 flex justify-between items-center">
        <h1 className="text-2xl text-white">UCLA Store</h1>
        <button className="bg-green-500 p-2 rounded-lg">Check Out</button>
      </header>

      {/* create a container div with a class of container mx-auto px-4 */}
      <div className="container mx-auto mt-5 px-4">
        {/* create a div with a class of grid grid-cols-3 gap-4 */}
        <div className="grid grid-cols-3 gap-4">
          {/* loop over the products array and create a product for each for the page'th page */}
          {products.slice(page * productsPerPage, (page + 1) * productsPerPage).map(product => (
            <Product key={product._id} name={product.name} description={product.description} price={product.price} />
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
