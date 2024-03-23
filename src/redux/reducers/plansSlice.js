import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  planIsMonthly: true,
  monthly: {
    arcade: "$9/mo",
    advanced: "$12/mo",
    pro: "$15/mo",
    onlineService: "+$1/mo",
    largerStorage: "+$2/mo",
    customizableProfile: "+$2/mo",
  },
  year: {
    arcade: "$90/yr",
    advanced: "$120/yr",
    pro: "$150/yr",
    onlineService: "+$10/yr",
    largerStorage: "+$20/yr",
    customizableProfile: "+$20/yr",
  },
};

export const plansSlice = createSlice({
  name: "plans",
  initialState,
  reducers: {
    changeBillingType: (state) => {
      state.planIsMonthly = !state.planIsMonthly;
    },
  },
});

export const { changeBillingType } = plansSlice.actions;

export default plansSlice.reducer;
