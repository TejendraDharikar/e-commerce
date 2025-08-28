import { NavLink } from "react-router-dom";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { apidata } from "../components/apidata";

const MenWearables = () => {
  const{data,isLoading,isError}=apidata()
  const mensWear=data?.filter(item=>
   item.category==="men's clothing")
    if (isLoading)return<div>Loading...</div>
    if (isError)
      return <div> Error fetching data</div>
  return (
    <div>
      <Navbar/>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-6">
       {mensWear?.map(item=>(
        <div key={item.id} 
        className="text-blue-900 bg-gray-50 shadow-md rounded-md hover:shadow-blue-500
        hover:bg-black hover:text-white
        transition cursor-pointer p-4">


          <NavLink to={`/wearables/${item.id}`}>
<img src={item.image} alt={item.title} 
className="mx-auto h-32 mt-1 mb-4"
/>
<h1 className="font-bold text-center text-lg mb-4">${item.price}</h1>
<h1 className="font-semibold text-lg mb-2">{item.title}</h1>
<div className="text-sm mb-2">{item.description}</div>
       
          </NavLink>   
        
        </div>
       ))}
      </div>

      <Footer/>
    </div>
  )
}

export default MenWearables
