import React from "react";
import {  useMutation, useQueryClient, } from "@tanstack/react-query";
import ProductForm from "./ProductForm";
import Modal from "./modal";
import { type Product, updateProduct } from "../components/apidata";

type UpdateProductProps = {
  product: Product;
  onClose: () => void;
};

const UpdateProduct: React.FC<UpdateProductProps> = ({ product, onClose }) => {
  const client =   useQueryClient();

const mutation = useMutation({
  mutationFn: updateProduct,
  onSuccess:  (updatedProduct) => {
    client.setQueryData<Product[]>(["getproducts"], (oldProducts) =>
      oldProducts
        ? oldProducts.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
        : []
    );
    onClose(); // Close only after cache is updated
  },
  onError: () => alert("Failed to update product"),

});


  return (
    <Modal> 
      <div className="bg-white w-2/6 rounded-md p-4">
        <button onClick={onClose} className="text-red-500 text-xl cursor-pointer mb-4">Close</button>
        <ProductForm
          initialProduct={product}
          isPending={mutation.isPending}
          onSubmit={ (updatedProduct) =>{mutation.mutate(updatedProduct);
           
          } }
          
        />
      </div>
    </Modal>
  );
};

export default UpdateProduct;

