import React, { Fragment, useEffect } from 'react';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getProductsAction } from '../actions/productActions'

const Products = () => {
    const dispatch = useDispatch()
    
    useEffect( () => {
        // consult the API
        const loadProducts = () => dispatch( getProductsAction() );
        loadProducts();
    }, [])

    return (  
        <Fragment>
            <h2 className='text-center my-5'>Product listing</h2>
            <table className='table table-striped'>
                <thead className='bg-primary table-dark'>
                    <tr>
                        
                        <th scope='col'>Name</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </Fragment>
    );
}
 
export default Products;