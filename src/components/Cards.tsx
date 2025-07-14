import { useQuery } from "@tanstack/react-query";
import Deleteproduct from "../buttons/Deleteproduct";
import Updateproduct from "../buttons/Updateproduct";

const Cards = () => {
  const {data, isLoading, isError}= useQuery({
    queryFn:async ()=>{
      try {
        const dataFetch=await fetch("https://fakestoreapi.com/products");
        if (dataFetch.ok){
          const jsonData= await dataFetch.json();
          return jsonData;
        }else{
          throw new Error("failed to fetch data");
        }
      } catch (error) {
      console.log(error);
      }
    },
    queryKey:["getproducts"]
  })
  if(isLoading){
     return (
      <div className="flex justify-center items-center h-[100vh]">
        Loading...
      </div>
    );
  }
  if(isError){
    console.log("Error while fetching data")
  return (
    <div>Error fetching data</div>
  )}
  if(!data){
    console.log("Data is undefined or null")
  return(
    <div>Data</div>
  )
}
console.log("data is ",data,isLoading,isError)


return(
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 p-6">
    {data.map((item:any)=>(
      <div 
      key={item.id}
      className=" p-4 shadow-md rounded-md hover:shadow-blue-500 cursor-pointer hover:bg-black hover:text-white transition duration-300">

<img src={item.image} alt="products" className=" h-32 mx-auto mb-4"/>
        
        <div className="mt-2 text-center font-bold text-lg">${item.price}</div>
        <h1 className="text-lg font-semibold mt-2">{item.title}</h1>

        <div className="text-sm mt-2 ">{item.description}</div>
        



        <div className="grid grid-cols-2 gap-3 mt-7">
          <Updateproduct/>
<Deleteproduct/>
        </div>

        </div>
    ))}
  </div>
);
};


export default Cards;
