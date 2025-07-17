import Button from '@mui/material/Button';
import {Input} from "./Input.tsx";
import s from "../styles/Settings.module.css"
import {type Dispatch, type SetStateAction, useEffect, useState} from "react";
import {type ActionType, TOGGLE_COLLAPSED} from "./reducer.tsx";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

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
    dispatch: (dispatch: ActionType) => void
}

export const Settings = ({
                             setIsSet,
                             dispatch,
                             setMin,
                             setMax,
                             setCount,
                             isSet,
                             maxValue,
                             minValue,
                             error,
                             setError
                         }: SettingsPropsType) => {

    const [maxLocal, setMaxLocal] = useState(maxValue);
    const [minLocal, setMinLocal] = useState(minValue);

    useEffect(() => {

        const counterValueAsStr = localStorage.getItem("counterValue")
        const counterMaxValueAsStr = localStorage.getItem("counterMaxValue")
        const counterMinValueAsStr = localStorage.getItem("counterMinValue")

        if (counterValueAsStr && counterMaxValueAsStr && counterMinValueAsStr) {
            setCount(JSON.parse(counterValueAsStr))
            setMaxLocal(JSON.parse(counterMaxValueAsStr))
            setMinLocal(JSON.parse(counterMinValueAsStr))
        }

    }, [maxValue, minValue])

    const getAndSetValue = (min: number, max: number) => {
        setCount(min)
        setIsSet(false);
        setMax(max)
        setMin(min)
        localStorage.setItem("counterValue", JSON.stringify(min))
        localStorage.setItem("counterMaxValue", JSON.stringify(maxLocal))
        localStorage.setItem("counterMinValue", JSON.stringify(minLocal))
    }

    const getMaxValue = (value: number) => {
        setMaxLocal(value)
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
        setMinLocal(value)
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
            dispatch({type: TOGGLE_COLLAPSED});
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
                <Button
                    size={"large"}
                    color={"primary"}
                    variant={"contained"}
                    endIcon={<CheckCircleIcon/>}
                    disabled={!!error || !isSet}
                    onClick={onClick}
                >
                    set
                </Button>
            </div>
        </div>
    );
};
