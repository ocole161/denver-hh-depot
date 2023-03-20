import { createSlice } from "@reduxjs/toolkit";

const specialsSlice = createSlice({
    name: 'specials',
    initialState: [],
    reducers: {
        setSpecials(state, action) {
            return action.payload
        },

        addSpecial(state, action) {
            return state.push(action.payload);
        },

        removeSpecial(state, action) {
            return state.filter((special) => special.id !== action.payload)
        }
    }
})

export const { setSpecials, addSpecial, removeSpecial } = specialsSlice.actions;
export default specialsSlice.reducer;


// OLD METHOD

// // Action Creators


// export const createSpecials = (specials) => {
//     return {
//         type: "specials/create",
//         payload: specials,
//     }
// }

// export const addSpecial = (special) => {
//     return {
//         type: "special/add",
//         payload: special,
//     };
// }

// export const removeSpecial = (id) => {
//     return {
//         type: "special/remove",
//         payload: id,
//     }
// }

// // Reducers
// const initialState = [];

// export default function specialsReducer(state = initialState, action) {
//     switch (action.type) {
//         case "specials/create":
//             return action.payload
        
//         case "special/add":
//             return [...state, action.payload];

//         case "special/remove":
//             return state.filter((special) => special.id !== action.payload)

//         default:
//             return state;
//     }
// }