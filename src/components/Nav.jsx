import React from 'react';
import styled from 'styled-components';

const Nav = () => {
	return <NavParent>My SHOP HEADER</NavParent>;
};

export default Nav;

const NavParent = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	height: 80px;
	// background-color: red;
	border-bottom: 1px solid #d9d9d9;
`;
