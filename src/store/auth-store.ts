import { create } from "zustand";

const useBearStore = create<{
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
}>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
