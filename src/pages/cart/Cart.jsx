import { useSelector } from "react-redux";
import productReducer from "./../../redux/reducers/productReducer";
import StoreCard from "../../Components/Cards/StoreCard";

const Cart = () => {
  const { products, totalPrice } = useSelector((state) => state.productReducer);

  return (
    <div>
      <h1 className="my-5 text-3xl text-center">Total price: ${totalPrice}</h1>
      {products.map((item) => (
        <StoreCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Cart;
