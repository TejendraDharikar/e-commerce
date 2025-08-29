import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    
<nav className=" bg-black p-3  rounded-md flex justify-between">
  <div  className="pl-3 my-auto pb-2 italic text-2xl font-bold  text-yellow-500 ">
    
  <NavLink to="/">TD-CART</NavLink>
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
  >LadiesWear</NavLink>

<NavLink 
  to="/wearables"
   className={({isActive})=>
    isActive?"text-black p-4 bg-gray-100 pt-1 pb-1 rounded-2xl":"text-white p-4"}
  >Menswear</NavLink>

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
