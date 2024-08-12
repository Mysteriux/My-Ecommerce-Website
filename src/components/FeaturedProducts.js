import React from 'react';

const FeaturedProducts = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: 'The Life of Buddha Book',
      description: 'Learn the way of Life.',
      price: 59.99,
      image: 'buddha.jpg',
    },
    {
      id: 2,
      name: 'Refrigerator',
      description: 'Power efficient and Super cool.',
      price: 129.99,
      image: 'refri.jpg',
    },
    {
      id: 3,
      name: 'Bluetooth Speaker',
      description: 'Portable speaker with powerful bass.',
      price: 79.99,
      image: 'speakers.jpg',
    },
    {
      id: 4,
      name: 'Laptop Sleeve',
      description: 'Protective sleeve for your laptop.',
      price: 19.99,
      image: 'laptop.jpg',
    },
    {
      id: 5,
      name: 'Fitness Tracker',
      description: 'Monitor your health with this smart device.',
      price: 49.99,
      image: 'fitness.jpg',
    },
    {
      id: 6,
      name: 'Colourful Pencils',
      description: 'Beautiful Pencils and multiple colors.',
      price: 39.99,
      image: 'pencils.jpg',
    },
  ];

  return (
    <div className="mx-auto bg-[#b5fcfc] py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg p-4 hover:scale-105 transform transition duration-300">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="mt-2 text-gray-600">{product.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-bold text-[#1a3d8a]">${product.price}</span>
                <button className="bg-[#05140f] text-white px-4 py-2 rounded hover:bg-[#e73030] transform transition duration-300">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
