import React from "react";
import { useParams, Link } from "react-router-dom";

// PUBLIC_INTERFACE
function OrderPage() {
  /** Shows a confirmed order details + basic status */
  const { orderId } = useParams();
  // stub order & status
  const order = {
    id: orderId,
    restaurant: "Sample Eatery",
    items: [{name:"Margherita Pizza", qty:1}, {name:"Caesar Salad", qty:2}],
    total: 27.49,
    status: 2
  };
  const statusSteps = ["Placed", "In Kitchen", "Out for Delivery", "Completed"];
  return (
    <div style={{maxWidth:500,margin:"0 auto"}}>
      <h2>Order #{orderId}</h2>
      <p>From: <b>{order.restaurant}</b></p>
      <div>
        <ul>
          {order.items.map((it,i)=><li key={i}>{it.qty} × {it.name}</li>)}
        </ul>
        <div>Total: ${order.total.toFixed(2)}</div>
      </div>
      <div className="order-status">
        {statusSteps.map((step, idx) =>
          <span key={step} className={"step" + (order.status === idx ? " active":"")}>{step}</span>
        )}
      </div>
      <div style={{marginTop:20}}>
        <Link to={`/orders/${orderId}/track`} className="btn secondary">Track Delivery</Link>
        <Link to={`/orders/${orderId}/pay`} className="btn" style={{marginLeft:10}}>Pay</Link>
      </div>
    </div>
  );
}
export default OrderPage;
