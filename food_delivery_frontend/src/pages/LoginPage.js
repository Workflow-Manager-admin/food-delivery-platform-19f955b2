import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

// PUBLIC_INTERFACE
function LoginPage() {
  /** Simple email/password login form. No BE interaction in this stub. */
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if (!email || !password) {
      setErr("Email and password required");
      return;
    }
    // TODO: Call backend for auth
    login({email, name:"Demo User", avatar: null});
    navigate("/");
  };

  return (
    <div className="card" style={{maxWidth:340, margin:"40px auto"}}>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} type="email" />
        <input placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} type="password" />
        {err && <div style={{color:"red"}}>{err}</div>}
        <button className="btn" type="submit" style={{width:"100%"}}>Login</button>
      </form>
      <small>
        New? <Link to="/register">Create an Account</Link>
      </small>
    </div>
  );
}
export default LoginPage;
