import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import AccessAlarmIcon from '@material-ui/icons/AccessAlarm'


import FoodsApi from './../api/foodsApi'
import './card.style.scss'

export default function ImgMediaCard({ foodName }) {
	return FoodsApi.filter((food) => {
		return food.name === foodName
	}).map((foods) => {
		return foods.data.map((food) => {
			return (
				<Card className='card' key={food.id}>
					<CardActionArea>
						<CardMedia
							component='img'
							alt={food.foodName}
							image={food.image}
							title={food.foodName}
						/>
						<CardContent>
							<Typography gutterBottom variant='h5' component='h2'>
								{food.foodName}
							</Typography>
							<h2 className='card__food--type' style={{}}>
								{food.type}
							</h2>
							<span className='card__food--location'> {food.location} </span>
							<div className='card__footer'>
                <span className='card__food--timeToReady' >
                    <AccessAlarmIcon />
                    { food.timeToReady } Mins
                </span>
                <span className='card__food--price'>
                  ${food.price}
                </span>
              </div>
						</CardContent>
					</CardActionArea>

					
				</Card>
			)
		})
	})
}
