import React, { useRef, useState } from 'react'

const Hero = ({setCartCount}) => {
   const foods = [
    {
      name: "Burger",
      price: "90.00",
      img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    },
    {
      name: "Veg Briyani",
      price: "50.00",
      img:"https://i.pinimg.com/736x/06/a9/43/06a9438646f4debbb6119c1e2f0d182b.jpg",
    },
    {
      name: "Shorma",
      price: "70.00",
      img:"https://i.pinimg.com/736x/f0/77/e7/f077e70250805654b38a7dbcf74c8e74.jpg",
    },
     {
      name: "Noodles",
      price: "80.00",
      img:"https://i.pinimg.com/1200x/88/d4/6c/88d46c1c1305c3dbd36281afdbb9ef86.jpg",
    },
    {
      name: "Paneer Korma",
      price: "90.00",
      img:"https://i.pinimg.com/736x/f4/4d/f3/f44df34b500520e6fc8fc3a156942496.jpg",
    },
    {
      name: "Ice Cream",
      price: "90.00",
      img: "https://i.pinimg.com/1200x/fc/7c/13/fc7c139fd1f579aabda530fa7bb42578.jpg",
    },
   ];

   //hero img state
   const [heroImg, setHeroImg] = useState(foods[0].img);

   

   const sliderRef = useRef();

   const scrollLeft = () => {
    sliderRef.current.scrollBy({ left:-250, behavior: "smooth"});
   };

   const scrollRight = () =>{
    sliderRef.current.scrollBy({left: 250, behavior: "smooth"});
   };

   
  return (
    <>
      <section className=' flex items-center px-6 lg:px-16 mt-18' >
        <div className=' flex flex-col-reverse lg:flex-row items-center gap-10 w-full'>
          {/* left side */}
          <div className='lg:w-1/2 text-center lg:text-left fade-in-left '>
          <p className=' text-gray-500 italic mb-1 ml-2 mt-2'>Best food for yor taste</p>
          <h1 className=' text-5xl lg:text-7xl font-bold leading-tight '>
            Satisfy your Cravings with our <span className=' text-orange-400 animate-[fadeInLeft_1s_ease-out]'>Delicious Food</span>
          </h1>
          <p className='text-gray-800 mt-4'>
            Discover the best food in town with our delicious menu. From savory dishes to sweet treats, we have something for everyone. Order now and experience the taste of perfection!
          </p>
          {/* button */}
          <div className='mt-5 flex justify-center lg:justify-start gap-4'>
            <button className='bg-orange-400 px-6 py-3 rounded-full hover:bg-orange-600 transition text-white'> Order Now</button>
          </div>
          </div>
          {/* right side */}
          <div className='lg:w-1/2 flex justify-center'>
          <img
             src = {heroImg}
             alt = 'food'
             className='w-70  lg:w-100 rounded-full object-cover    animate-bounce'
             />
          </div>
        </div>        
     </section>
     {/* img section */}
     <div className=' bg-gray-100 py-10  flex flex-col lg:flex-row items-center mt-2  '>
      {/* left button */}
      <button
       onClick={scrollLeft}
       className='bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center mr-3 ml-20 '>  ←        
      </button>
      <div className='w-full max-w-xl overflow-hidden '>
      {/* slider */}
      <div 
      ref={sliderRef}
      className='flex gap-6 overflow-x-auto scroll-smooth no-scrollbar  p-6 rounded-2xl  border-orange-500 '>
       {foods.map((item, index) => (
        <div
           key={index}
           onClick={() => setHeroImg(item.img)}
           className={`min-w-30 bg-white
            rounded-2xl p-3 text-center shadow cursor-pointer transition
            ${
                heroImg == item.img ? "border-2 border-orange-500 bg-white" : "bg-white"
            }`}
           >
            <img
              src={item.img}
              alt={item.name}
              className='w-20 h-20 object-cover mx-auto rounded-lg'
              />
              <h3 className='mt-2 font-semibold'>{item.name}</h3>
              <p className='text-orange-500'>{item.price}</p>
        </div>
       ))}            
      </div>
      </div>
      
      {/* right button */}
      <button 
      onClick={scrollRight}
      className='bg-white rounded-full w-10 h-10 flex items-center justify-center  mb-4 lg:mb-0 lg:mr-3 lg:ml-10 shadow'>
         →
      </button>

      {/* 👉 RIGHT SIDE CARD */}
    <div className=" mt-6 lg:mt-0 lg:ml-auto lg:mr-auto">
      <div className="bg-white p-4 rounded-2xl shadow-lg w-72 lg:w-96 ">
        
        <img
          src={heroImg}
          alt="selected"
          className="w-full h-50 object-cover rounded-lg"
        />

        <h2 className="mt-3 font-bold text-lg text-center">
          Selected Dish
        </h2>

        <p className="text-gray-500 text-sm text-center">
          Fresh & delicious food made for you
        </p>

        <button 
         onClick={() => setCartCount(prev => prev + 1)}
        className="mt-4 w-full bg-orange-500 text-white py-2 rounded-full hover:bg-orange-600 transition">
          Add to Cart
        </button>

      </div>
    </div>

      
          
      </div>

         
        


        

     
     
    </>
  )
}

export default Hero
