import React from 'react'

import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import YouTubeIcon from '@material-ui/icons/YouTube'

import FooterImage from './../../assets/footerTop.svg'
import './Footer.style.scss'

const headerList = [
	'About',
	'Services',
	'Support',
	'Gallery',
	'Terms',
	'Locations',
]

const footerBody = {
	menu: {
		label: 'Main Menu',
		items: ['Pickup', 'Delivery'],
	},
	orders: {
		label: 'Orders',
		items: ['Upcoming Orders', 'Recent Orders'],
	},
	profile: {
		label: 'Profile',
		items: ['Promos & Credits', 'Rewards'],
	},
	support: {
		label: 'Support',
		items: ['Contact Us', 'Live Chat'],
	},
}

const socialIcons = [InstagramIcon, TwitterIcon, FacebookIcon, YouTubeIcon]
export const Footer = () => {
	return (
		<div className='footer'>
			<img src={FooterImage} alt='Footer' />
			<div className='footer__content'>
				<div className='footer__header'>
					<ul className='footer__header--lists'>
						{headerList.map((header, idx) => (
							<li className='footer__header--list' key={header + idx}>
								{header}
							</li>
						))}
					</ul>
				</div>
				<div className='footer__body'>
					{Object.entries(footerBody).map(([fbName, fb], idx) => (
						<div className={`footer__body--${fbName}`} key={fbName + idx}>
							<ul className='footer__body--lists'>
								<h4> {fb.label} </h4>
								{fb.items.map((item, index) => (
									<li className='footer__body--list' key={item + index}>
										{item}
									</li>
								))}
							</ul>
						</div>
					))}
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
							{socialIcons.map((Cmp , index) => (
								<button key={index}  className='footer__footer--companyRightSideBtn'>
									<Cmp />
								</button>
							))}						
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
