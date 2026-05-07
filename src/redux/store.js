import { configureStore } from "@reduxjs/toolkit";
import searchreducer from "./features/searchslice";
import collectionreducer from "./features/collectionslice";

export const store = configureStore({
  reducer: {
    search: searchreducer,
    collection: collectionreducer,
  },
});
