import React from 'react';
import menuImg from '../../../assets/images/menuIcon.png'

const menu = (props)=>(
	<div>
		<img src={menuImg} style={{backgrounColor:'white', 'box-sizing':'border-box', height:'25px'}} alt="Menu Icon" onClick={props.clicked} />
	</div>

)

export default menu;
