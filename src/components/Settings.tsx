import {Button} from "./Button.tsx";
import {Input} from "./Input.tsx";
import s from "../styles/Settings.module.css"

type SettingsPropsType = {
    getMaxValue?: (value: string) => void
    getStartValue?: (value: string) => void
    getAndSetValue?: () => void
    minValue: number,
    maxValue: number,
}

export const Settings = (props: SettingsPropsType) => {

    const getMaxValue = (value: string) => {
        if (props.getMaxValue) {
            props.getMaxValue(value)
        }
    }
    const getStartValue = (value: string) => {
       if (props.getStartValue) {
           props.getStartValue(value)
       }
    }

    const onClick = () => {
        if (props.getAndSetValue) {
            props.getAndSetValue();
        }
    }

    return (
        <div className={s.settings}>
            <div className={s.inputs}>
                <Input
                    value={props.maxValue}
                    getMaxValue={getMaxValue}
                    inputType="number"
                    htmlFor="maxValue"
                    labelValue="max value"
                    inputId="maxValue"
                />
                <br/>
                <Input
                    value={props.minValue}
                    inputType="number"
                    htmlFor="startValue"
                    labelValue="start value"
                    inputId="startValue"
                    getStartValue={getStartValue}
                />
            </div>
            <div className={s.set}>
                <Button onClick={onClick}>set</Button>
            </div>
        </div>
    );
};
