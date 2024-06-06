import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <div className="flex justify-center pb-20">
      <div className="relative w-[75rem] lg:px-8">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
