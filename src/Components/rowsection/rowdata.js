import React from "react";

import "./row.css";
import { useStateValue } from "../contextapi/context";
import { Link } from "react-router-dom";
const Rowdata = () => {
  const[state , dispatch] = useStateValue();
   const Logout = () => {
     dispatch(
      {
        type: "setfalse",
      }
     )

   };

  return (
   <div className="rowsec">
   <Link to ='/' style={{textDecoration:"none"}} >

    <div>Home</div>
    </Link>

    <div className="logoutis" onClick={Logout}>Logout</div>
    <Link to ='/Signin' style={{textDecoration:"none"}} ><div> Login</div></Link>
    <Link to ='/Registration' style={{textDecoration:"none"}} >
    <div> Register</div>  
    </Link>
    <Link to ='/polisy' style={{textDecoration:"none"}} >
    <div>Polycy</div>
    </Link>
    <Link to ='/Women' style={{textDecoration:"none"}} >

    <div>Women</div>
    </Link>
    <Link to ='/allcate' style={{textDecoration:"none"}} >
    
    <div>All Products</div>
    </Link>
   </div>
  );
};

export default Rowdata;
