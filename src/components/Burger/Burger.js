import React from 'react'

import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burguer = (props) =>{
	let transfomedIngredients = Object.keys(props.ingredients)
		.map(igKeys=>{
			return [...Array(props.ingredients[igKeys])]
				.map((_,i)=>{
				return <BurgerIngredient key ={igKeys+i} type = {igKeys} />;
		})
		}).reduce((arr,el)=>{
					return arr.concat(el);
				},[]);;
	if (transfomedIngredients.length === 0){
		transfomedIngredients = 
			<p>Please Choose Ingredient!</p>
	}
	return(
		<div className={classes.Burger}>
			<BurgerIngredient type="bread-top" />
				{transfomedIngredients}
			<BurgerIngredient type="bread-bottom" />
		</div>
	);
};

export default burguer
