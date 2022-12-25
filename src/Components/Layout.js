import React from 'react';
import { Outlet } from 'react-router-dom';
// import NavBar from './NavBar';
import { GlobalContext } from '../Utils/Utils';
import { FakeLoginApi} from '../Utils/ApiUtils'

import NavBar from './NavBar';
import { useState } from 'react';

const Layout = () => {
	// const storedUser = JSON.parse(localStorage.getItem('user'));
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));
	const [user, setUser] = useState();

		const auth = {
			user,
			token,
			login: async (username, password) => {
					const resp = await FakeLoginApi(username, password);
					if (resp.status === 200) {
							setUser(resp.user);
							setToken(resp.token)
							localStorage.setItem('user', JSON.stringify(resp.user));
							localStorage.setItem('token', resp.token);
					}

					return resp
			},
			signout: () => {
					setUser("");
					setToken("");
					localStorage.clear();
			}
	}
	return (
		<div>
      {/* <NavBar/>
			 <Outlet/> */}
			  <GlobalContext.Provider value={{ auth }}>
            <div className="App">

                <NavBar />
                <Outlet />
            </div>
        </GlobalContext.Provider >

		</div>
	);
};

export default Layout;