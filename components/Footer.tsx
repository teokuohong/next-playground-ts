import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	footer: {
		position: 'fixed',
		width: '100%',
		background: '#272D45',
		color: '#FFFFFF',
		fontFamily: 'Consolas',
		fontSize: '20px',
		bottom: 0,
		textAlign: 'center'
	}
});

const Footer = () => {

	const classes = useStyles();

	let footerText: string = 'Migrating from Angular to React by Teo Kuo Hong';
	return (
		<footer className={classes.footer}>
			{footerText}
		</footer>
	)
}

export default Footer;