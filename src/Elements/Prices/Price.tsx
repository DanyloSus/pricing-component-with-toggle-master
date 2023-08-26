import usePriceStore from "../../store";

interface PriceProps {
  name: string;
  priceMon: number;
  priceAnn: number;
  storage: number;
  allowed: number;
  sendUp: number;
  isCool?: boolean;
}

const Price = ({
  name,
  priceAnn,
  priceMon,
  sendUp,
  storage,
  allowed,
  isCool,
}: PriceProps) => {
  const isMon = usePriceStore((s) => s.isMon);

  return (
    <div
      className={`h-[453px] w-[350px] flex flex-col justify-between items-center text-center shadow-lg rounded-xl xl:max-w-[350px] xl:w-full xl:whitespace-break-spaces ${
        isCool
          ? " bg-gradient-to-br from-linear-gradient-from to-linear-gradient-to text-very-light-grayish-blue h-[500px] lg:h-[453px] py-[54px] px-[31px] lg:p-[31px]"
          : "bg-white p-[31px] text-dark-grayish-blue"
      }`}
    >
      <p>{name}</p>
      <h1 className="text-7xl flex items-center">
        <span className="text-4xl mr-3">$</span>
        {isMon ? priceMon.toFixed(2) : priceAnn.toFixed(2)}
      </h1>
      <hr className="w-full" />
      <p>
        {storage >= 1000
          ? `${(storage / 1000).toFixed(0)} TB`
          : `${storage} GB`}{" "}
        Storage
      </p>
      <hr className="w-full" />
      <p>{allowed} Users Allowed</p>
      <hr className="w-full" />
      <p>Send up to {sendUp} GB</p>
      <hr className="w-full" />
      <button
        className={`w-full rounded-lg text-xs tracking-widest pb-3 pt-[13px] border-0 hover:border-2 transition-all ${
          isCool
            ? "bg-white border-white text-linear-gradient-to hover:bg-transparent hover:text-white"
            : "bg-gradient-to-r from-linear-gradient-from to-linear-gradient-to text-white border-linear-gradient-to hover:bg-none hover:text-linear-gradient-to"
        }`}
      >
        LEARN MORE
      </button>
    </div>
  );
};

export default Price;
