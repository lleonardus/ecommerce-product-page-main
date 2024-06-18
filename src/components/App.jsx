import { CartProvider } from "../contexts/CartContext";
import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <div className="flex justify-center pb-20">
      <div className="relative w-[75rem] md:px-10">
        <CartProvider>
          <Header />
          <Main />
        </CartProvider>
      </div>
    </div>
  );
}

export default App;
