"use client"
import React from 'react';
import { IoStarOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

interface StarProps {
  isFavorite: boolean;
}

const Star: React.FC<StarProps> = ({ isFavorite, }) => {
  return (
    <div className='star' style={{ cursor: "pointer" }}>
      {isFavorite ? <FaStar style={{ color: "#ffe500" }} /> : <IoStarOutline />}
    </div>
  );
};

export default Star;