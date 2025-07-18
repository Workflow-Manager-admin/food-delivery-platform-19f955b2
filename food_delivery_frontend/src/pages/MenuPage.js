import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// PUBLIC_INTERFACE
function MenuPage() {
  /** Shows restaurant menu and lets user add items to cart. (Checkout not functional in this stub) */
  const { id } = useParams();
  const navigate = useNavigate();
  const [menu, setMenu] = useState([]);
  const [restaurant, setRestaurant] = useState({});
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setRestaurant({id, name:"Sample Eatery"});
    // Stubbed menu (replace with real fetch)
    setMenu([
      {id: "m1", name: "Margherita Pizza", price: 10.99, img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80"},
      {id: "m2", name: "Caesar Salad", price: 8.25, img: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=400&q=80"},
      {id: "m3", name: "Fettuccine Alfredo", price: 12.5, img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"},
    ]);
  }, [id]);

  const addToCart = (item) => {
    setCart(c => [...c, item]);
  };
  const total = cart.reduce((sum, it) => sum + it.price, 0);

  return (
    <div>
      <h2>{restaurant.name} - Menu</h2>
      <div className="grid-list">
        {menu.map(item => (
          <div className="card" key={item.id}>
            <img src={item.img} alt={item.name} className="menu-img"/>
            <div className="card-title">{item.name}</div>
            <div>${item.price.toFixed(2)}</div>
            <button className="btn" onClick={() => addToCart(item)}>Add</button>
          </div>
        ))}
      </div>
      <div style={{marginTop:16, maxWidth:400}}>
        <h4>Your Cart</h4>
        {cart.length === 0 && <p>No items in cart.</p>}
        {cart.length > 0 && 
          <>
            <ul>
              {cart.map((it,i) => <li key={i}>{it.name} - ${it.price.toFixed(2)}</li>)}
            </ul>
            <div>Total: <b>${total.toFixed(2)}</b></div>
            <button className="btn secondary" onClick={() => navigate("/login")}>Proceed to Checkout</button>
          </>
        }
      </div>
    </div>
  );
}
export default MenuPage;
