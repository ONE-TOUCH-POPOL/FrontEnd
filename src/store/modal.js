import { create } from "zustand";

const useStore = create((set) => ({
  modal: false,
  modal_text: "텍스트 입니다.",
  modal_height: "30%",
  modal_width: "30%",
  set_modal: () => set((state) => ({ modal: !state.modal })),
  set_modal_close: () => set((state) => ({ modal: false })),
  set_modal_text: (text) => set((state) => ({ modal_text: text })),
  set_modal_size: (height, width) => set(() => ({ modal_height: height, modal_width: width })),
}));

export default useStore;
