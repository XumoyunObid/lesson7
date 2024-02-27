import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleAmmount } from "../../redux/reducers/productReducer";
import { removeProduct } from "../../redux/reducers/productReducer";

const StoreCard = ({ id, name, price, count, img, userCount, userPrice }) => {
  const dispatch = useDispatch();
  const [showBtn, setShowBtn] = useState(false);

  const addCount = () => {
    if (userCount <= count) {
      dispatch(toggleAmmount({ type: "ADD", id }));
    } else {
      setShowBtn(false);
    }
  };

  const removeCount = () => {
    if (userCount > 1) {
      dispatch(toggleAmmount({ type: "REMOVE", id }));
    }
  };

  const deleteProduct = () => {
    dispatch(removeProduct({ id }));
  };
  return (
    <div className="container shadow-2xl rounded-lg overflow-hidden mt-[50px] p-4 w-1/2 border">
      <div className="flex items-center justify-between overflow-hidden h-[150px]">
        <div className="w-[150px] h-[150px]">
          <img src={img} alt="" />
        </div>
        <div className="text-center">
          <h2 className="text-[30px]">{name}</h2>
          <strong className="text-xl">Price: ${price}</strong>
        </div>
        <div className="flex items-center gap-[40px]">
          <div className="flex flex-col gap-4 py-7">
            <p>
              Total left:{" "}
              <span className="bg-blue-500 px-1 text-white rounded-md">
                {count}
              </span>
            </p>
            <div className="flex items-center gap-5">
              <button
                disabled={showBtn || userCount === count}
                onClick={addCount}
                className="text-white bg-blue-600 px-3 py-2 rounded-lg disabled:bg-red-600"
              >
                +
              </button>
              <span>{userCount}</span>
              <button
                onClick={removeCount}
                className="text-white bg-blue-600 px-3 py-2 rounded-lg"
              >
                -
              </button>
            </div>
            <p>Total: ${userPrice}</p>
          </div>
          <div className="flex flex-col gap-5">
            <button
              onClick={deleteProduct}
              className="bg-red-600 px-3 py-2 text-white rounded-lg"
            >
              Remove
            </button>
            <button className="bg-yellow-400 p-2 text-black rounded-lg">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
