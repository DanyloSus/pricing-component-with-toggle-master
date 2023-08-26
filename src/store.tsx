import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface PriceStore {
  isMon: boolean;
  changeIsMon: () => void;
}

const usePriceStore = create<PriceStore>()(
  devtools((set) => ({
    isMon: false,
    changeIsMon: () => {
      set((s) => ({ isMon: !s.isMon }));
    },
  }))
);

export default usePriceStore;
