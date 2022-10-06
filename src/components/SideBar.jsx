import React, { useEffect } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { checkoutCartThunk, deleteProductCartThunk, getCartThunk } from "../store/slices/cart.slice";
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
			<Offcanvas.Body>
				<div style={{ height: "500px", overflow: "auto" }}>
					{cart.map(product => (
						<div
							key={product.id}
							className="d-flex flex-column p-3 mb-4  border-bottom"
						>
							<div className="d-flex justify-content-between">
								<small>{product.brand}</small>
								<DeleteIcon onClick={() => dispatch(deleteProductCartThunk(product.id))} className="delete-product details-color" />
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
							<div className="align-self-end">
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
						<span className="text-price">
							${" "}
							{cart.reduce(
								(acc, elem) =>
									acc + Number(elem.price * elem.productsInCart.quantity),
								0
							)}
						</span>
					</div>
					<Button
						onClick={() => dispatch(checkoutCartThunk())}
						className="w-100 btn-bg"
					>
						Checkout
					</Button>
				</div>
			</Offcanvas.Body>
		</Offcanvas>
	);
};

export default SideBar;
