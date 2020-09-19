import React, { Fragment, useEffect } from 'react';
import Product from './Product'

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

    const products = useSelector( state => state.products.products )
    const error = useSelector( state => state.products.error)
    const loading = useSelector( state => state.products.loading)

    return (  
        <Fragment>
            <h2 className='text-center my-5'>Product listing</h2>
            { error ? <p className='font-weight-bold alert alert-danger text-center mt-4'> There was a mistake</p> : null }
            { loading ? <p className='text-center'> Loading... </p> : null } 

            <table className='table table-striped'>
                <thead className='bg-primary table-dark'>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { products.length === 0 ? 'No products' : (
                        products.map(product => (
                            <Product 
                                key={product.id}
                                product={product}
                            >
                            </Product>
                        ))
                    )}
                </tbody>
            </table>
        </Fragment>
    );
}
 
export default Products;