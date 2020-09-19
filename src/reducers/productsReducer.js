import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    START_DOWNLOAD_PRODUCTS,
    DOWNLOAD_PRODUCTS_SUCCESS,
    DOWNLOAD_PRODUCTS_ERROR,
    GET_DELETE_PRODUCT,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_ERROR,
    GET_EDIT_PRODUCT,
    EDIT_PRODUCT_SUCCESS,
    EDIT_PRODUCT_ERROR,
} from '../types'

// each reducer has its own state

const initialState = {
    products: [],
    error: null, 
    loading: false,
    productdelete: null,
    editproduct: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case START_DOWNLOAD_PRODUCTS: 
        case ADD_PRODUCT: 
            return {
                ...state, 
                loading: action.payload
            }
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state, 
                loading: false,
                products: [ ...state.products, action.payload ]
            }
        case EDIT_PRODUCT_ERROR:
        case DELETE_PRODUCT_ERROR:
        case DOWNLOAD_PRODUCTS_ERROR:
        case ADD_PRODUCT_ERROR: 
            return {
                ...state, 
                loading: false, 
                error: action.payload
            }
        case DOWNLOAD_PRODUCTS_SUCCESS: 
            return {
                ...state, 
                loading: false,
                error: null,
                products: action.payload
            }
        case GET_DELETE_PRODUCT: 
            return {
                ...state,
                productdelete: action.payload
            }
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                products: state.products.filter( product => product.id !== state.productdelete ),
                productdelete: null
            }
        case GET_EDIT_PRODUCT: 
            return {
                ...state,
                editproduct: action.payload
            }
        case EDIT_PRODUCT_SUCCESS: 
            return {
                ...state,
                editproduct: null, 
                products: state.products.map( product => product.id === action.payload.id ? product = action.payload : product )
            }
        default: 
            return state;
    }
}