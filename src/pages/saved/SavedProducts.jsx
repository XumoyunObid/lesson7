import { useSelector } from "react-redux";
import StoreCard from "../../Components/Cards/StoreCard";
import wishlistReducer from './../../redux/reducers/wishlistReducer';

const SavedProducts = () => {
  const { products } = useSelector((state) => state.wishlistReducer);

  return (
    <div>
      {products.map((item) => (
        <StoreCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default SavedProducts;
