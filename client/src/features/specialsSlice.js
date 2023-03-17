
// Action Creators


export const createSpecials = (specials) => {
    return {
        type: "specials/create",
        payload: specials,
    }
}

export const addSpecial = (special) => {
    return {
        type: "special/add",
        payload: special,
    };
}

export const removeSpecial = (id) => {
    return {
        type: "special/remove",
        payload: id,
    }
}

// Reducers
const initialState = [];

export default function specialsReducer(state = initialState, action) {
    switch (action.type) {
        case "specials/create":
            return action.payload
        
        case "special/add":
            return [...state, action.payload];

        case "special/remove":
            return state.filter((author) => author.id !== action.payload)

        default:
            return state;
    }
}