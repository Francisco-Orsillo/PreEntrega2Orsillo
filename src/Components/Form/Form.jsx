import React from "react";
import { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.name.length < 5) {
      setError(true);
      setErrorMessage("El nombre no puede tener menos de 5 caracteres");
      return;
    }
    const incluye = userData.email.includes("@");
    if (!incluye) {
      setError(true);
      setErrorMessage("Formato de Email no válido, debe incluir @");
      return;
    }
    const str = userData.password.trim();
    const passwordIsValid = userData.password === str;
    if (!passwordIsValid || userData.password.length < 5) {
      setError(true);
      setErrorMessage(
        "La contrasena no debe contener espacios y debe tener mínimo 5 caracteres"
      );
      return;
    }

    console.log(userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          onChange={handleChange}
          name="name"
        />
        <input
          type="text"
          placeholder="Ingrese su Email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Ingrese su contraseña"
          name="password"
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>

      {error ? <h2>{errorMessage}</h2> : null}
    </div>
  );
};

export default Form;
