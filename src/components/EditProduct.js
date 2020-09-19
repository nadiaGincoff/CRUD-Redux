import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { editProductAction } from '../actions/productActions';


const EditProduct = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  // new product state
  const [ product, saveProduct ] = useState({
    name: '',
    price: '',
  })

  // product to edit
  const editProduct = useSelector(state => state.products.editproduct)

  // fill the state automatically 
  useEffect(() => {
    saveProduct(editProduct)
  }, [editProduct])

  // read data form
  const onChangeForm = e => {
    saveProduct({
      ...product,
      [e.target.name] : e.target.value
    })
  }

  const { name, price } = product;

  const submitEditProduct = e => {
    e.preventDefault();
    dispatch( editProductAction(product) );
    history.push('/');
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Edit Product
            </h2>
            <form onSubmit={submitEditProduct}> 
              <div className="form-group">
                <label>Product name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product name"
                  name="name"
                  value={name}
                  onChange={onChangeForm}
                />
                <label>Product price</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Product price"
                  name="price"
                  value={price}
                  onChange={onChangeForm}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Save changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
