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
  localAddress: {
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
  defaultHlurb: {
    hlurbDate: "",
    hlurb: "",
    hlurbActions: "",
    hlurbMode: "",
  },
  defaultProject: {
    zonDate: "",
    zonAdmin: "",
    zonRequest: "",
  },
  hlurbRadio: true,
  zoningRadio: true,
  overallData: "",
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
    setHlurbRadio: (state, action) => {
      state.hlurbRadio = action.payload;
    },
    setZoningRadio: (state, action) => {
      state.zoningRadio = action.payload;
    },
    setOverallData: (state, action) => {
      state.overallData = { ...state.overAllData, ...action.payload };
    },
    setLocalAddress: (state, action) => {
      state.localAddress = { ...state.localAddress, ...action.payload };
    },
    setDefaultHlurb: (state, action) => {
      state.defaultHlurb = { ...state.defaultHlurb, ...action.payload };
    },
    setDefaultProject: (state, action) => {
      state.defaultProject = { ...state.defaultProject, ...action.payload };
    },
  },
});

export const {
  corpAddDisable,
  authRepDisable,
  proInfoDisable,
  updateAddress,
  setHlurbRadio,
  setZoningRadio,
  setOverallData,
  setLocalAddress,
  setDefaultHlurb,
  setDefaultProject,
} = applicationSlice.actions;

export default applicationSlice.reducer;
