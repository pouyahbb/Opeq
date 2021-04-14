import React from 'react'
import Card from './../../shared/card'

import './Foods.style.scss'

// I know i can create this section with lunch and dinner or other sections but i thought it's more clear if we have more than 1 data in this section
function Mexican() {
	return (
		<div>
			<h3> Mexican </h3>
			<Card foodName='Mexican' />
		</div>
	)
}

export default Mexican
