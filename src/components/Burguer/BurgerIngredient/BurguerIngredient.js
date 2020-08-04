import React from 'react'

const burguerIngredient = props =>{
	let ingredient =null;
	
	switch(props.type){
		case ('brea-bottom'):
			ingredient = <div className={classes.BreadBottom}></div>;
			break;
		case ('bread-top'):
			ingredient = (
				<div className={classes.Seed1}></div>
				<div className={classes.Seed2}></div>
			);
			break;
		case('meat'):
			ingredient = <div className={classes.Meat}></div>;
			break;
		case('cheese'):
			ingredient = <div className={classes.Cheese}></div>;
			break;
		case('salad'):
			ingredient = <div clasName={classes.Salad}></div>;
			break;
		case('bacon'):
			ingredient = <div className={classes.Bacon}></div>;
			break;
		default:
			ingredient = null;

	}
	return ingredient;

}

export default burguerIngredient
