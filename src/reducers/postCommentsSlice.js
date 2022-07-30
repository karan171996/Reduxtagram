import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const postComments = createSlice({
  name: "postComments",
  initialState,
  reducers: {
    addComment: (state, action) => {
      // return [
      //   ...state,
      //   {
      //     user: action.author,
      //     text: action.comment,
      //   },
      // ];
    },
    removeComment: (state, action) => {
      // return [
      //   // from the start to the one we want to delete
      //   ...state.slice(0, action.i),
      //   // after the deleted one, to the end
      //   ...state.slice(action.i + 1),
      // ];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addComment, removeComment } = postComments.actions;

export default postComments.reducer;
