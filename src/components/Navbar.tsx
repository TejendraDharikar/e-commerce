import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    
<nav className=" bg-black p-3 rounded-md flex justify-between">
  <div  className="text-center pl-5 pb-2 ">
  <NavLink
    to="/"
  className="text-4xl mx-auto font-bold  text-white">TD-CART</NavLink>
  </div>


<div className="text-center p-3">
 <NavLink 
  to="/"
  className={({isActive})=>
    isActive?"text-black p-4 bg-gray-100 pt-1 pb-1  rounded-2xl":"text-white p-4"}
  >Home</NavLink>

 <NavLink 
  to="/Ladieswears"
   className={({isActive})=>
    isActive?"text-black p-4 bg-gray-100 pt-1 pb-1 rounded-2xl":"text-white p-4"}
  >Ladies-Wearables</NavLink>

<NavLink 
  to="/wearables"
   className={({isActive})=>
    isActive?"text-black p-4 bg-gray-100 pt-1 pb-1 rounded-2xl":"text-white p-4"}
  >Men-Wearables</NavLink>

  <NavLink 
  to="/electronics"
   className={({isActive})=>
    isActive?"text-black p-4 bg-gray-100 pt-1 pb-1 rounded-2xl":"text-white p-4 "}
  >Electronics</NavLink>

  <NavLink 
  to="/edit"
   className={({isActive})=>
    isActive?"text-black p-4 bg-gray-100 pt-1 pb-1 rounded-2xl":"text-white p-4"}
  >Edit</NavLink>
</div>
</nav>
  )
}

export default Navbar
