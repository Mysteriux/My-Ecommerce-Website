import React from 'react';

const NearbyStores = () => {
  // Sample store data
  const stores = [
    {
      id: 1,
      name: 'Tech World',
      address: '123 Main St, Anytown, USA',
      image: 'techstore.jpg',
      distance: '2.5 miles',
    },
    {
      id: 2,
      name: 'The Book Nook',
      address: '456 Oak St, Anytown, USA',
      image: 'bookstore.jpg',
      distance: '3.0 miles',
    },
    {
      id: 3,
      name: 'Artists',
      address: '789 Elm St, Anytown, USA',
      image: 'artistore.jpg',
      distance: '1.2 miles',
    },
    {
      id: 4,
      name: 'Toys and You',
      address: '101 Pine St, Anytown, USA',
      image: 'toystore.jpg',
      distance: '4.1 miles',
    },
    {
      id: 5,
      name: 'Home Essentials',
      address: '202 Maple St, Anytown, USA',
      image: 'homestore.jpg',
      distance: '0.8 miles',
    }
  ];

  return (
    <div className="bg-[#feb8d7] mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Nearby Stores</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {stores.map((store) => (
          <div key={store.id} className="bg-[#fef7f7] shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition duration-300">
            <img
              src={store.image}
              alt={store.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{store.name}</h3>
              <p className="text-gray-600">{store.address}</p>
              <p className="mt-2 text-[#1a3d8a] font-semibold">{store.distance}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NearbyStores;
