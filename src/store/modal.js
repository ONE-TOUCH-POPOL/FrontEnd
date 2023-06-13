import { create } from "zustand";

const useStore = create((set) => ({
  modal: false,
  modal_text: "텍스트 입니다.",
  set_modal: () => set((state) => ({ modal: !state.modal })),
  set_modal_close: () => set((state) => ({ modal: false })),
  set_modal_text: (text) => set((state) => ({ modal_text: text })),
}));

export default useStore;
