import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SideBar from "./SideBar";

const NavComponent = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Navbar bg="light" className="mb-3 px-4">
			<Container fluid className="mx-2" >
				<Navbar.Brand className="text-sm-start" to="/" as={Link}>
					E-Commerce
				</Navbar.Brand>
				<Nav className="gap-5">
					<Nav.Link to="/login" as={Link}>
						<PersonIcon/>
					</Nav.Link>
					<Nav.Link to="/purchases" as={Link}>
						<StoreIcon/>
					</Nav.Link>
					<Nav.Link onClick={() => handleShow()}><ShoppingCartIcon/></Nav.Link>
					<SideBar show={show} handleClose={handleClose} />
				</Nav>
			</Container>
		</Navbar>
	);
};

export default NavComponent;
