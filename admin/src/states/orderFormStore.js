import { create } from "zustand";

export const useOrderFormStore = create((set, get) => ({
  priceType: "Market Price",
  setPriceType: (value) => set({ priceType: value }),
  pendingPrice: 0,
  setPendingPrice: (value) => set({ pendingPrice: value }),
  multiplierOptions: [100, 200, 300, 400, 500],
  multiplierValue: 100,
  setMultiplierValue: (value) => set({ multiplierValue: value }),
  isSetLossEnabled: false,
  toggleSetLoss: () =>
    get().isSetLossEnabled
      ? set({ isSetLossEnabled: false })
      : set({ isSetLossEnabled: true }),
  setLossValue: 0,
  setSetLossValue: (value) => set({ setLossValue: value }),
  increaseSetLossValue: () => set({ setLossValue: get().setLossValue + 1 }),
  decreaseSetLossValue: () => set({ setLossValue: get().setLossValue - 1 }),
  isTakeProfitEnabled: false,
  toggleTakeProfit: () =>
    get().isTakeProfitEnabled
      ? set({ isTakeProfitEnabled: false })
      : set({ isTakeProfitEnabled: true }),
  TakeProfitValue: 0,
  setTakeProfitValue: (value) => set({ TakeProfitValue: value }),
  increaseTakeProfitValue: () =>
    set({ TakeProfitValue: get().TakeProfitValue + 1 }),
  decreaseTakeProfitValue: () =>
    set({ TakeProfitValue: get().TakeProfitValue - 1 }),
  isLotsEnabled: false,
  toggleLots: () =>
    get().isLotsEnabled
      ? set({ isLotsEnabled: false })
      : set({ isLotsEnabled: true }),
  LotsValue: 0.1,

  increaseLotsValue: (value) =>
    set({
      LotsValue: Math.round((get().LotsValue + 0.1) * 10) / 10,
    }),

  decreaseLotsValue: () =>
    set({
      LotsValue:
        get().LotsValue < 0.2
          ? 0.1
          : Math.round((get().LotsValue - 0.1) * 10) / 10,
    }),
  setLotsValue: (value) => set({ LotsValue: value }),
}));
