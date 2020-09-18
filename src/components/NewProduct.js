import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

// Redux actions
import { createNewProductAction } from '../actions/productActions';

const NewProduct= () => {
    // component state
    const [name, saveName] = useState('');
    const [price, savePrice] = useState(0);

    // use useDispatch and create a function
    const dispatch = useDispatch();

    const addProduct = (product) => dispatch( createNewProductAction(product) )

    const submitNewProduct = e => {
        e.preventDefault();

        // validate form 
        if (name.trim() === '' || price <= 0) {
            return;
        }
        // if there are no errors
        
        
        // create the new product
        addProduct({
            name, 
            price
        })
    }

    return ( 
        <div className='row justify-content-center'>
            <div className='col-md-8'>
                <div className='card'>
                    <div className='card-body'>
                        <h2 className='text-center mb-4 font-weight-bold'>
                            Add New Product
                        </h2>
                        <form onSubmit={submitNewProduct}>
                            <div className='form-group'>
                                <label>Product name</label>
                                <input 
                                    type='text'
                                    className='form-control'
                                    placeholder='Product name'
                                    name='name'    
                                    value={name}
                                    onChange={e => saveName(e.target.value)}
                                />
                                <label>Product price</label>
                                <input 
                                   type='number'
                                   className='form-control'
                                   placeholder='Product price'
                                   name='price'  
                                   value={price}
                                   onChange={e => savePrice(Number(e.target.value))}      
                                />                          
                            </div>
                            <button
                                type='submit'
                                className='btn btn-primary font-weight-bold text-uppercase d-block w-100'    
                            >Add
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default NewProduct;