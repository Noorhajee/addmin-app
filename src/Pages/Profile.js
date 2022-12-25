import React from 'react';
import { useGlobalContext } from '../Utils/Utils';

function Profile(props) {
	// const [password, setPassword] = useState("");
  const context = useGlobalContext();


  // function resetPassword(e) {
  //   e.preventDefault();
	// 	if (resp.status === 200) {
  //     context.setToken(resp.data.idToken);
  //     localStorage.setItem("token", JSON.stringify(resp.data.idToken));
  //     setPassword("");
  //     alert("Password changed successfully");
  //   } else {
  //     alert( "An Error");
  //   }
  // }
	 function onTextChanged(e) {
    setPassword(e.target.value);
			}

	return (
		<div className="my-profile">
      <div className="profile-title">Your User Profile</div>
      <form className="password" onSubmit={resetPassword}>
        <div className="form-input">
          <div>
            <label>New Password</label>
          </div>
          <input
            className="password-input"
            type={"password"}
            value={password}
            onChange={onTextChanged}
          />
        </div>
        <div>
          <button className="submit-btn">Change Password</button>
        </div>
      </form>
    </div>
	);
}

export default Profile;