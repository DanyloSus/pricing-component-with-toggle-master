import { Switch } from "@material-tailwind/react";
import usePriceStore from "../store";

const Header = () => {
  const changeIsMon = usePriceStore((s) => s.changeIsMon);

  return (
    <header className="flex flex-col justify-center items-center relative z-10">
      <h2 className="text-3xl text-grayish-blue">Our Pricing</h2>
      <div className="flex items-start gap-6 text-light-grayish-blue my-12">
        <p>Annually</p>
        <Switch
          crossOrigin="anonymous"
          onChange={changeIsMon}
          className="h-8 w-14 bg-gradient-to-r from-linear-gradient-from to-linear-gradient-to hover:opacity-50 transition-opacity"
          circleProps={{ className: "h-6 w-6 top-4 left-1 border-none" }}
        />
        <p className="ml-6">Monthly</p>
      </div>
    </header>
  );
};

export default Header;
