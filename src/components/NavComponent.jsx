import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import PersonIcon from "@mui/icons-material/Person";
import StoreIcon from "@mui/icons-material/Store";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SideBar from "./SideBar";
import "../index.css"


const NavComponent = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Navbar className="mb-3 px-sm-1 px-lg-4 nav-bg">
			<Container fluid className="mx-2">
				<Navbar.Brand className="text-sm-start navbar-brand" to="/" as={Link}>
					E-Commerce
				</Navbar.Brand>
				<Nav className="gap-lg-5">
					<Nav.Link to="/login" as={Link}>
						<PersonIcon className="nav-link-color" />
					</Nav.Link>
					<Nav.Link to="/purchases" as={Link}>
						<StoreIcon className="nav-link-color" />
					</Nav.Link>
					<Nav.Link onClick={() => handleShow()}>
						<ShoppingCartIcon className="nav-link-color"/>
					</Nav.Link>
					<SideBar show={show} handleClose={handleClose} />
					
				</Nav>
			</Container>
		</Navbar>
	);
};

export default NavComponent;
