import React from 'react'
import Card from '../../shared/card'

import './Foods.style.scss'


function Soup() {
  return (
		<div>
			<h3> Soup </h3>
			<div className='foods__card'>
				<Card foodName='Soup' />
			</div>
		</div>
	)
}

export default Soup
