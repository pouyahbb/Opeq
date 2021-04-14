import React from 'react'
import Card from './../../shared/card'

import Grid from '@material-ui/core/Grid'

import './Foods.style.scss'

function LunchAndDinner() {
	return (
		<div className='foods__lunchAndDinner'>
			<h3> Lunch & Dinner </h3>
			<Card foodName='Lunch And Dinner' />
		</div>
	)
}

export default LunchAndDinner
