import React, { useEffect } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartThunk } from "../store/slices/cart.slice";
import DeleteIcon from "@mui/icons-material/Delete";

const SideBar = ({ show, handleClose }) => {
	const dispatch = useDispatch();
	const cart = useSelector(state => state.cart);

	useEffect(() => {
		dispatch(getCartThunk());
	}, []);

	// console.log(cart)

	return (
		<Offcanvas show={show} onHide={handleClose} placement="end">
			<Offcanvas.Header closeButton>
				<Offcanvas.Title className="ms-3 mt-3">Shop Cart</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body >
				<div >
					{cart.map(product => (
						<div key={product.id} className="d-flex flex-column px-3 mb-3">
							<div className="d-flex justify-content-between">
								<small>{product.brand}</small>
								<DeleteIcon className="delete-product" color="error" />
							</div>
							<Link
								style={{ textDecoration: "none" }}
								to={`/shop/${product.productsInCart.productId}`}
							>
								<h5>{product.title}</h5>
							</Link>
							<span className="quantity-shop">
								{product.productsInCart.quantity}
							</span>
							<div className="align-self-end"  >
								<small>Total:</small>{" "}
								<span className="font-weight price-product">
									$ {product.price * product.productsInCart.quantity}
								</span>
							</div>
						</div>
					))}
				</div>
				<div className="total-product px-3">
					<div className="d-flex justify-content-between mb-3 pt-5 border-top">
						<span>Total:</span>
						<span className="text-price">$ 345345</span>
					</div>
					<Button className="w-100" >Checkout</Button>
				</div>
			</Offcanvas.Body>
		</Offcanvas>
	);
};

export default SideBar;
