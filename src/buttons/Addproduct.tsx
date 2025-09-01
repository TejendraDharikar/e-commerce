import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import Modal from "./modal";
import ProductForm from "./ProductForm";
import Cards from "../components/Cards";

const Addproduct: React.FC = () => {
  const [openModal, setOpenModel] = useState<boolean>(false);

  return (
    <div>
      {openModal ? (
        <Modal>
          <div className="bg-white w-2/6 rounded-md p-4">
            <div className="flex justify-end">
              <IoMdCloseCircle
                onClick={() => setOpenModel(false)}
                className="text-red-500 text-xl cursor-pointer"
              />
            </div>
            <ProductForm onSubmit={() => {}} isPending={false} />
          </div>
        </Modal>
      ) : null}
      <div className="mx-auto">
        <button
          onClick={() => setOpenModel(true)}
          className="border-2 rounded-md hover:bg-blue-500 hover:text-white w-50 mt-4  text-center hover:border-blue-500"
        >
          Add product
        </button>
      </div>
      <Cards />
    </div>
  );
};

export default Addproduct;
