import React from 'react'

import LunchAndDinner from './lunchAndDinner'
import Mexican from './mexican'
import Pizza from './pizza'
import Japanese from './Japanese'

import './Foods.style.scss'

function Foods() {
  return (
    <div className="foods">
      <LunchAndDinner />
      <Mexican />
      <Japanese />
      <Pizza />
    </div>
  )
}

export default Foods
