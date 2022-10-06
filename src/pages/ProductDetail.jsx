import React, { useEffect, useState } from "react";
import { Button, Card, Carousel, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CircleIcon from "@mui/icons-material/Circle";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { postProductCartThunk } from "../store/slices/cart.slice";

const Product = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const products = useSelector(state => state.products);
	const productId = products.find(elem => elem.id === Number(id));
	const [count, setCount] = useState(1);

	const productsCategoryFilter = products.filter(product => {
		return productId.category.id === product.category.id;
	});

	useEffect(() => {
		setCount(1);
	}, [id]);

	const addProduct = () => {
		const product = {
			id: id,
			quantity: count,
		};
		dispatch(postProductCartThunk(product));
	};

	return (
		<div>
			<span>
				<span style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
					Home{" "}
				</span>
				<CircleIcon fontSize="small" /> {productId?.title}
			</span>

			<Row className="mb-5">
				<Col className="d-flex align-items-center justify-content-center">
					<Carousel slide={false} interval="7000" variant="dark">
						{productId?.productImgs.map((item, index) => (
							<Carousel.Item key={index}>
								<img
									className="d-block w-100"
									src={item}
									alt="First slide"
									style={{ maxHeight: "450px", padding: "3em 6em" }}
								/>
								<Carousel.Caption></Carousel.Caption>
							</Carousel.Item>
						))}
					</Carousel>
				</Col>

				<Col className="d-flex flex-column justify-content-center gap-5 p-5">
					<h4>{productId?.title}</h4>
					<div>{productId?.description}</div>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<div>
							<div className="font-weight">Price</div>
							<span className="price-product">${productId?.price}</span>
						</div>
						<div>
							<div className="font-weight">Quantity</div>
							<button
								className="btn-product-detail"
								onClick={() => setCount(count - 1)}
							>
								-
							</button>
							<span className="mx-4">{count}</span>
							<button
								className="btn-product-detail"
								onClick={() => setCount(count + 1)}
							>
								+
							</button>
						</div>
					</div>
					<Button onClick={addProduct}>Add to cart</Button>
				</Col>
			</Row>

			<Row className="gap-small-5 justify-content-center mb-5">
				<h4>Discover similar items</h4>

				{productsCategoryFilter.map(item => (
					<Col lg={3} className="my-5" key={item.id}>
						<Card
							className="card-product"
							onClick={() => navigate(`/shop/${item.id}`)}
						>
							<Card.Img
								variant="top"
								className="img-thumbnail p-3 card-product__img"
								src={item.productImgs}
							/>

							<Card.Body className="pb-0">
								<Card.Title className="mb-4">{item.title}</Card.Title>
								<div className="d-flex justify-content-between align-items-center">
									<div>
										<Card.Subtitle className="my-2">Price</Card.Subtitle>
										<Card.Text style={{ fontSize: "1.2em", fontWeight: "700" }}>
											${item.price}
										</Card.Text>
									</div>
									<Button
										className="btn-product"
										size="sm"
										style={{ backgroundColor: "#aaa" }}
									>
										<LocalGroceryStoreIcon fontSize="medium" />
									</Button>
								</div>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</div>
	);
};

export default Product;
