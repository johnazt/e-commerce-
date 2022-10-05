import React from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
const Product = () => {
	const { id } = useParams();

	const products = useSelector(state => state.products);
	const productId = products.find(elem => elem.id === Number(id));

	const productsCategoryFilter = products.filter(product => {
		return productId.category.id === product.category.id;
	});

	return (
		<Row>
			<Col>
				<h1>{productId.category.name}</h1>
				<h3>{productId.title}</h3>
				<img src={productId.productImgs} className="img-fluid" />
			</Col>
			<Col lg={3}>
				<ListGroup>
					{productsCategoryFilter.map(item => (
						<Link key={item.id} to={`/shop/${item.id}`}>
							{item.title}
							<img src={item.productImgs} className="img-fluid" />
						</Link>
					))}
				</ListGroup>
			</Col>
		</Row>
	);
};

export default Product;
