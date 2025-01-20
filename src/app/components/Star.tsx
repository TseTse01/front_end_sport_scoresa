"use client"
import React, { useState } from 'react';
import { IoStarOutline, IoStar } from "react-icons/io5";

// Ajout du typage pour un composant fonctionnel
const Star: React.FC = () => {
  // Typage explicite de `useState` en tant que booléen
  const [isActive, setIsActive] = useState<boolean>(false);

  // Pas de typage nécessaire pour `handleSubmit` car TypeScript peut l'inférer automatiquement
  const handleSubmit = (): void => {
    setIsActive(!isActive);
  };

  return (
    <div onClick={handleSubmit} className='star'
      style={{ cursor: "pointer", }}>
      {!isActive ? <IoStarOutline /> : <IoStar />}
    </div>
  );
};

export default Star;