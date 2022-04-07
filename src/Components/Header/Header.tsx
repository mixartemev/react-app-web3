import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
	const func = () => {};
	return(
		<header className="header">
		    <div className="container">
				<NavLink className="link" key="1" to="/">main</NavLink>
				<NavLink className="link" key="2" to="/about">about</NavLink>

				<button onClick={func} className="connect-wallet-btn">click me</button>
			</div>
		</header>
	)
}

export default Header;