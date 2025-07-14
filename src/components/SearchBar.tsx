import { useState } from "react";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { apidata} from "./apidata";

const SearchBar= () => {
  const [search,setSearch]=useState<string>("");
const {data,isLoading,isError}=apidata();


  const suggestion=data?.filter(item=>item.title.includes(search));



  if(isLoading)
    return<div>Loading....</div>;
  if(isError)
    return <div>Error fetching data</div> ;





   return (
    <div  className="text-white text-center p-3 flex gap-4">

  <input type="text"
        name="search" 
        placeholder="Search"
        value={search} onChange={(e)=>setSearch(e.target.value)}
        className="border-1 rounded-lg bg-white text-black"
     />


 <BsFillSearchHeartFill className="text-gray-500 text-2xl"/>


 </div>
  )
}

export default SearchBar
