import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deletePost, updateProduct, type Product } from "./apidata";
import  { useState } from "react";
import ProductForm from "../buttons/ProductForm";

const Cards = () => {
const queryClient=useQueryClient();
const [editingProduct, setEditingProduct] = useState<Product | null>(null);


  const {data, isLoading, isError}= useQuery({
     queryKey:["getproducts"],
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
    }
   
  });




// deleting with mutation
const deleteMutation=useMutation({
  mutationFn:(id:number)=>deletePost(id),
onSuccess:(data,id)=>{
console.log("deleted data is ",data,id);


  // updates cache
  queryClient.setQueryData(["getproducts"], (oldData: any) => {
    return oldData.filter((item: any) => item.id !== id);
  });
}
});







// updating with mutation
const updateMutation=useMutation({
  mutationFn:(updatedProduct:Product)=>updateProduct(updatedProduct),
onSuccess:(updatedProduct)=>{

  // updates cache
  queryClient.setQueryData<Product[]>(["getproducts"], (oldData) =>oldData ? oldData.map((item)=>
    item.id===updatedProduct.id ? updatedProduct : item
  ) : [updatedProduct]
  );
}
});







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





return(
<div>


 {editingProduct ? (
        <ProductForm
          initialProduct={editingProduct}
          onSubmit={async(product: Product) =>await updateMutation.mutate(product)}
          onCancel={() => setEditingProduct(null)}
        />
      ) : (




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
        



      {/* update ko lai button */}
<button 
className="border-2 hover:bg-blue-500 w-full"
onClick={()=>setEditingProduct(item)}
>UPDATE</button>
          





          {/* detlete ko lai */}
<button className="border-2 hover:bg-blue-500 w-full"

onClick={()=>deleteMutation.mutate(item.id)}
>REMOVE</button>


        </div>

        </div>
    ))}
  </div>
      )}
  </div>
);
};


export default Cards;
