import React from 'react'
import Card from '../../shared/card'

import './Foods.style.scss'

function salad() {
  return (
		<div>
			<h3> Salad </h3>
			<div className='foods__card'>
				<Card foodName='Salad' />
			</div>
		</div>
	)
}

export default salad
