import Price from "./Prices/Price";

const Prices = () => {
  return (
    <section className="flex items-center relative z-10">
      <Price
        name="Basic"
        priceAnn={199.99}
        storage={500}
        priceMon={19.99}
        allowed={2}
        sendUp={3}
      />
      <Price
        name="Professional"
        priceAnn={249.99}
        storage={1000}
        priceMon={24.99}
        allowed={5}
        sendUp={10}
        isCool={true}
      />
      <Price
        name="Master"
        priceAnn={399.99}
        storage={2000}
        priceMon={39.99}
        allowed={10}
        sendUp={20}
      />
    </section>
  );
};

export default Prices;
