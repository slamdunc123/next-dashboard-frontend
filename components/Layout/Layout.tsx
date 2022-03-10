import React from 'react';

const Layout = ({ children }) => {
	return (
		<>
			<div>Layout</div>
			<main>{children}</main>
		</>
	);
};

export default Layout;
