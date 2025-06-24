import {Button} from "./Button.tsx";
import {Input} from "./Input.tsx";
import s from "../styles/Settings.module.css"
import {useState} from "react";

type SettingsPropsType = {
    // getMaxValue: (value: string) => void
    // getStartValue: (value: string) => void
    getAndSetValue: (min: number, max: number) => void
    minValue: number,
    setError: (error: string | null) => void
    maxValue: number,
    error: string | null,
}

export const Settings = (props: SettingsPropsType) => {

    const [maxLocal, setMaxLocal] = useState(0);
    const [minLocal, setMinLocal] = useState(0);

    const getMaxValue = (value: number) => {
        // setMaxLocal(Number(value))

        // props.setError(null)

            if (value <= 0) {
                props.setError("The maximum value must be at least 0")
                setMaxLocal(value);

                // setMinLocal(0);
            } else if (value <= minLocal) {
                props.setError("The maximum value must not be less than the minimum value")
                // setMinLocal(maxLocal);
                setMaxLocal(value);

            } else {
                setMaxLocal(value);
                props.setError(null)
            }

    }
    const getStartValue = (value: number) => {
        setMinLocal(Number(value))
    }

    const onClick = () => {
        if (props.getAndSetValue) {
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
                <Button disabled={!!props.error} onClick={onClick}>set</Button>
            </div>
        </div>
    );
};
