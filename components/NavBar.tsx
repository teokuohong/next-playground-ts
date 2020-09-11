import React from 'react';
import {
	AppBar,
	Toolbar,
	makeStyles,
	Container
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
	navBar: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'row',
		width: '100%',
		textDecoration: 'none',
		color: '#FFFFFF',
		fontFamily: 'Consolas',
		fontSize: '20px'
	},
	appBarSpacing: theme.mixins.toolbar,
	appBar: {
		background: '#272D45'
	}
}));



const NavBar = () => {
	console.log("Navbar is rendered") //Should be passing in the User Rights
	const classes = useStyles();
	const [logo, ...navBarItem] = [<HomeIcon />, "Class", "Events", "FAQ", "Announcement"];

	const items: JSX.Element[] = [logo, ...navBarItem]
		.map((item, index) => {

			if (typeof item === 'string')
				return (
					<Link key={index} href={`/${item.toLowerCase()}`}>
						<a className={classes.navBar}>{item}</a>
					</Link>
				)
			else
				return (
					<Link key={index} href={`/`}>
						{item}
					</Link>
				)

		})

	return (
		<>
			<AppBar className={classes.appBar}>
				<Container>
					<Toolbar disableGutters>
						{items}
					</Toolbar>
				</Container>
			</AppBar>
			<div className={classes.appBarSpacing}></div>
		</>
	)
}

export default NavBar;