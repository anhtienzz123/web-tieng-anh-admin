const { createSlice } = require("@reduxjs/toolkit");

const KEY = "book";


const bookSlice = createSlice({
    name: KEY,
    initialState: {
        isLoading: false,
        isBookFormVisible: false,
        books: []
    },
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
    },
    extraReducers: {

    }
});

const { reducer, actions } = bookSlice;
export const { setLoading } = actions;
export default reducer;