import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "Visitor",
    user_type: "visitor",
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login(state,action) {
            state.username =  action.payload.username
            state.user_type = action.payload.user_type
        },

        logout(state) {
            state.username = "Visitor"
            state.user_type = "visitor"
        }
    }
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer


// function userReducer(state = initialState, action) {
//     switch (action.type) {
//         case "user/login":
//             return {
//                 ...state,
//                 user_type: action.payload.user_type
//             }
//         case "user/logout": 
//             return {
//                 ...state,
//                  user_type: "visitor"
//         }
//         default:
//             return state;
//     }
// }

// export default userReducer