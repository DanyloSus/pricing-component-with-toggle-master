import { useEffect } from "react";
import Header from "./Elements/Header";
import Prices from "./Elements/Prices";

const App = () => {
  const reveal = () => {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", reveal);

    reveal();
  }, []);

  return (
    <main className="flex items-center justify-center min-h-screen w-screen flex-col py-[70px] overflow-hidden">
      <img
        src="./bg-bottom.svg"
        alt="bg bottom"
        className="absolute bottom-0 left-0 xl:hidden"
      />
      <img
        src="./bg-top.svg"
        alt="bg top"
        className="absolute top-0 right-0 overflow-x-hidden"
      />
      <Header />
      <Prices />
    </main>
  );
};

export default App;
