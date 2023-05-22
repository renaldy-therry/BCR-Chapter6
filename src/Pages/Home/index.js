import React from "react";
import NavbarComp from "../../Components/navbar/Navbar";
import Cta from "./Cta";
import Faq from "./Faq";
import Footer from "./Footer";
import Hero from "./Hero";
import Service from "./Service";
import Testimonial from "./Testimonial";
import WhyUs from "./WhyUs";

const Home = () => {
	return (
		<div>
			<NavbarComp />
			<main>
				<Hero />
				<Service />
				<WhyUs />
				<Testimonial />
				<Cta />
				<Faq />
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Home;
