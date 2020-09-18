import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR 
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