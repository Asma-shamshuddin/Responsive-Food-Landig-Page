import React from 'react'
import '../index.css'
import { motion } from "framer-motion";

const Cards = ({setCartCount}) => {
 const foodList = [
  {
    id: 1,
    name: "Margherita Pizza",
    hotel: "Pizza Hut",
    rating: 4.4,
    price: "₹199",
    category: "Veg",
    deliveryTime: "20 mins",
    img: "https://i.pinimg.com/1200x/9e/8b/6e/9e8b6ed6ee305de7e556f0480b7443b5.jpg", // pizza ✔
  },
  {
    id: 2,
    name: "Grilled Chicken",
    hotel: "KFC",
    rating: 4.6,
    price: "₹249",
    category: "Non-Veg",
    deliveryTime: "25 mins",
    img: "https://i.pinimg.com/1200x/99/5f/de/995fde2c0809530cc638062d76b1a4ea.jpg", // chicken ✔
  },
  {
    id: 3,
    name: "Pav Bhaji",
    hotel: "Street Food Hub",
    rating: 4.5,
    price: "₹120",
    category: "Veg",
    deliveryTime: "15 mins",
    img: "https://i.pinimg.com/736x/3e/65/86/3e6586b675329db9abdcad5339383f72.jpg", // pav bhaji ✔
  },
  {
    id: 4,
    name: "Sushi Platter",
    hotel: "Tokyo Dine",
    rating: 4.7,
    price: "₹399",
    category: "Non-Veg",
    deliveryTime: "30 mins",
    img: "https://i.pinimg.com/736x/03/91/c5/0391c59d7b33d5e1553289c44662ef37.jpg", // sushi ✔
  },
  {
    id: 5,
    name: "French Fries",
    hotel: "McDonald's",
    rating: 4.3,
    price: "₹99",
    category: "Snacks",
    deliveryTime: "10 mins",
    img: "https://images.unsplash.com/photo-1576107232684-1279f390859f", // fries ✔
  },
  {
    id: 6,
    name: "Strawberry Milkshake",
    hotel: "Shake Square",
    rating: 4.6,
    price: "₹149",
    category: "Beverage",
    deliveryTime: "12 mins",
    img: "https://i.pinimg.com/1200x/c2/94/ec/c294ecf283f14b39d7b015b0f1185e6f.jpg", // milkshake ✔
  },
  {
    id: 7,
    name: "Tandoori Roti & Curry",
    hotel: "Desi Tadka",
    rating: 4.8,
    price: "₹180",
    category: "Veg",
    deliveryTime: "22 mins",
    img: "https://i.pinimg.com/736x/d4/a3/73/d4a373d90bfe62d74806e0abbd941b39.jpg", // curry ✔
  },
  {
    id: 8,
    name: "Chocolate Donut",
    hotel: "Dunkin'",
    rating: 4.5,
    price: "₹80",
    category: "Dessert",
    deliveryTime: "8 mins",
    img: "https://images.unsplash.com/photo-1551024601-bec78aea704b", // donut ✔
  },
  {
    id: 9,
    name: "Masala Dosa",
    hotel: "Udupi Grand",
    rating: 4.5,
    price: "₹120",
    category: "Veg",
    deliveryTime: "20 mins",
    img: "https://i.pinimg.com/736x/41/5a/78/415a7821a6a71aa44142067d53b0d828.jpg",
  },
];
  return (
    <div className='bg-gray-800  p-4  '>
      <div className='flex flex-wrap gap-6 justify-center'>
      {foodList.map((item, index) => (     
      <motion.div
      key={item.id}

      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}

      transition={{
        duration: 0.5,
        delay: index * 0.6
      }}

      whileHover={{ scale: 1.05 }}

      className="bg-white w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-3xl p-3 shadow-lg"
    >
        {/* img */}
        <img
         src ={item.img}
         alt ={item.name}
         className='w-full object-cover rounded-2xl h-40 md:h-48 '
        />
        {/* content */}
        <div className='mt-3'>
         <h3 className='text-black  font-bold text-lg'>{item.name}</h3>
         <p className='text-gray-600 text-sm'>{item.hotel}</p> 
         {/* rating and time */}
         <div className='flex justify-between items-center mt-2 text-sm'>
          <span className='text-orange-500'>⭐{item.rating}</span>
          <span className='text-gray-600'>{item.deliveryTime}</span>
         </div>
         {/* price and category */}
         <div className='flex justify-between items-center mt-2'>
          <span className='font-semibold text-lg'>{item.price}</span> 
          <span className='text-green-600 text-sm'>{item.category}</span> 
         </div>
          <button 
            onClick = {() => setCartCount(prev => prev + 1)}
          className="mt-3 w-full bg-orange-500 text-white py-2 rounded-full hover:bg-orange-600  hover:scale-105 active:scale-95 transition dura">
           Add to Cart
         </button>
         </div> 
      </motion.div>
      ))}
    </div>
    </div>
  )
}

export default Cards
