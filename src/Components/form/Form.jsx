import React, { useState } from "react";
import "./Form.css";
import CalendarImg from "../../Assets/Images/fi_calendar.png";
import UserImg from "../../Assets/Images/fi_users.png";
import {
	Form,
	Row,
	Col,
	FormControl,
	InputGroup,
	Button,
} from "react-bootstrap";

const FormComp = ({ getCarsData }) => {
	const [form, setForm] = useState([]);
	return (
		<section className="form-section">
			<div className="container">
				<div className="form-container mx-auto">
					<Form
						className="form-row"
						id="form"
						onSubmit={(e) => {e.preventDefault(); getCarsData(form)}}
					>
						<Row>
							<Col>
								<Form.Group>
									<Form.Label htmlFor="driver">
										Tipe Driver
									</Form.Label>
									<Form.Select
										className="form-control"
										aria-label="Select driver"
										id="driver"
										onChange={(e) =>
											setForm({
												...form,
												driver: e.target.value,
											})
										}
										defaultValue={""}
										required
									>
										<option disabled value="">
											Pilih Tipe Driver
										</option>
										<option value="true">
											Dengan Sopir
										</option>
										<option value="false">
											Tanpa Sopir (Lepas Kunci)
										</option>
									</Form.Select>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group>
									<Form.Label htmlFor="datePickerId">
										Tanggal
									</Form.Label>
									<InputGroup className="input-group">
										<FormControl
											className="tanggal"
											type="date"
											aria-label="Date"
											id="datePickerId"
											onChange={(e) =>
												setForm({
													...form,
													date: e.target.value,
												})
											}
											required
										/>
										<InputGroup.Text>
											<img
												src={CalendarImg}
												alt="calendar"
											/>
										</InputGroup.Text>
									</InputGroup>
								</Form.Group>
							</Col>
							<Col>
								<Form.Label htmlFor="hour">
									Waktu Jemput/Ambil
								</Form.Label>
								<Form.Select
									className="form-control"
									aria-label="Waktu jemput"
									id="hour"
									defaultValue={""}
									required
									onChange={(e) =>
										setForm({
											...form,
											hour: e.target.value,
										})
									}
								>
									<option disabled value="">
										Pilih Waktu
									</option>
									<option value="8">08.00 WIB</option>
									<option value="9">09.00 WIB</option>
									<option value="10">10.00 WIB</option>
									<option value="11">11.00 WIB</option>
									<option value="12">12.00 WIB</option>
								</Form.Select>
							</Col>
							<Col>
								<Form.Group>
									<Form.Label htmlFor="capacity">
										Jumlah Penumpang (optional)
									</Form.Label>
									<InputGroup className="input-group">
										<FormControl
											className="penumpang"
											aria-label="Jumlah penumpang"
											id="capacity"
											onChange={(e) =>
												setForm({
													...form,
													capacity: e.target.value,
												})
											}
										/>
										<InputGroup.Text>
											<img src={UserImg} alt="User" />
										</InputGroup.Text>
									</InputGroup>
								</Form.Group>
							</Col>
							<Col
								md={1}
								className="button-wrap d-flex align-items-end"
							>
								<Button
									className="main__button font-weight-bold border-0"
									variant="success"
									type="submit"
									// onClick={(e) => getCarsData(form)}
								>
									Cari Mobil
								</Button>
							</Col>
						</Row>
					</Form>
				</div>
			</div>
		</section>
	);
};

export default FormComp;
