import React from 'react'

import classes from './Burguer.css'
import BurguerIngredient from './BurgerIngredient/BurguerIngredient'

const burguer = (props) =>{
	let transfomedIngredients = Object.keys(props.ingredients)
		.map(igKeys=>{
			return [...Array(props.ingredients[igKeys])]
				.map((_,i)=>{
				return <BurguerIngredient key ={igKeys+i} type = {igKeys} />;
		})
		}).reduce((arr,el)=>{
					return arr.concat(el);
				},[]);;
	if (transfomedIngredients.length === 0){
		transfomedIngredients = 
			<p>Please Choose Ingredient!</p>
	}
	console.log(transfomedIngredients.length)
	console.log(transfomedIngredients)
	return(
		<div className={classes.Burguer}>
			<BurguerIngredient type="bread-top" />
				{transfomedIngredients}
			<BurguerIngredient type="bread-bottom" />
		</div>
	);
};

export default burguer
