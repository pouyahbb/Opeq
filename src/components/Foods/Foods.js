import React from 'react'

import FoodCard from './FoodCard'
import FoodsApi from './../../api/foodsApi'
import './Foods.style.scss'

const FoodTypes = FoodsApi.map((foodApi) => foodApi.name)

function Foods() {
	return (
		<div className='foods'>
			{FoodTypes.map((foodType, index) => (
				<FoodCard key={foodType + index} foodName={foodType} />
			))}
		</div>
	)
}

export default Foods
