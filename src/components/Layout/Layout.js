import React , { Component } from 'react';
import Aux from '../../hoc/Aux'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

import classes from './Layout.css'

class Layout extends Component{

	state={showBackdrop: false}
	
	backDropHandler = () =>{
		this.setState({showBackdrop: !this.state.showBackdrop});
	}

	render(){
		return(
			<Aux>
				<Toolbar openMenu={this.backDropHandler} />
				<SideDrawer open={this.state.showBackdrop} closed={this.backDropHandler} />
				<main className={classes.Content}>
					{this.props.children}
				</main>
			</Aux>
		)
	}
}
export default Layout;
