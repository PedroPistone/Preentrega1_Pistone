const products = [
    {
      id: 1,
      name: 'Smartphone XYZ',
      category: 'Electrónica',
      description: 'Un potente smartphone con características avanzadas.',
      image: 'https://via.placeholder.com/150/FF5733/000000?text=Smartphone+XYZ',
      price: 599.99,
      stock: 15,
    },
    {
      id: 2,
      name: 'Laptop ABC',
      category: 'Electrónica',
      description: 'Una laptop ligera y potente para tus tareas diarias.',
      image: 'https://via.placeholder.com/150',
      price: 899.99,
      stock: 10,
    },
    {
      id: 3,
      name: 'Camiseta Casual',
      category: 'Ropa',
      description: 'Una camiseta cómoda y elegante para uso diario.',
      image: 'https://via.placeholder.com/150',
      price: 24.99,
      stock: 50,
    },
    {
      id: 4,
      name: 'Mesa de Centro',
      category: 'Hogar y Jardín',
      description: 'Una mesa de centro moderna para tu sala de estar.',
      image: 'https://via.placeholder.com/150',
      price: 129.99,
      stock: 20,
    },
    {
      id: 5,
      name: 'Paquete de 4 Sillas',
      category: 'Hogar y Jardín',
      description: 'Conjunto de sillas resistentes y elegantes.',
      image: 'https://via.placeholder.com/150',
      price: 179.99,
      stock: 15,
    },
  ];
  
  export const getProducts = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredProducts = category ? products.filter((p) => p.category === category) : products;
        resolve(filteredProducts);
      }, 1000);
    });
  };
  
  export const getProductById = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const product = products.find((p) => p.id === parseInt(productId, 10));
        resolve(product);
      }, 500);
    });
  };
  
 