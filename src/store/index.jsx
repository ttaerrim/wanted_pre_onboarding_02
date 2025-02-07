import { dateToString } from "utils/dateToString";

const { configureStore, createSlice } = require("@reduxjs/toolkit");

const periodInitialState = {
  exposure: {
    radio: "제한 없음",
    calendar: {
      start: dateToString(new Date()),
      end: dateToString(new Date()),
    },
  },
  sales: {
    radio: "제한 없음",
    calendar: {
      start: dateToString(new Date()),
      end: dateToString(new Date()),
    },
  },
};

const setPeriodSlice = createSlice({
  name: "period",
  initialState: periodInitialState,
  reducers: {
    exposureRadio(state, action) {
      state.exposure.radio = action.payload;
    },
    exposureCalenderStart(state, action) {
      state.exposure.calendar.start = action.payload;
    },
    exposureCalenderEnd(state, action) {
      state.exposure.calendar.end = action.payload;
    },
    salesRadio(state, action) {
      state.sales.radio = action.payload;
    },
    salesCalenderStart(state, action) {
      state.sales.calendar.start = action.payload;
    },
    salesCalenderEnd(state, action) {
      state.sales.calendar.end = action.payload;
    },
  },
});

const uploadInitialState = { item: [{ id: "", name: "" }] };

const imgUploadSlice = createSlice({
  name: "upload",
  initialState: uploadInitialState,
  reducers: {
    introduce(state, action) {
      state.introduce = [...state.introduce, action.payload];
    },
    recommend(state, action) {
      state.recommend = action.payload;
    },
  },
});

const optionInitialState = {
  optionSet: [],
  option: [],
  smallOption: [],
};
const optionSlice = createSlice({
  name: "option",
  initialState: optionInitialState,
  reducers: {
    optionSet(state, action) {
      state.optionSet = action.payload;
    },
    option(state, action) {
      state.optionSet = action.payload;
    },
    smallOption(state, action) {
      state.smallOption = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    period: setPeriodSlice.reducer,
    upload: imgUploadSlice.reducer,
    option: optionSlice.reducer,
  },
});

export const setPeriodActions = setPeriodSlice.actions;
export const imgUploadActions = imgUploadSlice.actions;
export const optionActions = optionSlice.actions;

export default store;
