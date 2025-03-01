import { configureStore, createSlice } from "@reduxjs/toolkit";
import contactsSlice from './contactSlice.js'
import filtersSlice from './filtersSlice.js'

const store = configureStore({
    reducer:{
        contacts: contactsSlice,
        filters: filtersSlice,
    },
});
export default store;