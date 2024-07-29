"use client";
import React, { useState } from "react";
import RegisterModal from "./components/register"; // Asegúrate de ajustar la ruta si es necesario

const MainComponent: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="p-4">
      <button
        onClick={openModal}
        className="bg-[#8D5CF6] text-white py-2 px-4 rounded hover:bg-[#7c4ee4]"
      >
        Open Register Modal
      </button>

      <RegisterModal showModal={showModal} setShowModal={closeModal} />
    </div>
  );
};

export default MainComponent;
