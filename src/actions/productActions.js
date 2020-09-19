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
    START_EDIT_PRODUCT,
    EDIT_PRODUCT_SUCCESS,
    EDIT_PRODUCT_ERROR,
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

// select and delete product 
export function deleteProductAction(id) {
    return async (dispatch) => {
        dispatch( getProductDelete(id) )
        try {
            const result = await axiosClient.delete(`/products/${id}`);
            dispatch( deleteProductSuccess(result) )
            Swal.fire(
                'Deleted!',
                'Your product has been deleted.',
                'success'
            )
        } catch (error) {
            dispatch( deleteProductError() )
        }
    }
}

const getProductDelete = id => ({
    type: GET_DELETE_PRODUCT,
    payload: id
})

const deleteProductSuccess = () => ({
    type: DELETE_PRODUCT_SUCCESS,
})

const deleteProductError = () => ({
    type: DELETE_PRODUCT_ERROR,
    payload: true
})

// place product in edit
export function getEditProduct(product) {
    return (dispatch) => {
        dispatch( getEditProductAction(product) )
    }
}

const getEditProductAction = product => ({
    type: GET_EDIT_PRODUCT,
    payload: product
})

// edit a register in the API & state
export function editProductAction(product) {
    return async (dispatch) => {
        dispatch( editProduct() )
        try {
            axiosClient.put(`/products/${product.id}`, product);
            dispatch( editProductSuccess(product) )
        } catch (error) {
            dispatch( editProductsError() )
        }
    }
}

const editProduct = () => ({
    type: START_EDIT_PRODUCT
})

const editProductSuccess = product => ({
    type: EDIT_PRODUCT_SUCCESS,
    payload: product
})

const editProductsError = () => ({
    type: EDIT_PRODUCT_ERROR,
    payload: true
})
