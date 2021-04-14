import React from 'react'

import IconButton from '@material-ui/core/IconButton'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import YouTubeIcon from '@material-ui/icons/YouTube'

import FooterImage from './../../assets/footerTop.svg'
import './footer.style.scss'

function Footer() {
	return (
		<div className='footer'>
			<img src={FooterImage} alt='Footer' />
			<div className='footer__content'>
				<div className='footer__header'>
					<ul className='footer__header--lists'>
						<li className='footer__header--list'>About</li>
						<li className='footer__header--list'>Services</li>
						<li className='footer__header--list'>Support</li>
						<li className='footer__header--list'>Gallery</li>
						<li className='footer__header--list'>Terms</li>
						<li className='footer__header--list'>Locations</li>
					</ul>
				</div>
				<div className='footer__body'>
					<div className='footer__body--menu'>
						<ul className='footer__body--lists'>
							<h4> Main Menu </h4>
							<li className='footer__body--list'>Pickup</li>
							<li className='footer__body--list'>Delivery</li>
						</ul>
					</div>
					<div className='footer__body--orders'>
						<ul className='footer__body--lists'>
							<h4> Orders </h4>
							<li className='footer__body--list'>Upcoming Orders</li>
							<li className='footer__body--list'>Recent Orders</li>
						</ul>
					</div>
					<div className='footer__body--profile'>
						<ul className='footer__body--lists'>
							<h4> Profile </h4>
							<li className='footer__body--list'> Promos & Credits </li>
							<li className='footer__body--list'>Rewards</li>
						</ul>
					</div>
					<div className='footer__body--support'>
						<ul className='footer__body--lists'>
							<h4> Support </h4>
							<li className='footer__body--list'> Contact Us </li>
							<li className='footer__body--list'>Live Chat</li>
						</ul>
					</div>
				</div>
				<div className='footer__footer'>
					<p className='footer__footer--text'>
						Delight customers everywhere with a branded custom-built native iOS,
						native Android and Installable Website Application. Opeqe is
						reliable, fast and commission free all-in-one ordering solutions for
						multi-location or single location restaurants.
					</p>
					<div className='footer__footer--companyInfo'>
						<div className='footer__footer--companyLeftSide'>
							<p className='footer__footer--copy'> &copy; 2019 OPEQE INC </p>
							<ul className='footer__footer--lists'>
								<li className='footer__footer--list'>Term And Conditions</li>
								<li className='footer__footer--list'>| Privacy Policy</li>
							</ul>
						</div>
						<div className='footer__footer--companyRightSide'>
							<button className='footer__footer--companyRightSideBtn'>
								<InstagramIcon />
							</button>
							<button className='footer__footer--companyRightSideBtn'>
								<TwitterIcon />
							</button>
							<button className='footer__footer--companyRightSideBtn'>
								<FacebookIcon />
							</button>
							<button className='footer__footer--companyRightSideBtn'>
								<YouTubeIcon />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
