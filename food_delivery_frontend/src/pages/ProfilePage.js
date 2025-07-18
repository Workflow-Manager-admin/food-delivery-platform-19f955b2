import React from "react";
import { useAuth } from "../contexts/AuthContext";

// PUBLIC_INTERFACE
function ProfilePage() {
  /** User profile page placeholder */
  const { user } = useAuth();

  return (
    <div className="card" style={{maxWidth:420,margin:"30px auto",textAlign:"center"}}>
      <h2>Your Profile</h2>
      <img 
        src={user?.avatar || "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"}
        alt="avatar" className="avatar-lg"
      />
      <div style={{fontSize:"1.2em",fontWeight:"bold",marginBottom:4}}>{user?.name}</div>
      <div style={{color:"#555"}}>{user?.email}</div>
      <div style={{marginTop:16,textAlign:"left"}}>
        <p>Order history coming soon...</p>
      </div>
    </div>
  );
}
export default ProfilePage;
