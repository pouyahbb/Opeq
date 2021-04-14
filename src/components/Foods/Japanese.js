import React from 'react'
import Card from '../../shared/card'

import './Foods.style.scss'

function Japanese() {
  return (
		<div>
			<h3>Japanese</h3>
      <div className="foods__card">
        <Card foodName="Japanese" />
      </div>
		</div>
	)
}

export default Japanese
