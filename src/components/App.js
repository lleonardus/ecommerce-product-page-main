import { useState } from "react";
import { Header } from "./Header";
import { Main } from "./Main";

export default function App() {
  const [numberOfSneakers, setNumberOfSneakers] = useState(0);

  return (
    <div className="flex justify-center pt-5 md:p-5">
      <div className="w-[90rem]">
        <Header
          numberOfSneakers={numberOfSneakers}
          setNumberOfSneakers={setNumberOfSneakers}
        />
        <Main
          numberOfSneakers={numberOfSneakers}
          setNumberOfSneakers={setNumberOfSneakers}
        />
      </div>
    </div>
  );
}
