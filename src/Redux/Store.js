import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { api } from "./Services/api.js";
import AuthSlice from "../components/Authentication/firebaseAuth/firebaseAuthSlice.js";

const CombineReducer = combineReducers({
    [api.reducerPath]: api.reducer,
    auth: AuthSlice,
});

export const Store = configureStore({
    reducer: CombineReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

// export type AppDispatch = typeof Store.dispatch;
