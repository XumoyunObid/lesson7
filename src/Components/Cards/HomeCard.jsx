import React, { useState } from "react";
import { addProduct, removeProduct } from "../../redux/reducers/productReducer";
import { useDispatch, useSelector } from "react-redux";
import { toggleAdd, toggleRemove } from "../../redux/reducers/wishlistReducer";

const HomeCard = (product) => {
  const dispatch = useDispatch();
  const [showBtn, setShowBtn] = useState(false);
  const [toggleBtn, setToggleBtn] = useState(false);

  const handleAddProduct = () => {
    dispatch(addProduct(product));
    setShowBtn(!showBtn);
  };

  const handleRemove = () => {
    dispatch(removeProduct(product));
    setShowBtn(!showBtn);
  };

  const handleToggle = () => {
    dispatch(toggleAdd(product));
    setToggleBtn(!toggleBtn);
  };

  const handleRemoveToggle = () => {
    dispatch(toggleRemove(product));
    setToggleBtn(!toggleBtn);
  };

  return (
    <div className="h-[400px] border shadow-xl rounded-xl overflow-hidden p-4 flex flex-col justify-between">
      <div className="flex h-[380px] justify-center items-center">
        <img src={product.img} alt="" />
      </div>
      <div>
        <div className="flex items-center justify-between py-2">
          <h2 className="text-xl">{product.name}</h2>
          <strong>${product.price}</strong>
        </div>
        <div className="flex gap-4">
          {!showBtn ? (
            <button
              onClick={handleAddProduct}
              className="bg-yellow-400 rounded-lg text-center py-2 w-full text-black"
            >
              Add
            </button>
          ) : (
            <button
              onClick={handleRemove}
              className="bg-red-600 rounded-lg text-center py-2 w-full text-white"
            >
              Remove
            </button>
          )}
          {!toggleBtn ? (
            <button
              onClick={handleToggle}
              className=" bg-transparent border-2 rounded-lg w-[50px] text-center py-2 text-black"
            >
              <i className="fa-regular fa-heart"></i>
            </button>
          ) : (
            <button
              onClick={handleRemoveToggle}
              className="bg-red-500 border-2 rounded-lg w-[50px] text-center py-2 text-black"
            >
              <i className="fa-regular fa-heart"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
