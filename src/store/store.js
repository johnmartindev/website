import { create } from "zustand";

export const useSkillsStore = create((set) => ({
  skillIndex: 1,
  //   updateSkillIndex: (index) =>
  //     set((state) => ({ skillIndex: state.skillIndex + 1 })),
  setSkillIndex: (index) => set({ skillIndex: index }),
}));
