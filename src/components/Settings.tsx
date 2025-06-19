import {Button} from "./Button.tsx";
import {Input} from "./Input.tsx";
import s from "../styles/Settings.module.css"


export const Settings = () => {
    return (
        <div className={s.settings}>
            <div className={s.inputs}>

                <Input/>
                <br/>
                <label className={s.label} htmlFor="startValue">start value</label>
                <input className={s.input} type="number" id="startValue"/>
            </div>
            <div className={s.set}>
                <Button onClick={() => console.log("set")}>set</Button>
            </div>
        </div>
    );
};
