import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

import Logo from './../../assets/opeqe-logo.svg'
import './navBar.style.scss'

export default function ButtonAppBar() {
	return (
		<div className='navbar'>
			<AppBar position='static'>
				<Toolbar className='navbar__typography'>
					<Typography variant='h6'>
						<img
							src={Logo}
							alt='Opeqe Logo'
							style={{
								width: '170px',
								height: '50px',
								verticalAlign: 'middle',
								marginLeft: '5rem',
							}}
						/>
					</Typography>
					<div>
						<Button color='dark'>Orders</Button>
						<Button >Locations</Button>
						<Button variant='outlined' color='dark'>
							Log In
						</Button>
						<Button
							variant='contained'
							style={{ backgroundColor: '#000', color: 'rgb(255, 210, 0)' }}
						>
							Sign Up
						</Button>
						<IconButton style={{ color: '#000' }} className='navbar__icon'>
							<ShoppingBasketIcon style={{ fontSize: '2rem' }} />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	)
}
