import s from "../styles/Settings.module.css";
import {type ChangeEvent} from "react";

type PropsTypeInput = {
    labelValue: string,
    htmlFor: string,
    inputType: string,
    getValue: (value: number) => void
    value?: number
    className: string
}

export const Input = (
    {inputType, value, getValue, labelValue, className, htmlFor}
    : PropsTypeInput) => {

    const getValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        getValue(Number(newValue));
    }

    return (
        <div className={s.inputContainer}>
            <label className={s.label} htmlFor={htmlFor}>{labelValue}</label>
            <input
                value={value}
                onChange={getValueHandler}
                // className={error ? `${s.input} ${s.red}` : s.input}
                className={s.input + " " + s[className]}
                type={inputType}
                />
        </div>
    );
};

