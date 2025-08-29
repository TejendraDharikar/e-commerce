import { NavLink } from "react-router-dom";
import { apidata } from "../components/apidata";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const LadiesWearables = () => {
  const {data,isLoading,isError}=apidata();
  const ladiesProduct=data?.filter(item=>item.category==="women's clothing"||item.category==="jewelery")
  if(isLoading)return <div>LOADING....</div>
  if(isError)
    return <div>ERROR FETCHING DATA</div>

  return (
    <div>
        <Navbar/>
        <div className="grid grid-cols-1
        md:grid-cols-2 xl:grid-cols-3 gap-6 p-6">
          {
            ladiesProduct?.map(item=>
              (
                <div key={item.id}
                className=" text-blue-900 bg-gray-50 hover:shadow-blue-500 rounded-md shadow-md hover:bg-gray-700 hover:text-white transition cursor-pointer p-4"
                >
                  <NavLink to={`/Ladieswears/${item.id}`}>
                      <img src={item.image} alt={item.title}
                      className="h-32 mx-auto mb-2 mt-1"
                      />
                      <h1 className="text-center font-bold text-lg mb-2">${item.price}</h1>
                      <h1 className="font-semibold text-lg mb-2
                      ">{item.title}</h1>
                      <p className=" text-sm mb-2">{item.description}</p>
               </NavLink>
                </div>
            ))
          }
        </div>
        <Footer/>
    </div>
  )
}

export default LadiesWearables;
