import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userRegister } from "../redux/actions/UserAction";

function UserRegisterForm() {

  const dispatch = useDispatch()
  const state = useSelector(state => state)
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e)=>{
      e.preventDefault()
      dispatch(userRegister(user))
      setUser({
        name: "",
        email: "",
        password: "",
      })
  }

  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            value={user.name}
            placeholder="Seu nome"
          />
          <input
            type="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            value={user.email}
            placeholder="seu email"
          />
          <input
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            value={user.password}
            placeholder="senha"
          />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default UserRegisterForm;
