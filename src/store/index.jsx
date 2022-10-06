import { configureStore } from "@reduxjs/toolkit";
import isloadingSlice from "./slices/isloading.slice";
import productsSlice from "./slices/products.slice";
import purchasesSlice from "./slices/purchases.slice";
import cartSlice from "./slices/cart.slice";

export default configureStore({
	reducer: {
		isLoading: isloadingSlice,
		products: productsSlice,
		purchases: purchasesSlice,
		cart: cartSlice,
	},
});
