import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  testing: "zaf",
  address: {
    building: "",
    barangay: "",
    city: "",
  },
  addressCopy: {
    corpBuilding: "",
    corpBarangay: "",
    corpCity: "",
    authBuilding: "",
    authBarangay: "",
    authCity: "",
    projBuilding: "",
    projBarangay: "",
    projCity: "",
  },
  radioValue: {
    corpAdd: false,
    authRepAdd: false,
    proInfoAdd: false,
  },
};

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    display: (state) => {
      console.log(state.testing);
    },
  },
});

export const { display } = applicationSlice.actions;

export default applicationSlice.reducer;
