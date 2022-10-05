import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import SideBar from "./SideBar";

const NavComponent = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Navbar bg="light" className="mb-3">
			<Container fluid className="mx-2" >
				<Navbar.Brand className="text-sm-start" to="/" as={Link}>
					E-Commerce
				</Navbar.Brand>
				<Nav>
					<Nav.Link to="/login" as={Link}>
						Log In
					</Nav.Link>
					<Nav.Link to="/purchases" as={Link}>
						Purchases
					</Nav.Link>
					<Nav.Link onClick={() => handleShow()}>Shop</Nav.Link>
					<SideBar show={show} handleClose={handleClose} />
				</Nav>
			</Container>
		</Navbar>
	);
};

export default NavComponent;
