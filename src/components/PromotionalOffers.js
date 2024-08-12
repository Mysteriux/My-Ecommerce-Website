import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PromotionalOffers = () => {
  const offers = [
    {
      id: 1,
      title: '50% Off on All Electronics',
      description: 'Upgrade your gadgets with our exclusive discounts.',
      image: 'https://via.placeholder.com/600x400?text=Electronics',
    },
    {
      id: 2,
      title: 'Buy 1 Get 1 Free',
      description: 'On selected books, don’t miss out!',
      image: 'https://via.placeholder.com/600x400?text=books',
    },
    {
      id: 3,
      title: '25% Off on Home Appliances',
      description: 'Make your home smarter with our top deals.',
      image: 'https://via.placeholder.com/600x400?text=Home+Appliances',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className='mx-[12px] py-5'>
      <Slider {...settings}>
        {offers.map((offer) => (
          <div key={offer.id} className='relative'>
            <img
              src={offer.image}
              alt={offer.title}
              className='w-full h-[400px] object-cover rounded-lg'
            />
            <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4 rounded-lg'>
              <h2 className='text-4xl font-bold text-white mb-2'>{offer.title}</h2>
              <p className='text-lg text-white'>{offer.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PromotionalOffers;
