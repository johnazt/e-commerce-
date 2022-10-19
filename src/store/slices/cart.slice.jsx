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

export const getCartThunk = () => async dispatch => {
	dispatch(setIsLoading(true));
	try {
		try {
			const res = await axios
				.get("https://ecommerce-api-react.herokuapp.com/api/v1/cart", getConfig());
			return dispatch(setCart(res.data.data.cart.products));
		} catch (error) {
			if (error.response.status === 404) {
				dispatch(setCart({}));
			}
		}
	} finally {
		return dispatch(setIsLoading(false));
	}
};

export const postProductCartThunk = product => async dispatch => {
	dispatch(setIsLoading(true));
	try {
		try {
			await axios
				.post(
					"https://ecommerce-api-react.herokuapp.com/api/v1/cart",
					product,
					getConfig()
				);
			return dispatch(getCartThunk());
		} catch (error) {
			return console.log(error.response);
		}
	} finally {
		return dispatch(setIsLoading(false));
	}
};

export const checkoutCartThunk = () => async dispatch => {
	dispatch(setIsLoading(true));
	try {
		await axios
			.post(
				"https://ecommerce-api-react.herokuapp.com/api/v1/purchases",
				{},
				getConfig()
			);
		return dispatch(setCart([]));
	} finally {
		return dispatch(setIsLoading(false));
	}
};

export const deleteProductCartThunk = id => async dispatch => {
	dispatch(setIsLoading(true));
	try {
		try {
			await axios
				.delete(
					`https://ecommerce-api-react.herokuapp.com/api/v1/cart/${id}`,
					getConfig()
				);
			return dispatch(getCartThunk());
		} catch (error) {
			return console.log(error.response);
		}
	} finally {
		return dispatch(setIsLoading(false));
	}
};

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
