import React, { useEffect, useState } from "react";
import axios from "axios";
import { Height } from "@mui/icons-material";

const ProductsBack = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = axios.get("http://localhost:5000/products");
    data.then((res) => setProducts(res.data));
  }, []);

  const addProduct = (product) => {
    axios.post("http://localhost:5000/products", product);
  };

  const updateProduct = (id) => {
    const update = axios.patch(`http://localhost:5000/products/${id}`, {
      title: "Bajo X",
    });
  };

  const deleteProduct = (id) => {
    const del = axios.delete(`http://localhost:5000/products/${id}`);
  };

  return (
    <div>
      <h1>Back end de Productos</h1>

      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "30px",
          justifyContent: "space-around",
          alignItems: "center",
          minHeight: "90vh",
        }}
      >
        {products.map((e) => {
          return (
            <div
              style={{
                width: "200px",
                height: "200px",
                border: "2px solid black",
                textAlign: "center",
              }}
              key={e.id}
            >
              <h3> {e.title} </h3>
              <img
                src={e.img}
                alt=""
                style={{ width: "100%", objectFit: "cover" }}
              />
            </div>
          );
        })}
      </div>

      <div style={{ backgroundColor: "blue", width: "100%", height: "400px" }}>
        <form
          style={{
            width: "60%",
            display: "flex",
            flexDirection: "column",
            height: "400px",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            name="title"
            placeholder="Ingresar Producto"
            style={{ width: "100%", height: "40px" }}
          />
          <input
            type="text"
            name="imagen"
            placeholder="Ingresar la url de la imagen"
            style={{ width: "100%", height: "40px" }}
          />
        </form>
        <button onClick={addProduct} style={{ width: "100%", height: "40px" }}>
          Crear Producto
        </button>

        <button
          onClick={() => updateProduct("1")}
          style={{ width: "100%", height: "40px" }}
        >
          Editar Producto
        </button>

        <button
          onClick={() => deleteProduct("1")}
          style={{ width: "100%", height: "40px" }}
        >
          Eliminar Producto
        </button>
      </div>
    </div>
  );
};

export default ProductsBack;
