import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Products, Navbar, Cart, Checkout } from "./components";
import { commerce } from "./lib/commerce";




const App = () => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    try {
      const { data } = await commerce.products.list();
      setProducts(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      setCart(await commerce.cart.retrieve());
    } catch (E) {
      console.log(E);
    }
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };

  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Products onAddToCart={handleAddToCart} products={products} />
          </Route>
          <Route exact path="/cart">
            <Cart
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
              cart={cart}
            />
          </Route>
          <Route exact path='/checkout'>
            <Checkout cart={cart}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
