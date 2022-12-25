import React from 'react';
import  { useState } from "react";
import { Link } from "react-router-dom";
// import { UseGlobalContext } from '../Utils/Utils';

function Login(props) {
	// const context = useGlobalContext();
	 const[useremail,setUseremail] = useState("");
	 const[password, setpassword] = useState("");

	function onFormSubmit(e){
		e.preventDefault();
	}
	return (
		<div>
	   <form className=" container mb-3" onSubmit={onFormSubmit}>
				<h1>Login</h1>
			<div>
				<label htmlFor="useremail" className="form-label">Email address</label>
				<input value={useremail} type="email"  id="userEmail" className="form-control pl-20"  onChange={(e) =>setUseremail(e.target.value)}/>
			</div>
			<div className="mb-3">
				<label for="exampleInputPassword1" className="form-label">Password</label>
				<input  value={password} type="password" className="form-control" id="exampleInputPassword1" onChange={(e) =>setpassword(e.target.value)}/>
			</div>
			<button type="submit" className="btn btn-primary">Login</button>
   </form>
	 <div className="w-100 text-center mt-3">
            <Link to="/signup">Create New Account</Link>
          </div>
		</div>

	);
}

export default Login;