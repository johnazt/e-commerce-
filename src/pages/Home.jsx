import axios from "axios";
import React, { useEffect, useState } from "react";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import SearchIcon from "@mui/icons-material/Search";
import {
	Accordion,
	Button,
	Card,
	Col,
	Form,
	InputGroup,
	ListGroup,
	ListGroupItem,
	Row,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductLoading from "../components/ProductLoading";

const Home = () => {
	const products = useSelector(state => state.products);
	const navigate = useNavigate();
	const [category, setCategory] = useState([]);
	const [filterProduct, setFilterProduct] = useState([]);
	const [input, setInput] = useState("");
	const [loaderImg, setLoaderImg] = useState(false);

	useEffect(() => {
		axios
			.get(
				"https://ecommerce-api-react.herokuapp.com/api/v1/products/categories"
			)
			.then(res => setCategory(res.data.data.categories));
	}, []);

	useEffect(() => {
		setFilterProduct(products);
	}, [products]);

	const filterListProducts = category => {
		const filterProducts = products.filter(
			elem => elem.category.id === category
		);
		setFilterProduct(filterProducts);
	};

	useEffect(() => {
		// const searchCoincidence = () => {
		const filterProducts = products.filter(product =>
			product.title.toLowerCase().includes(input.toLowerCase())
		);
		setFilterProduct(filterProducts);
		// };
	}, [input]);

	return (
		<Row className="gap-5">
			<Col lg={2}>
				<Accordion defaultActiveKey="0" alwaysOpen>
					<Accordion.Item eventKey="0">
						<Accordion.Header>Categories</Accordion.Header>
						<Accordion.Body>
							<ListGroup>
								{category.map(elem => (
									<ListGroupItem
										style={{ cursor: "pointer" }}
										onClick={() => filterListProducts(elem.id)}
										key={elem.id}
									>
										{elem.name}
									</ListGroupItem>
								))}
							</ListGroup>
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</Col>

			<Col>
				<Row className="mx-auto w-100">
					<InputGroup className="d-flex align-items-center">
						<Form.Control
							placeholder="What are you looking for?"
							value={input}
							onChange={e => setInput(e.target.value)}
						/>
						{/* <Button variant="outline-secondary" onClick={searchCoincidence}>
					Button
				</Button> */}
						<SearchIcon
							fontSize="large"
							style={{
								backgroundColor: "#f7f7f9",
								height: "100%",
								padding: ".1em",

							}}
							
						/>
					</InputGroup>
				</Row>

				<Row xs={1} md={2} lg={3} className="g-5 my-5 ">
					{filterProduct.map(product => (
						<Col key={product.id} className="md-4">
							<Card
								className="card-product"
								onClick={() => navigate(`/shop/${product.id}`)}
							>
								{!loaderImg && <ProductLoading />}
								<Card.Img
									variant="top"
									className="img-thumbnail p-3 card-product__img"
									src={product.productImgs}
									onLoad={() => setLoaderImg(true)}
								/>

								<Card.Body className="pb-0">
									<Card.Title className="mb-4">{product.title}</Card.Title>
									<div className="d-flex justify-content-between align-items-center">
										<div>
											<Card.Subtitle className="my-2">Price</Card.Subtitle>
											<Card.Text
												style={{ fontSize: "1.2em", fontWeight: "700" }}
											>
												${product.price}
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
			</Col>
		</Row>
	);
};

export default Home;
