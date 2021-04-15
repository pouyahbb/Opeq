import React from 'react'
import { upperFirst } from 'lodash'
import Card from './FoodBox/FoodBox'
import './Foods.style.scss'

export const FoodCard = ({ foodName }) => {
	return (
		<>
			<h3> {upperFirst(foodName)} </h3>
			<div className='foods__card'>
				<Card foodName={foodName} />
			</div>
		</>
	)
}

export default FoodCard
