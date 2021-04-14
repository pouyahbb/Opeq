import React from 'react'
import Card from './../../shared/card'

import './Foods.style.scss'

function Breakfast() {
  return (
		<div>
			<h3> BreakFast </h3>
      <div className="foods__card">
        <Card foodName="Breakfast" />
      </div>
		</div>
	)
}

export default Breakfast
