import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  renderedCard: [
    "formInfo",
    "plan",
    "addOns",
    "confirmationStep",
    "finishCard",
  ],
  step: 1,
  title: [
    "Personal info",
    "Select your plan",
    "Pick add-ons",
    "Finishing up",
    "Thank you!",
  ],
  description: [
    "Please provide your name, email address, and phone number.",
    "You have the option of monthly or yearly billing.",
    "Add-ons help enhance your gaming experience.",
    "Double-check everything looks OK before confirming.",
    "Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.",
  ],
};

export const stepsSlice = createSlice({
  name: "steps",
  initialState,
  reducers: {
    nextStep: (state) => {
      state.step < 5 ? state.step++ : state.step;
    },
    prevStep: (state) => {
      state.step > 1 ? state.step-- : state.step;
    },
  },
});

export const { nextStep, prevStep } = stepsSlice.actions;

export default stepsSlice.reducer;
