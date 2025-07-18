import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

// PUBLIC_INTERFACE
function RestaurantList() {
  /** Displays a grid of restaurants for browsing. */
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // TODO: Replace with actual backend fetch:
    setRestaurants([
      { id: 1, name: "Bella Italia", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80", cuisine: "Italian", rating: 4.5, description: "Pasta, pizza, and more." },
      { id: 2, name: "Dragon Express", img: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&w=600&q=80", cuisine: "Chinese", rating: 4.1, description: "Fresh wok & noodles." },
      { id: 3, name: "Taco Town", img: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80", cuisine: "Mexican", rating: 4.6, description: "Tacos, burritos, nachos." },
      { id: 4, name: "Curry Circle", img: "https://images.unsplash.com/photo-1523987355523-c7b5b0723c34?auto=format&fit=crop&w=600&q=80", cuisine: "Indian", rating: 4.7, description: "Delicious curries, tandoori." },
    ]);
  }, []);

  const handleClick = (id) => {
    navigate(`/restaurants/${id}`);
  };

  return (
    <div>
      <h2 style={{margin:"12px 0"}}>Nearby Restaurants</h2>
      <div className="grid-list">
        {restaurants.map(rest => (
          <div className="card" key={rest.id} onClick={() => handleClick(rest.id)} style={{cursor:"pointer"}}>
            <img src={rest.img} alt={rest.name} className="restaurant-img"/>
            <span className="card-title">{rest.name}</span>
            <div style={{fontSize:"0.92em", color:"#888"}}>{rest.cuisine} &mdash; {rest.rating} ★</div>
            <div style={{fontSize:"0.97em", marginTop:4}}>{rest.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default RestaurantList;
