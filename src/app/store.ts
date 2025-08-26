import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {countReducer} from "../model/count-reducer.ts";
import {useDispatch, useSelector} from "react-redux";


// объединение reducer'ов с помощью combineReducers
const rootReducer = combineReducers({
   count: countReducer,
})

// создание store
export const store = configureStore({
    reducer: rootReducer,
})

export const useAppSelector = useSelector.withTypes<RootState>()

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

// автоматическое определение типа всего объекта состояния
export type RootState = ReturnType<typeof store.getState>
// автоматическое определение типа метода dispatch
export type AppDispatch = typeof store.dispatch
