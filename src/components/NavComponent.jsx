import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";

const NavComponent = () => {
	return (
		<Navbar bg="light" expand="md" className="mb-3">
			<Container fluid>
				<Navbar.Brand to="/" as={Link}>
					E-Commerce
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Offcanvas placement="end">
					<Offcanvas.Header closeButton>
						<Offcanvas.Title>Navegation Bar</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Nav className="justify-content-end flex-grow-1 pe-3">
							<Nav.Link to="/purchases" as={Link}>
								Purchases
							</Nav.Link>
							<Nav.Link href="#action2">Shop</Nav.Link>
							<Nav.Link to="/login" as={Link}>
								Log In
							</Nav.Link>
							<Nav.Link onClick={() => localStorage.setItem("token", "")}>
								Log Out
							</Nav.Link>
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
};

export default NavComponent;
