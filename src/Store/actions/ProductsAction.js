import axios from 'axios';
import {
	GET_PRODUCTS,
	GET_PRODUCTS_BY_CATEGORY,
	PRODUCTS_ERRORS,

} from './types';

/**
 * get the list of the Products
 */
export const getProducts = () => dispatch => {
	axios
		.get(`http://localhost:3000/product`)
		.then(response => {
			console.log(response);

			return { response: response, error: null };
		})
		.catch(err => {

			return { response: null, error: err };
		})
		.then(result => {
			if (result.error == null) {
				dispatch({
					type: GET_PRODUCTS,
					payload: result.response.data,
				});
			} else {
				dispatch({
					type: PRODUCTS_ERRORS,
				});
			}
		});

};

/**
 * get the list of the Products by category
 */
export const getProductsByCategory = (value) => dispatch => {
	axios
		.get(`http://localhost:3000/product/search/${value}`)
		.then(response => {

			return { response: response, error: null };
		})
		.catch(err => {

			return { response: null, error: err };
		})
		.then(result => {
			if (result.error == null) {
				dispatch({
					type: GET_PRODUCTS_BY_CATEGORY,
					payload: result.response.data,
				});
			} else {
				dispatch({
					type: PRODUCTS_ERRORS,
				});
			}
		});

};


