import { useQuery } from "@tanstack/react-query";

export interface Product{
   id?: number;
  title: string;
  description: string;
  image: string;
  category: string;
  price: number;
}

export const apidata=()=>
  useQuery<Product[]>({
    queryKey:["getproducts"],
    staleTime: 1000 * 60 * 5, // 5 minutes
  gcTime: 1000 * 60 * 10,   // 10 minutes

     queryFn:async ()=>{
      const res=await fetch ("https://fakestoreapi.com/products")
      if(!res.ok) throw new Error("failed to fetch");
      return res.json();
    }
  })



export const FetchSingleProduct = async (id: number): Promise<Product> => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) throw new Error("failed to fetch single product");
  return res.json();
};







export const addProduct = async (product: Product) => {
  const response = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  

  // u can use alert in replacement of return below
  return response.json();
};








export const deletePost = async (id: number) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("failed to delete product");
  return res.json();
};





export const updateProduct=async(product:Product)=>{
  const res=await fetch(`https://fakestoreapi.com/products/${product.id}`,{
    method:"PUT",
    headers: {
  "Content-Type": "application/json"
},
 body:JSON.stringify(product)
  });
  if(!res.ok) throw new Error("failed to update product");
  return res.json();
};