import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SidebarItems from './SidebarItems';
import { Link } from 'react-router-dom';

function Sidebar(props, { defaultActive }) {
	const location = props.history.location;
	const lastActiveIndexString = localStorage.getItem('lastActiveIndex');
	const lastActiveIndex = Number(lastActiveIndexString);
	const [activeIndex, setActiveIndex] = useState(
		lastActiveIndex || defaultActive
	);

	function changeActiveIndex(newIndex) {
		localStorage.setItem('lastActiveIndex', newIndex);
		setActiveIndex(newIndex);
	}

	function getPath(path) {
		if (path.charAt(0) !== '/') {
			return '/' + path;
		}
		return path;
	}

	useEffect(() => {
		const activeItem = SidebarItems.findIndex(
			(item) => getPath(item.route) === getPath(location.pathname)
		);
		changeActiveIndex(activeItem);
	}, [location]);

	return (
		<SidebarParent>
			{SidebarItems.map((item, index) => {
				return (
					<Link
						to={item.route}
						key={item.name}
						style={{ textDecoration: 'none' }}
					>
						<SidebarItem key={item.name} active={index === activeIndex}>
							<p>{item.name}</p>
						</SidebarItem>
					</Link>
				);
			})}
		</SidebarParent>
	);
}

export default Sidebar;

const SidebarParent = styled.div`
	background: #1e2640;
	width: 224px;
	height: 100vh;
`;

const SidebarItem = styled.div`
	padding: 1px 15px;
	transition: all 0.25s ease-in-out;
	//Change the background color if 'active' prop is received
	background: ${(props) => (props.active ? 'hsla(0,0%,100%,.1)' : '')};
	margin: 4px 6px;
	border-radius: 4px;

	p {
		color: white;
		font-weight: bold;
		text-decoration: none;
	}

	&:hover {
		cursor: pointer;
	}

	&:hover:not(:first-child) {
		background: #c34a36;
	}
`;
