import React from 'react';
import { Link } from 'react-router-dom';

// Redux
import { useDispatch } from 'react-redux';
import { deleteProductAction } from '../actions/productActions';

const Product = ({product}) => {
    const { name, price, id } = product;
    
    const dispatch = useDispatch();

    // Confirm if you want to delete it
    const confirmProductDelete = id => {

        dispatch( deleteProductAction(id) )
        console.log(id)
    }

    return ( 
        <tr>
            <td>{name}</td>
            <td><span className='font-weight-bold'>${price}</span></td>
            <td className='actions'>
                <Link to={`/products/edit/${id}`} className='btn btn-primary mr-2' >
                    Edit
                </Link>
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