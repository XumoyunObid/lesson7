import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Cart from "./pages/cart/Cart";
import SavedProducts from "./pages/saved/SavedProducts";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<SavedProducts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
