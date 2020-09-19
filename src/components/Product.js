import React from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'
// Redux
import { useDispatch } from 'react-redux';
import { deleteProductAction, getEditProduct } from '../actions/productActions';

const Product = ({product}) => {
    const { name, price, id } = product;
    
    const dispatch = useDispatch();
    const history = useHistory(); // enable history for edition

    // Confirm if you want to delete it
    const confirmProductDelete = id => {
        // ask the user 
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#5EB69D',
            cancelButtonColor: '#FF5A2B',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch( deleteProductAction(id) )
            }
          })
    }

    // function that redirects on a scheduled basis (redirige de forma programada)
    const redirectEdit = product => {
        dispatch( getEditProduct(product));
        history.push(`/products/edit/${product.id}`)
    }

    return ( 
        <tr>
            <td>{name}</td>
            <td><span className='font-weight-bold'>${price}</span></td>
            <td className='actions'>
                <button 
                    type='button'
                    className='btn btn-primary mr-2'
                    onClick={ () => redirectEdit(product)}
                >
                    Edit
                </button>
                <button 
                    type='button'
                    className='btn btn-danger'
                    onClick={ () => confirmProductDelete(id) }
                >
                    Delete
                </button>
            </td>
        </tr>
    );
}
 
export default Product;