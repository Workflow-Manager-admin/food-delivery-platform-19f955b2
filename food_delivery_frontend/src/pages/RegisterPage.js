import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

// PUBLIC_INTERFACE
function RegisterPage() {
  /** User registration form. */
  const { register } = useAuth();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if (!email || !name || !password) {
      setErr("All fields required");
      return;
    }
    // TODO: connect to real backend register
    register({email, name, avatar: null});
    navigate("/");
  };

  return (
    <div className="card" style={{maxWidth:340, margin:"40px auto"}}>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Full Name" value={name} onChange={e=>setName(e.target.value)} />
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} type="email"/>
        <input placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} type="password"/>
        {err && <div style={{color:"red"}}>{err}</div>}
        <button className="btn" type="submit" style={{width:"100%"}}>Register</button>
      </form>
      <small>
        Already have an account? <Link to="/login">Login</Link>
      </small>
    </div>
  );
}
export default RegisterPage;
