import React from "react";

const EditProduct = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Edit Product
            </h2>
            <form>
              <div className="form-group">
                <label>Product name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product name"
                  name="name"
                />
                <label>Product price</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Product price"
                  name="price"
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
