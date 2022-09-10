import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserLogin } from "../redux/actions/UserAction";
import { Link, useNavigate } from "react-router-dom";

function UserLoginForm() {

  return (
    <div>
      <h2>User Login</h2>
      <div className="form-container">
        <form>
          <input
            type="text"
          />
          <input
            type="password"
          />
            <button type="submit" className="btn-login">
              Login
            </button>
        </form>
      </div>
      <Link to='/userRegister'>Não tem uma conta ? Cadastre-se</Link>
    </div>
  );
}

export default UserLoginForm;
