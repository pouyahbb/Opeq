import React , { useEffect , useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { useMediaPredicate } from 'react-media-hook'

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

import Logo from './../../assets/opeqe-logo.svg'
import HeaderImage from './../../assets/HomeHeader.jpg'
import './navBar.style.scss'

export default function ButtonAppBar() {
	// Make responsive when maxSize is 750px
	const checkPageSize = useMediaPredicate('(max-width : 750px)')

	// Change the backgrundColor of navBar when scrolling
	const [changeColor , setChangeColor] = useState(false)
	const listenScrollEvent = e => {
		if(window.scrollY > 400){
			setChangeColor(true)
		}else{
			setChangeColor(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll' , listenScrollEvent)
	})

	return (
		<div className='navbar'>
			{checkPageSize ? (
				<AppBar position='static'>
					<Toolbar
						style={{ backgroundColor: changeColor ? '#eaeaea' : 'rgb(255, 210, 0)' }}
						className='navbar__typography'
					>
						<Typography variant='h6'>
							<img
								src={Logo}
								alt='Opeqe Logo'
								style={{
									width: '120px',
									height: '30px',
									verticalAlign: 'middle',
								}}
							/>
						</Typography>
						<div>
							<Button style={{ fontSize: '.7rem' }} variant='outlined'>
								Log In
							</Button>
							<IconButton style={{ color: '#000' }} className='navbar__icon'>
								<ShoppingBasketIcon style={{ fontSize: '1.5rem' }} />
							</IconButton>
						</div>
					</Toolbar>
					<img src={HeaderImage} alt='HomeHeader' />
				</AppBar>
			) : (
				<AppBar position='sticky'>
					<Toolbar
						style={{ backgroundColor: changeColor ? '#eaeaea' : 'rgb(255, 210, 0)' }}
						className='navbar__typography'
					>
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
							<Button>Orders</Button>
							<Button>Locations</Button>
							<Button variant='outlined'>Log In</Button>
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
					<img src={HeaderImage} alt='HomeHeader' />
				</AppBar>
			)}
		</div>
	)
}
