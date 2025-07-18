import React from "react";
import { useParams } from "react-router-dom";

// PUBLIC_INTERFACE
function OrderTrackingPage() {
  /** Shows mock real-time tracking for an order. */
  const { orderId } = useParams();
  return (
    <div style={{maxWidth:400,margin:"0 auto"}}>
      <h2>Tracking Order #{orderId}</h2>
      <div className="order-status">
        <span className="step active">Driver picked up</span>
        <span className="step">En route</span>
        <span className="step">Delivered</span>
      </div>
      <div style={{marginTop:26}}>
        <div>
          <strong>Map coming soon</strong>
        </div>
        <div style={{marginTop:12,color:"#666"}}>Your order is on the way!</div>
      </div>
    </div>
  );
}
export default OrderTrackingPage;
