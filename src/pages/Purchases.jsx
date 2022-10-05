import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPurchasesThunk } from "../store/slices/purchases.slice";

const Purchases = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const purchases = useSelector(state => state.purchases);
	useEffect(() => {
		dispatch(getPurchasesThunk());
	}, []);

	return (
		<div>
			<h2>Purchases</h2>
			{
				<ul>
					{purchases.map(purchase => {
						const date = new Date(purchase.createdAt);
						return (
							<li key={purchase.id}>
								{date.toLocaleDateString()}
								<div>
									{purchase.cart.products.map(product => (
										<div
											onClick={() => navigate(`/shop/${product.id}`)}
											key={product.id}
										>
											<div>{product.title}</div>
											<div>{product.productsInCart.quantity}</div>
											<div>{product.price}</div>
										</div>
									))}
								</div>
							</li>
						);
					})}
				</ul>
			}
		</div>
	);
};

export default Purchases;
