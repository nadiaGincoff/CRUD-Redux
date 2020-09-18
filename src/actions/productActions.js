import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    START_DOWNLOAD_PRODUCTS,
    DOWNLOAD_PRODUCTS_SUCCESS,
    DOWNLOAD_PRODUCTS_ERROR
} from '../types'

import axiosClient from '../config/axios'
import Swal from 'sweetalert2'
// Create new products
export function createNewProductAction(product) {
    return async (dispatch) => {
        dispatch( addProduct() );
        try {
            // insert in API
            await axiosClient.post('/products', product);
            // if okey, update state
            dispatch( addProductSuccess(product) );
            // alert
            Swal.fire(
                'Correct',
                'The product has been added successfully',
                'success'
            )
        } catch (error) {
            console.log(error)
            // if error, change state
            dispatch( addProductError(true) );
            // error alert
            Swal.fire({
                icon: 'error',
                title: 'There was a mistake',
                text: 'There was a mistake, try again'
            })
        }
    }
}

const addProduct = () => ({
    type: ADD_PRODUCT,
    payload: true
})

const addProductSuccess = product => ({
    type: ADD_PRODUCT_SUCCESS, 
    payload: product
})

const addProductError = state => ({
   type: ADD_PRODUCT_ERROR,
   payload: state

})

// function that downloads the products from the database

export function getProductsAction() {
    return async (dispatch) => {
        dispatch( downloadProducts() )
        try {
            const response = await axiosClient.get('/products')
            dispatch( downloadProductsSuccess(response.data) )
        } catch {
            dispatch( downloadProductsError() )
        }
    }
}

const downloadProducts = () => ({
    type: START_DOWNLOAD_PRODUCTS,
    payload: true
})

const downloadProductsSuccess = products => ({
    type: DOWNLOAD_PRODUCTS_SUCCESS,
    payload: products
})

const downloadProductsError = () => ({
    type: DOWNLOAD_PRODUCTS_ERROR,
    payload: true
})