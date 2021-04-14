import React from 'react'
import Card from './../../shared/card'

import './Foods.style.scss'

function Pizza() {
  return (
    <div>
      <h3> Pizza </h3>
      <div className="foods__card">
        <Card foodName="pizza" />
      </div>
    </div>
  )
}

export default Pizza
