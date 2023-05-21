import React from 'react'
import "./Footer.css"
import Facebook from "../../Assets/Images/facebook.png";
import Instagram from "../../Assets/Images/instagram.png";
import Twitter from "../../Assets/Images/twitter.png";
import Mail from "../../Assets/Images/mail.png";
import Twitch from "../../Assets/Images/twitch.png";
import { NavLink } from 'react-router-dom';

const Footer = () => {
	const links = [
		{
			title: "Our Services",
			href: "#service",
		},
		{
			title: "Why Us",
			href: "#why-us",
		},
		{
			title: "Testimonial",
			href: "#testimonial",
		},
		{
			title: "FAQ",
			href: "#faq",
		},
	];
	return (
		<footer className="footer">
			<div className="container">
				<div className="row">
					<div className="col">
						<p className="paragraph">
							Jalan Suroyo No. 161 Mayangan Kota Probolinggo
							672000
						</p>
						<p className="paragraph">binarcarrental@gmail.com</p>
						<p className="paragraph">081-233-334-808</p>
					</div>

					<div className="col">
						{links.map((link, index) => (
							<a
								href={link.href}
								className="paragraph d-block"
								key={index}
							>
								{link.title}
							</a>
						))}
					</div>

					<div className="col">
						<p className="paragraph">Connect with us</p>
						<div className="footer__icon-wrap d-flex">
							<a href="#">
								<img src={Facebook} alt="Facebook Icon" />
							</a>
							<a href="#">
								<img src={Instagram} alt="Instagram Icon" />
							</a>
							<a href="#">
								<img src={Twitter} alt="Twitter Icon" />
							</a>
							<a href="#">
								<img src={Mail} alt="Mail Icon" />
							</a>
							<a href="#">
								<img src={Twitch} alt="Twitch Icon" />
							</a>
						</div>
					</div>

					<div className="col">
						<p className="paragraph">Copyright Binar 2022</p>
						<NavLink to='/' className="nav-logo" exact="true"></NavLink>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
