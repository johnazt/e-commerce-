import React, { useEffect } from "react";
import { Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartThunk } from "../store/slices/cart.slice";

const SideBar = ({ show, handleClose }) => {
	const dispatch = useDispatch();
	const cart = useSelector(state => state.cart);

	useEffect(() => {
		dispatch(getCartThunk());
	}, []);

	return (
		<Offcanvas show={show} onHide={handleClose} placement="end">
			<Offcanvas.Header closeButton>
				<Offcanvas.Title>Shop Cart</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body>
				<ul>
					{cart.map(product => (
						<li key={product.id}>
							<Link to={`/shop/${product.productsInCart.productId}`}>
								<div>{product.title}</div>
								<div>{product.price}</div>
							</Link>
						</li>
					))}
				</ul>
			</Offcanvas.Body>
		</Offcanvas>
	);
};

export default SideBar;
