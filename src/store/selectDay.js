import { create } from "zustand";
import moment from "moment";

const useSelectDayStore = create((set) => ({
  selectDay: moment(),
  setSelectDay: (date) => set({ selectDay: date }),
}));

export default useSelectDayStore;
