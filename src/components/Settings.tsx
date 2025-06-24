import {Button} from "./Button.tsx";
import {Input} from "./Input.tsx";
import s from "../styles/Settings.module.css"
import {useState} from "react";

type SettingsPropsType = {
    getMaxValue: (value: string) => void
    getStartValue: (value: string) => void
    getAndSetValue: (min: number, max: number) => void
    minValue: number,
    maxValue: number,
    error: string | null,
}

export const Settings = (props: SettingsPropsType) => {

    const [maxLocal, setMaxLocal] = useState(0);
    const [minLocal, setMinLocal] = useState(0);

    const getMaxValue = (value: string) => {
        setMaxLocal(Number(value))
    }
    const getStartValue = (value: string) => {
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
                    getMaxValue={getMaxValue}
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
                    getStartValue={getStartValue}
                />
            </div>
            <div className={s.set}>
                <Button disabled={!!props.error} onClick={onClick}>set</Button>
            </div>
        </div>
    );
};
