import { createSlice } from "@reduxjs/toolkit";
import { toast, Bounce, Zoom } from "react-toastify";

let initialState = {
  items: JSON.parse(localStorage.getItem("collection")) || [],
};

const collectionslice = createSlice({
  name: "collection",

  initialState,

  reducers: {
    addtocollection: (state, action) => {
      let alreadyexist = state.items.find((item) => {
        return item.id === action.payload.id;
      });
      if (!alreadyexist) {
        state.items.push(action.payload);
        localStorage.setItem("collection", JSON.stringify(state.items));
      }
    },

    removefromcollection: (state, action) => {
      let newdata = state.items.filter((item) => {
        return item.id !== action.payload.id;
      });
      state.items = newdata;
      localStorage.setItem("collection", JSON.stringify(state.items));
    },

    clearcollection: (state) => {
      state.items = [];
      localStorage.setItem("collection", JSON.stringify(state.items));
    },

    toastify: () => {
      toast.success("Item has added to the collection", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    },

    removetoastify: () => {
      toast.error("Item has been removed from the collection", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    },

    cleartoastify: () => {
      toast.error("Collection has been cleared", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    },
  },
});

export const {
  addtocollection,
  removefromcollection,
  clearcollection,
  toastify,
  removetoastify,
  cleartoastify,
} = collectionslice.actions;

export default collectionslice.reducer;
