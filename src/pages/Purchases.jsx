import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPurchasesThunk } from "../store/slices/purchases.slice";
import CircleIcon from "@mui/icons-material/Circle";
import Box from "@mui/material/Box";

import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";

const Purchases = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const purchases = useSelector(state => state.purchases);
	useEffect(() => {
		dispatch(getPurchasesThunk());
	}, []);

	return (
		<div>
			<span>
				<span style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
					Home{" "}
				</span>
				<CircleIcon fontSize="1em" /> purchases
			</span>
			<Box my={4}>
				<h4>My purchases</h4>
			</Box>
			<Box mb={20} sx={{ maxWidth: 850, margin: "0 auto" }}>
				<TableContainer>
					{purchases.map(purchase => {
						const date = new Date(purchase.createdAt);
						const options = {
							weekday: "long",
							year: "numeric",
							month: "long",
							day: "numeric",
						};
						return (
							<Table
								key={purchase.id}
								sx={{ border: "1px solid #ccc", marginBottom: "5em" }}
							>
								<TableHead>
									<TableRow sx={{ backgroundColor: "#ccc" }}>
										<TableCell
											className="purchase-date"

											sx={{
												fontWeight: "600",
												padding: "1em .7em",
												display: "block",
											}}
										>
											{date.toLocaleDateString(undefined, options)}
										</TableCell>
										<TableCell align="center">Quantity</TableCell>
										<TableCell align="center">Price</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{purchase.cart.products.map(product => (
										<TableRow key={product.id}>
											<TableCell
												onClick={() => navigate(`/shop/${product.id}`)}
												align="left"
												sx={{ cursor: "pointer" }}
											>
												{product.title}
											</TableCell>
											<TableCell align="center">
												{product.productsInCart.quantity}
											</TableCell>
											<TableCell align="center" sx={{ fontWeight: "700", paddingX:"0" }}>
												$ {product.price * product.productsInCart.quantity}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						);
					})}
				</TableContainer>
			</Box>
		</div>
	);
};

export default Purchases;
