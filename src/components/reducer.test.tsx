import {expect, test} from "vitest";
import {reducer, type StateType, TOGGLE_COLLAPSED} from "./reducer.tsx";

test("reducer should change value to opposite value", () => {

    const state: StateType = {
        collapsed: false,
    }

    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    expect(newState.collapsed).toBe(true)
    expect(() => {
        reducer(newState, {type: "FAKE_TYPE"})
    }).toThrowError()

})