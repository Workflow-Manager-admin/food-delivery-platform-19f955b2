import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

// PUBLIC_INTERFACE
function RestaurantDetail() {
  /** Displays detail view of a single restaurant. */
  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    // TODO: Replace with real fetch
    setRestaurant({id, name: "Sample Eatery", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80", cuisine: "Fusion", rating: 4.2, description: "Sample description for restaurant."});
  }, [id]);

  if (!restaurant) return <div>Loading...</div>;

  return (
    <div style={{maxWidth:500,margin:"0 auto"}}>
      <img src={restaurant.img} alt={restaurant.name} className="restaurant-img"/>
      <h2>{restaurant.name}</h2>
      <p style={{marginBottom:6}}>
        <span style={{color:"#888"}}>{restaurant.cuisine}</span> 
        <span style={{marginLeft:12, color:"#F9A825"}}>{restaurant.rating} ★</span>
      </p>
      <p>{restaurant.description}</p>
      <div style={{marginTop:22}}>
        <Link to={`/restaurants/${restaurant.id}/menu`} className="btn">View Menu</Link>{" "}
        <Link to={`/restaurants/${restaurant.id}/review`} className="btn secondary">Reviews</Link>
      </div>
    </div>
  );
}
export default RestaurantDetail;
