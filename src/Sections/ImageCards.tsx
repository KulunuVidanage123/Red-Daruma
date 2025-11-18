import React, { useState } from 'react';
import ImageCard1 from '../assets/ImageCard1.png';
import ImageCard2 from '../assets/ImageCard2.png';
import ImageCard3 from '../assets/ImageCard3.png';
import ImageCard4 from '../assets/ImageCard4.png';
import ImageCard5 from '../assets/ImageCard5.png';
import ImageCard6 from '../assets/ImageCard6.png';
import ImageCard7 from '../assets/ImageCard7.png';

const ImageCards: React.FC = () => {
  const [currentSwipeIndex, setCurrentSwipeIndex] = useState(0);

  const swipePages = [
    // Page 0: Original top and bottom images
    {
      topImage: ImageCard4,
      bottomImage: ImageCard1,
      topAlt: "Image Card 4",
      bottomAlt: "Image Card 1"
    },
    // Page 1: Second top and second bottom images
    {
      topImage: ImageCard2,
      bottomImage: ImageCard3,
      topAlt: "Image Card 2",
      bottomAlt: "Image Card 3"
    },
    // Page 2: Third top and third bottom images
    {
      topImage: ImageCard3,
      bottomImage: ImageCard6,
      topAlt: "Image Card 3",
      bottomAlt: "Image Card 6"
    },
    // Page 3: Fourth top and fourth bottom images
    {
      topImage: ImageCard4,
      bottomImage: ImageCard1,
      topAlt: "Image Card 4",
      bottomAlt: "Image Card 1"
    },
    // Page 4: Fifth top and fifth bottom images
    {
      topImage: ImageCard3,
      bottomImage: ImageCard4,
      topAlt: "Image Card 3",
      bottomAlt: "Image Card 4"
    },
    // Page 5: Sixth top and sixth bottom images
    {
      topImage: ImageCard5,
      bottomImage: ImageCard7,
      topAlt: "Image Card 5",
      bottomAlt: "Image Card 7"
    }
  ];

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'right') {
      setCurrentSwipeIndex((prev) => (prev + 1) % swipePages.length);
    } else {
      setCurrentSwipeIndex((prev) => (prev - 1 + swipePages.length) % swipePages.length);
    }
  };

  return (
    <section className="w-full h-[650px] [@media(max-width:639px)]:h-[1000px] bg-[#FCFAF4] relative">
      {/* Desktop view - all images */}
      <div className="hidden [@media(min-width:640px)]:block">
        {/* top images */}
        <img
          src={ImageCard1}    // 1st top image 
          alt="Image Card 1"
          className="absolute top-0 left-0 w-[250px] h-[330px]"
        />
        <img
          src={ImageCard2}    // 2nd top image
          alt="Image Card 2"
          className="absolute top-0 left-[265px] w-[250px] h-[250px]"
        />
        <img
          src={ImageCard3}    // 3rd top image
          alt="Image Card 3"
          className="absolute top-0 left-[530px] w-[250px] h-[335px]"
        />
        <img
          src={ImageCard4}    // 4th top image
          alt="Image Card 4"
          className="absolute top-0 left-[795px] w-[250px] h-[250px]"
        />
        <img
          src={ImageCard3}    // 5th top image
          alt="Image Card 3"
          className="absolute top-0 left-[1060px] w-[250px] h-[340px]"
        />
        <img
          src={ImageCard5}    // 6th top image
          alt="Image Card 5"
          className="absolute top-0 left-[1330px] w-[200px] h-[250px]"
        />
        
        {/* bottom images */}
        <img
          src={ImageCard4}    // 1st bottom  image
          alt="Image Card 4"
          className="absolute bottom-[50px] left-0 w-[250px] h-[255px]"
        />
        <img
          src={ImageCard3}    // 2nd bottom  image
          alt="Image Card 3"
          className="absolute bottom-[50px] left-[265px] w-[250px] h-[335px]"
        />
        <img
          src={ImageCard6}    // 3rd bottom  image
          alt="Image Card 6"
          className="absolute bottom-[50px] left-[530px] w-[250px] h-[250px]"
        />
        <img
          src={ImageCard1}    // 4th bottom  image
          alt="Image Card 1"
          className="absolute bottom-[50px] left-[795px] w-[250px] h-[335px]"
        />
        <img
          src={ImageCard4}    // 5th bottom  image
          alt="Image Card 4"
          className="absolute bottom-[50px] left-[1060px] w-[250px] h-[245px]"
        />
        <img
          src={ImageCard7}    // 6th bottom  image
          alt="Image Card 7"
          className="absolute bottom-[50px] left-[1330px] w-[200px] h-[335px]"
        />
      </div>

      {/* Mobile view - swipe gallery */}
      <div className="[@media(max-width:639px)]:block hidden">
        <div className="relative w-full h-full">
          {/* Swipe navigation buttons */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-70 rounded-full p-2 shadow-md"
            onClick={() => handleSwipe('left')}
          >
            ←
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-70 rounded-full p-2 shadow-md"
            onClick={() => handleSwipe('right')}
          >
            →
          </button>

          {/* Current swipe page content */}
          <div className="flex flex-col items-center justify-center h-full px-4 space-y-6">
            <img
              src={swipePages[currentSwipeIndex].topImage}
              alt={swipePages[currentSwipeIndex].topAlt}
              className="absolute top-[400px] w-full max-w-[90%] h-[400px] object-cover rounded-[15px]"
            />
            <img
              src={swipePages[currentSwipeIndex].bottomImage}
              alt={swipePages[currentSwipeIndex].bottomAlt}
              className="absolute bottom-[-370px] w-full max-w-[90%] h-[400px] object-cover rounded-[15px]"
            />
          </div>

          {/* Dot navbar for navigation - with increased visibility */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-4">
            {swipePages.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentSwipeIndex(index)}
                className={`w-5 h-5 rounded-full cursor-pointer transition-all duration-300 ${
                  index === currentSwipeIndex 
                    ? 'bg-orange-500 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCards;