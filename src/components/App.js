import { Header } from "./Header";
import { Main } from "./Main";

export default function App() {
  return (
    <div className="flex justify-center pt-5 md:p-5">
      <div className="w-[90rem]">
        <Header />
        <Main />
      </div>
    </div>
  );
}
