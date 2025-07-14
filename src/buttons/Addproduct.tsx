import { useState } from "react"
import { IoMdCloseCircle } from "react-icons/io";
import Cards from "../components/Cards";
import Modal from "./modal";
import { Form } from "react-router-dom";

const Addproduct = () => {
  const[openModal,setOpenModel]=useState(false);

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
<Form/>
          
          </div>
        </Modal>
      ) : null}
  <div className="mx-auto">
       <button className="border-2 rounded-md hover:bg-blue-500 hover:text-white w-50 mt-4  text-center " >Add product</button>
    </div>
    <Cards/>
    </div>
  
  )
}

export default Addproduct
