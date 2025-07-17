import {Button} from "./Button.tsx";
import {Input} from "./Input.tsx";
import s from "../styles/Settings.module.css"
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../app/store.ts";
import {
    setCount,
    setError,
    setIsMaxInputError,
    setIsMinInputError,
    setIsSet,
    setMax,
    setMin
} from "../model/count-reducer.ts";

export const Settings = () => {
    const minValue = useAppSelector(state => state.count.min)
    const maxValue = useAppSelector(state => state.count.max)
    const error = useAppSelector(state => state.count.error)
    const isSet = useAppSelector(state => state.count.isSet)
    const isMinInputError = useAppSelector(state => state.count.isMinInputError)
    const isMaxInputError = useAppSelector(state => state.count.isMaxInputError)

    const dispatch = useAppDispatch()

    const [maxLocal, setMaxLocal] = useState(maxValue);
    const [minLocal, setMinLocal] = useState(minValue);

    useEffect(() => {

        const counterValueAsStr = localStorage.getItem("counterValue")
        const counterMaxValueAsStr = localStorage.getItem("counterMaxValue")
        const counterMinValueAsStr = localStorage.getItem("counterMinValue")

        if (counterValueAsStr && counterMaxValueAsStr && counterMinValueAsStr) {
            dispatch(setCount(JSON.parse(counterValueAsStr)))
            setMaxLocal(JSON.parse(counterMaxValueAsStr))
            setMinLocal(JSON.parse(counterMinValueAsStr))
            dispatch(setMax(JSON.parse(counterMaxValueAsStr)))
            dispatch(setMin(JSON.parse(counterMinValueAsStr)))
        }

    }, [maxValue, minValue])

    const getAndSetValue = (min: number, max: number) => {
        dispatch(setCount(min))
        dispatch(setIsSet(false))
        dispatch(setMax(max))
        dispatch(setMin(min))
        localStorage.setItem("counterValue", JSON.stringify(min))
        localStorage.setItem("counterMaxValue", JSON.stringify(maxLocal))
        localStorage.setItem("counterMinValue", JSON.stringify(minLocal))
    }

    const getMaxValue = (value: number) => {
        setMaxLocal(value)
        if (!isSet) {
            dispatch(setIsSet(true))
        }

        if (value <= 0) {
            dispatch(setError("The maximum value must be at least 0"))
            setMaxLocal(value);
            dispatch(setIsMaxInputError(true))

        } else if (value <= minLocal) {
            dispatch(setError("The maximum value must not be less than the minimum value"))
            setMaxLocal(value);
            dispatch(setIsMaxInputError(true))


        } else {
            setMaxLocal(value);
            if (error) {
                dispatch(setError(null))
                dispatch(setIsMaxInputError(false))
            }
        }

    }
    const getStartValue = (value: number) => {
        setMinLocal(value)

        if (!isSet) {
            dispatch(setIsSet(true))
        }

        if (value < 0) {
            dispatch(setError("The start value must not be less than 0"))
            setMinLocal(value);
            dispatch(setIsMinInputError(true))
        } else if (maxLocal <= value) {
            dispatch(setError("The start value must not be greater than or equal to the maximum value"))
            setMinLocal(value);
            dispatch(setIsMinInputError(true))

        } else {
            setMinLocal(value);
            if (error) {
                dispatch(setError(null))
                dispatch(setIsMinInputError(false))
            }
        }
    }

    const onClick = () => {
        if (error === null) {
            getAndSetValue(minLocal, maxLocal);
        }
    }

    return (
        <div className={s.settings}>
            <div className={s.inputs}>
                <Input
                    value={maxLocal}
                    getValue={getMaxValue}
                    inputType="number"
                    htmlFor="maxValue"
                    className={isMaxInputError ? "red" : ""}
                    labelValue="max value"
                />
                <br/>
                <Input
                    value={minLocal}
                    inputType="number"
                    htmlFor="startValue"
                    labelValue="start value"
                    className={isMinInputError ? "red" : ""}
                    getValue={getStartValue}
                />
            </div>
            <div className={s.set}>
                <Button disabled={!!error || !isSet} onClick={onClick}>set</Button>
            </div>
        </div>
    );
};
