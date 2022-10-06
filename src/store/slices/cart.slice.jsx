import { createSlice } from "@reduxjs/toolkit";
import getConfig from "../../utils/getConfig";
import { setIsLoading } from "./isloading.slice";
import axios from "axios";
export const cartSlice = createSlice({
	name: "cart",
	initialState: [],
	reducers: {
		setCart: (state, action) => {
			const cart = action.payload;
			return cart;
		},
	},
});

export const getCartThunk = () => dispatch => {
	dispatch(setIsLoading(true));
	return axios
		.get("https://ecommerce-api-react.herokuapp.com/api/v1/cart", getConfig())
		.then(res => dispatch(setCart(res.data.data.cart.products)))
		.catch(error => {
			if (error.response.status === 404) {
				dispatch(setCart({}));
			}
		})

		.finally(() => dispatch(setIsLoading(false)));
};

export const postProductCartThunk = product => dispatch => {
	dispatch(setIsLoading(true));
	return axios
		.post(
			"https://ecommerce-api-react.herokuapp.com/api/v1/cart",
			product,
			getConfig()
		)
		.then(() => dispatch(getCartThunk()))
		.catch(error => console.log(error.response))
		.finally(() => dispatch(setIsLoading(false)));
};

export const checkoutCartThunk = () => dispatch => {
	dispatch(setIsLoading(true));
	return axios
		.post(
			"https://ecommerce-api-react.herokuapp.com/api/v1/purchases",
			{},
			getConfig()
		)
		.then(() => dispatch(setCart([])))
		.finally(() => dispatch(setIsLoading(false)));
};

export const deleteProductCartThunk = id => dispatch => {
	dispatch(setIsLoading(true));
	return axios
		.delete(
			`https://ecommerce-api-react.herokuapp.com/api/v1/cart/${id}`,
			getConfig()
		)
		.then(() => dispatch(getCartThunk()))
		.catch(error => console.log(error.response))
		.finally(() => dispatch(setIsLoading(false)));
};

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
