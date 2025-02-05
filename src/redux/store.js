import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import { newsApi } from "./api/newsApi";
import imageSlice from "./slice/ImageSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    imgStore: imageSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, newsApi.middleware),
});
