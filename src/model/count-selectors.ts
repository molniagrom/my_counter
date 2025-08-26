import type {RootState} from "../app/store.ts";

export const selectCount = (state: RootState) => state.count.count
export const selectMin = (state: RootState) => state.count.min
export const selectMax = (state: RootState) => state.count.max
export const selectError = (state: RootState) => state.count.error
export const selectIsSet = (state: RootState) => state.count.isSet
export const selectIsMinInputError = (state: RootState) => state.count.isMinInputError
export const selectIsMaxInputError = (state: RootState) => state.count.isMaxInputError