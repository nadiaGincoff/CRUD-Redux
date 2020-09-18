import React, { Fragment } from "react";

const LoginForm = () => {
  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

const MobileLoginForm = () => {
  return (
    <Fragment className="containerForm">
      <img src="logo" alt="startup-logo" />
      <div>
        <h1>Hola soy un titulo</h1>
        <h2>Hola soy un subtitulo</h2>
        <LoginForm />

      </div>
    </Fragment>
  );
};

export default MobileLoginForm;
