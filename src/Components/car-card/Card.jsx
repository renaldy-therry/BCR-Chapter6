import React from "react";
import "./Card.css";
import CarImage from "../../Assets/Images/car01.min.jpg";
import CalendarImage from "../../Assets/Images/fi_calendar.png";
import UserImage from "../../Assets/Images/fi_users.png";
import SettingsImage from "../../Assets/Images/fi_settings.png";

import { Button, Card, Col, Row } from "react-bootstrap";

const CarCard = ({ cars }) => {
	return (
		<section className="cars-container mt-4">
			<div className="container">
				<Row>
					{cars.map((car) => (
						<Col className="mb-3" md={4} key={car.id}>
							<Card>
								<Card.Img className="align-self-center" variant="top"
									src={ new URL(`${car.image}?raw=true`, "https://github.com/fnurhidayat/probable-garbanzo/blob/main/public/").href }
								/>
								<Card.Body>
									<Card.Title className="mt-3 mb-1">
										{car.manufacture}
										<span className="text-black-50 ms-2">
											({car.type})
										</span>
									</Card.Title>
									<Card.Text className="card-price mb-1">
										Rp. {car.rentPerDay} / hari
									</Card.Text>
									<Card.Text className="card-desc font-weight-light mb-1">
										{car.description}
									</Card.Text>
									<div className="card-info mt-4">
										<div className="info">
											<p className="kapasitas d-flex mb-0">
												<img src={UserImage} alt="user icon"/>
												<span className="ms-1"> {car.capacity} orang</span>
											</p>
											<p className="transmisi d-flex my-2">
												<img src={SettingsImage} alt="setting icon"/>
												<span className="ms-2"> {car.transmission} </span>
											</p>
											<p className="tahun d-flex mb-2">
												<img src={CalendarImage} alt="calendar icon"/>
												<span className="ms-2"> Tahun {car.year} </span>
											</p>
										</div>
									</div>
									<Button className="button-main w-90 fw-bold" variant="success"> Pilih Mobil </Button>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</div>
		</section>
	);
};

export default CarCard;
