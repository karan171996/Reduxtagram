import { createSlice } from "@reduxjs/toolkit";
import comments from "../data/comments";
// function comments(state = [], action) {
//   if (typeof action.postId !== "undefined") {
//     return {
//       // take the current state
//       ...state,
//       // overwrite this post with a new one
//       [action.postId]: postComments(state[action.postId], action),
//     };
//   }
//   return state;
// }

const initialState = comments;
export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    getComments: (state) => {
      // return state;
    },
  },
});
export const { getComments } = commentsSlice.actions;

export default commentsSlice.reducer;
