import React from 'react'
import Card from './../../shared/card'


import './Foods.style.scss'

function LunchAndDinner() {
	return (
		<div className='foods__lunchAndDinner'>
			<h3> Lunch & Dinner </h3>
			<div className='foods__card'>
				<Card foodName='Lunch And Dinner' />
			</div>
		</div>
	)
}

export default LunchAndDinner
