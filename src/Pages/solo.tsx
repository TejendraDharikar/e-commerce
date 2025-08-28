import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { FetchSingleProduct } from '../components/apidata';
import type { Product } from '../components/apidata';

const Solo = () => {
  const { id } = useParams<{ id: string }>();

  const query = useQuery<Product, Error>({
    queryKey: ["getproduct", id],
    queryFn: () => FetchSingleProduct(Number(id)),
  });

  if (query.isLoading) return <div>Loading...</div>;
  if (query.isError) return <div>Error: {query.error?.message}</div>;

  if (!query.data) return <div>No product found</div>;

  const data = query.data;






  return (
    <div  className=" h-150 w-150 xl:mx-auto p-4 shadow-md rounded-md shadow-blue-500 cursor-pointer  bg-blue-200 m-20 sm:mx-auto lg:mx-auto ">

<img src={data.image} alt="products" className=" h-32 mx-auto mb-4"/>
        
        <div className="mt-2 text-center font-bold text-lg">${data.price}</div>
            <div className="text-sm mt-2 font-bold text-center">Category: {data.category}</div>
        <h1 className="text-lg font-semibold mt-2">{data.title}</h1>

        <div className="text-sm mt-2 ">{data.description}</div>
    
        </div>
  );
};
export default Solo;
