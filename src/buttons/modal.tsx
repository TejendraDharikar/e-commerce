import React from "react";
import type { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <div className="bg-green-500 relative z-50">
      <div className="fixed bg-black/50 inset-0">
        <div className="fixed inset-0 flex justify-center items-center p-4">
          <div className="flex items-center justify-center w-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
