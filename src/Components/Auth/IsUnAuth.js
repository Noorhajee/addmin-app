// import React from 'react';
import React, { useContext } from 'react'
import { GlobalContext } from '../../Utils/Utils';
import { Navigate} from 'react-router-dom';

const IsUnAuth = (props) => {
	const auth = useContext(GlobalContext).auth;
	// const location = useLocation();
	return (
		<div>
          {!auth.token ?
            props.children
						:
						<Navigate to={'/'} />
    }
		</div>
	);
};

export default IsUnAuth;