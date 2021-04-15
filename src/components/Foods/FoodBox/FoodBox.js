import React from 'react'

import { isEmpty } from 'lodash'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import AccessAlarmIcon from '@material-ui/icons/AccessAlarm'

import FoodsApi from '../../../api/foodsApi'
import './FoodBox.style.scss'

export const FoodBox = ({ foodName }) => {
	const foodApi = FoodsApi.find((fa) => fa.name === foodName)

	if (isEmpty(foodApi)) {
		return
	}

	return (foodApi.data ?? []).map((food) => (
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
					<h2 className='card__food--type'>{food.type}</h2>
					<span className='card__food--location'> {food.location} </span>
					<Grid
						justify='space-between'
						alignItems='center'
						style={{ marginTop: '1rem', fontWeight: 'bolder' }}
					>
						<span className='card__food--timeToReady'>
							<AccessAlarmIcon />
							{food.timeToReady} Mins
						</span>
						<span className='card__food--price'>${food.price}</span>
					</Grid>
				</CardContent>
			</CardActionArea>
		</Card>
	))
}
export default FoodBox
