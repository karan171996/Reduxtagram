// function posts(state = [], action) {
//   switch(action.type) {
//     case 'INCREMENT_LIKES' :
//       console.log("Incrementing Likes!!");
//       const i = action.index;
//       return [
//         ...state.slice(0,i), // before the one we are updating
//         {...state[i], likes: state[i].likes + 1},
//         ...state.slice(i + 1), // after the one we are updating
//       ]
//     default:
//       return state;
//   }
// }

// export default posts;

import { createSlice } from "@reduxjs/toolkit";
import posts from "../data/posts";
const initialState = posts;

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    incrementLikes: (state, action) => {
      state.forEach((item) => {
        if (item.id === action.payload) {
          item.likes++;
        }
      });
    },
  },
});

export const { incrementLikes } = postSlice.actions;

export default postSlice.reducer;
