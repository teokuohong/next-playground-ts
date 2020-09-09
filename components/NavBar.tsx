import React from 'react';
import {
	AppBar,
	Toolbar,
	IconButton,
	makeStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';

// interface IUser {
// 	props?: number
// }

const useStyles = makeStyles({
	navBar: {
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		textDecoration: 'none',
		color: '#FFFFFF',
		fontFamily: 'Consolas',
		fontSize: '20px'
	},
	appBar: {
		background: '#272D45',
	}
})


const NavBar = () => {
	console.log("Navbar is rendered") //Should be passing in the User Rights
	const classes = useStyles();

	const items: JSX.Element[] = ["Class", "Events", "FAQ", "Announcement"]
		.map((item) => {
			return (
				<Link key={item} href={`/${item.toLowerCase()}`}>
					<a className={classes.navBar}>{item}</a>
				</Link>
			)
		})

	return (
		<AppBar className={classes.appBar}>
			<Toolbar>
				<IconButton edge="start" color="inherit" aria-label="menu"><MenuIcon /></IconButton>
				{items}
			</Toolbar>
		</AppBar>
	)
}

export default NavBar;