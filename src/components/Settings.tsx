import {Button} from "./Button.tsx";
import {Input} from "./Input.tsx";
import s from "../styles/Settings.module.css"


export const Settings = () => {
    return (
        <div className={s.settings}>
            <div className={s.inputs}>
                <Input
                    inputType="number"
                    htmlFor="maxValue"
                    labelValue="max value"
                    inputId="maxValue"
                />
                <br/>
                <Input
                    inputType="number"
                    htmlFor="startValue"
                    labelValue="start value"
                    inputId="startValue"
                />
            </div>
            <div className={s.set}>
                <Button onClick={() => console.log("set")}>set</Button>
            </div>
        </div>
    );
};
