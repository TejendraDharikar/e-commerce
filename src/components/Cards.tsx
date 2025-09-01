import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apidata, deletePost, type Product } from "./apidata";
import { useState } from "react";
import UpdateProduct from "../buttons/UpdateProduct";

const Cards = () => {
  const Client = useQueryClient();
  const { data, isLoading, isError } = apidata();

  const [isUpdateModelOpen, setIsUpdateModelOpen] = useState<boolean>(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // deleting with mutation
  const deleteMutation = useMutation({
    mutationFn: (id: number) => deletePost(id),
    onSuccess: (data, id) => {
      console.log("deleted data is ", data, id);

      // updates cache
      Client.setQueryData(["getproducts"], (oldData: any) => {
        return oldData.filter((item: any) => item.id !== id);
      });
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        Loading...
      </div>
    );
  }
  if (isError) {
    console.log("Error while fetching data");
    return <div>Error fetching data</div>;
  }
  if (!data) {
    console.log("Data is undefined or null");
    return <div>Data</div>;
  }

  return (
    <div>
      {isUpdateModelOpen && editingProduct && (
        <UpdateProduct
          product={editingProduct}
          onClose={() => {
            setIsUpdateModelOpen(false);
            setEditingProduct(null);
          }}
        />
      )}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 p-6">
        {data?.map((product) => (
          <div
            key={product.id}
            className="p-4 shadow-md rounded-md bg-blue-200 hover:shadow-blue-500 transition duration-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-32 mx-auto mb-4"
            />
            <div className="mt-2 text-center font-bold text-lg">
              ${product.price}
            </div>
            <h1 className="text-lg font-semibold mt-2">{product.title}</h1>
            <div className="text-sm mt-2">{product.description}</div>

            <div className="grid grid-cols-2 gap-3 mt-7">
              <button
                className="border-2 hover:bg-green-500 hover:text-white hover:border-green-500 w-full"
                onClick={() => {
                  setEditingProduct(product);
                  setIsUpdateModelOpen(true);
                }}
              >
                UPDATE
              </button>

              <button
                className="border-2 hover:text-white border-black hover:bg-red-700 hover:border-red-700 w-full"
                onClick={() => deleteMutation.mutate(product.id!)}
              >
                REMOVE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
