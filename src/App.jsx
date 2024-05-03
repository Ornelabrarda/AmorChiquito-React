import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import { ItemListContainer } from "./components/itemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/itemDetailContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";
import { CartProvider } from "./context/cartContext";
import { Checkout } from "./components/Checkout/checkout";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header title="Amor chiquito" />
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route path="/category/:id" element={<ItemListContainer />}></Route>
          <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
          <Route path="/*" element={"404"}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
