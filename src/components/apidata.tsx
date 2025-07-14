import { useQuery } from "@tanstack/react-query";

export interface Product{
   id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  price: number;
}

export const apidata=()=>
  useQuery<Product[]>({
    queryKey:["getproducts"],
     queryFn:async ()=>{
      const res=await fetch ("https://fakestoreapi.com/products")
      if(!res.ok) throw new Error("failed to fetch");
      return res.json();
    }
  })