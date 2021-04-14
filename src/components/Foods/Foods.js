import React from 'react'

import LunchAndDinner from './lunchAndDinner'
import Mexican from './mexican'
import Pizza from './pizza'
import Japanese from './Japanese'
import Soup from './Soup'
import Salad from './salad';
import Breakfast from './Breakfast'

import './Foods.style.scss'

function Foods() {
  return (
    <div className="foods">
      <LunchAndDinner />
      <Mexican />
      <Japanese />
      <Pizza />
      <Breakfast />
      <Salad />
      <Soup />
    </div>
  )
}

export default Foods
