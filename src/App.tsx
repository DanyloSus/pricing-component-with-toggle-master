import Header from "./Elements/Header";
import Prices from "./Elements/Prices";

const App = () => {
  return (
    <main className="flex items-center justify-center min-h-screen w-screen flex-col">
      <img
        src="./bg-bottom.svg"
        alt="bg bottom"
        className="absolute bottom-0 left-0"
      />
      <img src="./bg-top.svg" alt="bg top" className="absolute top-0 right-0" />
      <Header />
      <Prices />
    </main>
  );
};

export default App;
