// Producto.js
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";

const Producto = () => {
  const [producto, setProducto] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const productRef = doc(db, "items", "4P8jPRYiDWDiXZTt8102");

      try {
        const snapshot = await getDoc(productRef);

        if (snapshot.exists()) {
          setProducto({ id: snapshot.id, ...snapshot.data() });
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img src={producto.image} alt={producto.name} className="img-fluid" />
        </div>
        <div className="col-md-4">
          <h1>{producto.name}</h1>
          <h5>{producto.model}</h5>
          <p>{producto.description}</p>
          <p><b>${producto.price}</b></p>
        </div>
      </div>
    </div>
  );
};

export default Producto;
