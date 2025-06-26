import { create } from "zustand";

export const useTradeStore = create((set, get) => ({
  PNL: 0,
  setPNL: (data) => {
    set({ PNL: data });
  },
}));
