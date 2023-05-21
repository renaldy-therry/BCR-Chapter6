import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Button from "../button/Button";

const NavbarComp = () => {
	return (
		<header className="py-2">
			<Navbar expand="lg">
				<Container className="px-0">
					<NavLink className="nav-logo p-0" to="/" />
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Link
								className="nav-link text-dark"
								href="#servicehome"
							>
								Our Services
							</Nav.Link>
							<Nav.Link
								className="nav-link text-dark"
								href="#why-us"
							>
								Why Us
							</Nav.Link>
							<Nav.Link
								className="nav-link text-dark"
								href="#testimonial"
							>
								Testimonial
							</Nav.Link>
							<Nav.Link
								className="nav-link text-dark"
								href="#faq"
							>
								FAQ
							</Nav.Link>
							<Button to="/cars" text="Register" />
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default NavbarComp;
