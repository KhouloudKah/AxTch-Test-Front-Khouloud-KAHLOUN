import {
	GET_PRODUCTS,
	GET_PRODUCTS_BY_CATEGORY,
} from '../actions/types';
const initialState = {
	products_list: [],
	products_list_by_category: [],

};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_PRODUCTS:
			return{ ...state,products_list: action.payload}
		case GET_PRODUCTS_BY_CATEGORY:
			return{ ...state,products_list_by_category: action.payload}

		default:
			return state

	}

};
