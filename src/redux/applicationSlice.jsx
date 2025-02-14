import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  disable: {
    corpAdd: false,
    authRepAdd: false,
    proInfoAdd: false,
  },
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
    corpAddDisable: (state, action) => {
      state.disable.corpAdd = action.payload;
    },
    authRepDisable: (state, action) => {
      state.disable.authRepAdd = action.payload;
    },
    proInfoDisable: (state, action) => {
      state.disable.proInfoAdd = action.payload;
    },
    updateAddress: (state, action) => {
      state.address = action.payload;
    },
  },
});

export const { corpAddDisable, authRepDisable, proInfoDisable, updateAddress } =
  applicationSlice.actions;

export default applicationSlice.reducer;
