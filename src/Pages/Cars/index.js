import React, { useEffect, useState } from "react";
import Form from "../../Components/form/Form";
import NavbarComp from "../../Components/navbar/Navbar";
import Footer from "../Home/Footer";
import Hero from "./Hero";
import CarCard from "../../Components/car-card/Card";
import axios from "axios";

const Cars = () => {
	const [cars, setCars] = useState([]);

	const getCarsData = async (form) => {
		try {
			const response = await axios.get(
					"https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
				),
				FilteredDatas = [],
				inputDate = new Date(form.date),
				inputDateTime = new Date(inputDate.setHours(form.hour, 0, 0));
			if (!form.capacity) form.capacity = 0;

			response.data.forEach((car) => {
				const carDate = new Date(car.availableAt);
				if (
					car.capacity > form.capacity &&
					inputDateTime >= carDate &&
					car.available === true
				) {
					FilteredDatas.push(car);
				}
			});
			setCars(FilteredDatas);
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div>
			<NavbarComp />
			<main>
				<Hero />
				<Form getCarsData={getCarsData} />
				<CarCard cars={cars} />
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Cars;
