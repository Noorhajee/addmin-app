import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../../Utils/Utils';
import { Navigate } from "react-router-dom";

const IsAuth = (props) => {
	const auth = useContext(GlobalContext);

	return (
		<div>
			{
				auth.token ?
				<Navigate to={"/login"}/>
				:
				props.children


			}
		</div>
	);
};

export default IsAuth;