import {Button} from "./Button.tsx";
import {Input} from "./Input.tsx";
import s from "../styles/Settings.module.css"
import {type Dispatch, type SetStateAction, useState} from "react";

type SettingsPropsType = {
    minValue: number,
    setError: (error: string | null) => void
    maxValue: number,
    error: string | null,
    isSet: boolean
    setCount: Dispatch<SetStateAction<number>>,
    setIsSet: (isSet: boolean) => void
    setMax: (max: number) => void
    setMin: (min: number) => void
}

export const Settings = ({setIsSet, setMin, setMax, setCount, isSet, maxValue, minValue, error, setError}: SettingsPropsType) => {

    const [maxLocal, setMaxLocal] = useState(maxValue);
    const [minLocal, setMinLocal] = useState(minValue);

    const getAndSetValue = (min: number, max: number) => {
        setCount(min)
        setIsSet(false);
        setMax(max)
        setMin(min)
        localStorage.setItem("counterValue", JSON.stringify(min))
    }

    const getMaxValue = (value: number) => {
        localStorage.setItem("counterMaxValue", JSON.stringify(value))

        if (!isSet) {
            setIsSet(true)
        }

        if (value <= 0) {
            setError("The maximum value must be at least 0")
            setMaxLocal(value);
        } else if (value <= minLocal) {
            setError("The maximum value must not be less than the minimum value")
            setMaxLocal(value);

        } else {
            setMaxLocal(value);
            setError(null)
        }

    }
    const getStartValue = (value: number) => {
        localStorage.setItem("counterMinValue", JSON.stringify(value))

        if (!isSet) {
            setIsSet(true)
        }

        if (value < 0) {
            setError("The start value must not be less than 0")
            setMinLocal(value);
        } else if (maxLocal <= value) {
            setError("The start value must not be greater than or equal to the maximum value")
            setMinLocal(value);
        } else {
            setMinLocal(value);
            setError(null)

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
                    labelValue="max value"
                />
                <br/>
                <Input
                    value={minLocal}
                    inputType="number"
                    htmlFor="startValue"
                    labelValue="start value"
                    getValue={getStartValue}
                />
            </div>
            <div className={s.set}>
                <Button disabled={!!error || !isSet} onClick={onClick}>set</Button>
            </div>
        </div>
    );
};
