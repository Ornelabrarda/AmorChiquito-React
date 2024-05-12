import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import { ItemListContainer } from "./components/itemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/itemDetailContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";
import { Checkout } from "./components/Checkout/Checkout";
import { Cart } from "./components/Cart/Cart";
import { CartProvider } from "./context/cartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header title="Amor chiquito" />
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route
            path="category/:category"
            element={<ItemListContainer />}
          ></Route>
          <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/*" element={404}></Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
