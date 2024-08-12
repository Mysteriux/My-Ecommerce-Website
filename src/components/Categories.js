import React from 'react';

const category = [
  {
    id: 1,
    name: 'Toys',
    description: 'Pamper yourself with our top beauty picks.',
    image: 'toys.jpg',
  },
  {
    id: 2,
    name: 'Electronics',
    description: 'Find the latest gadgets and electronics.',
    image: 'elect.jpg',
  },
  {
    id: 3,
    name: 'Books & Stationery',
    description: 'Discover a world of knowledge and creativity.',
    image: 'books.jpg',
  },
  {
    id: 4,
    name: 'Art & Handicraft',
    description: 'Explore unique handcrafted art pieces.',
    image: 'arts.jpg',
  },
  {
    id: 5,
    name: 'Home & Kitchen',
    description: 'Upgrade your home with stylish essentials.',
    image: 'kitchen.png',
  },
];

const categories = () => {
  return (
    <div className='mx-auto py-12 px-4 bg-[#e73030]'>
      <h2 className='text-4xl text-white font-bold text-center mb-8'>Shop by Category</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {category.map((category) => (
          <div key={category.id} className='bg-[#e3f1ee] text-center shadow-md hover:shadow-[#cdbebe] rounded-lg overflow-hidden hover:scale-105 transform transition duration-300'>
            <img
              src={category.image}
              alt={category.name}
              className='w-full h-48 object-cover'
            />
            <div className='p-4'>
              <h3 className='text-2xl font-semibold mb-2'>{category.name}</h3>
              <p className='text-gray-600'>{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default categories;
