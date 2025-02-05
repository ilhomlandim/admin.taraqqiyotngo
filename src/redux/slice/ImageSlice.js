import { createSlice } from "@reduxjs/toolkit";

const imageSlice = createSlice({
  name: "image",
  initialState: {
    imgData: false,
  },
  reducers: {
    addImage: (state) => {
      state.imgData = true;
    },
    deleteImg: (state) => {
      state.imgData = false;
    },
  },
});

export const { addImage, deleteImg } = imageSlice.actions;
export default imageSlice.reducer;
