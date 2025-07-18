import React, { useState } from "react";
import { useParams } from "react-router-dom";

// PUBLIC_INTERFACE
function PaymentPage() {
  /** Payment/checkout placeholder (no integration) */
  const { orderId } = useParams();
  const [method, setMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [success, setSuccess] = useState(false);

  const handlePayment = e => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <div className="card" style={{maxWidth:340,margin:"32px auto"}}>
      <h2>Pay for Order #{orderId}</h2>
      {!success ?
      <form onSubmit={handlePayment}>
        <select value={method} onChange={e=>setMethod(e.target.value)}>
          <option value="card">Credit/Debit Card</option>
          <option value="paypal">PayPal</option>
        </select>
        {method === "card" && (
          <input placeholder="Card Number" value={cardNumber} onChange={e=>setCardNumber(e.target.value)} maxLength={19} required/>
        )}
        <button className="btn" type="submit" style={{width:"100%"}}>Pay Now</button>
      </form>
      :
      <div>
        <strong>Payment Success!</strong>
        <div style={{marginTop:8}}>Thank you for your order.</div>
      </div>
      }
    </div>
  );
}
export default PaymentPage;
