import {createAction, createReducer} from "@reduxjs/toolkit";

type InitialStateType = {
    count: number,
    max: number,
    min: number,
    isSet: boolean,
    isMinInputError: boolean,
    isMaxInputError: boolean,
    error: string | null,
}

const initialState: InitialStateType = {
    count: 0,
    max: 0,
    min: 0,
    isSet: false,
    error: null,
    isMinInputError: false,
    isMaxInputError: false
}

export const setIsSet = createAction<boolean>("count/setIsSet");

export const setIsMinInputError = createAction<boolean>("count/setIsMinInputError");

export const setIsMaxInputError = createAction<boolean>("count/setIsMaxInputError");

export const setMin = createAction<number>("count/setMin");

export const setMax = createAction<number>("count/setMax");

export const setCount = createAction<number>("count/setCount");

export const setError = createAction<string | null>("count/setError");

export const countReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setIsSet, (state, action) => {
            state.isSet = action.payload
        })
        .addCase(setMin, (state, action) => {
            state.min = action.payload
        })
        .addCase(setMax, (state, action) => {
            state.max = action.payload
        })
        .addCase(setError, (state, action) => {
            state.error = action.payload
        })
        .addCase(setCount, (state, action) => {
            state.count = action.payload
        })
        .addCase(setIsMaxInputError, (state, action) => {
            state.isMaxInputError = action.payload
        })
        .addCase(setIsMinInputError, (state, action) => {
            state.isMinInputError = action.payload
        })

})