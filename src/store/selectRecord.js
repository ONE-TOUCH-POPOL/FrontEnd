import { create } from "zustand";

export const useSelectRecordStore = create((set) => ({
  selectRecord: null,
  setSelectRecord: (record) => set({ selectRecord: record }),
}));

export default useSelectRecordStore;
