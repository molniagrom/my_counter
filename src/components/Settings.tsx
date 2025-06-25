import {Button} from "./Button.tsx";
import {Input} from "./Input.tsx";
import s from "../styles/Settings.module.css"
import {useState} from "react";

type SettingsPropsType = {
    getAndSetValue: (min: number, max: number) => void
    minValue: number,
    setError: (error: string | null) => void
    maxValue: number,
    error: string | null,
    isSet: boolean
    setIsSet: (isSet: boolean) => void
}

export const Settings = (props: SettingsPropsType) => {

    const [maxLocal, setMaxLocal] = useState(props.maxValue);
    const [minLocal, setMinLocal] = useState(props.minValue);

    const getMaxValue = (value: number) => {

        if (!props.isSet) {
            props.setIsSet(true)
        }

        if (value <= 0) {
            props.setError("The maximum value must be at least 0")
            setMaxLocal(value);
        } else if (value <= minLocal) {
            props.setError("The maximum value must not be less than the minimum value")
            setMaxLocal(value);

        } else {
            setMaxLocal(value);
            props.setError(null)
        }

    }
    const getStartValue = (value: number) => {

        if (!props.isSet) {
            props.setIsSet(true)
        }

        if (value < 0) {
            props.setError("The start value must not be less than 0")
            setMinLocal(value);
        } else if (maxLocal <= value) {
            props.setError("The start value must not be greater than or equal to the maximum value")
            setMinLocal(value);
        } else {
            setMinLocal(value);
            props.setError(null)

        }
    }

    const onClick = () => {
         if (props.error === null) {
             props.getAndSetValue(minLocal, maxLocal);
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
                <Button disabled={!!props.error || !props.isSet} onClick={onClick}>set</Button>
            </div>
        </div>
    );
};
