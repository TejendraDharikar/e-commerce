import React from 'react'
import { NavLink } from 'react-router-dom';

type Item = {
  id: string | number;
  image: string;
  price: number;
  title: string;
  description: string;
};

interface CardstructProps {
  item: Item;
}

const Cardstruct: React.FC<CardstructProps> = ({ item }) => {
  return (
    <div>
      <NavLink to={`/${item.id}`}>
        <img src={item.image} alt="products" className=" h-32 mx-auto mb-4"/>
        
        <div className="mt-2 text-center font-bold text-lg">${item.price}</div>
        <h1 className="text-lg font-semibold mt-2">{item.title}</h1>

        <div className="text-sm mt-2 ">{item.description}</div>
        
        <div className="grid grid-cols-2 gap-3 mt-7">
        
        </div>
      </NavLink>
    </div>
  )
}

export default Cardstruct
