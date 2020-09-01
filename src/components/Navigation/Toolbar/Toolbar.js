import React from 'react';

import classes from './Toolbar.css'

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Button from '../../UI/Button/Button';
import Menu from '../Menu/Menu';

const toolbar= (props) =>(
	<header className={classes.Toolbar}>
		<Menu clicked={props.openMenu}/>
		<div className={classes.Logo}>
			<Logo />
		</div>
		<nav className={classes.DesktopOnly}>
			<NavigationItems />
		</nav>
	</header>
)

export default toolbar
