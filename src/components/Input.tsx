import s from "../styles/Settings.module.css";
import type {ChangeEvent} from "react";

type PropsTypeInput = {
    labelValue: string,
    htmlFor: string,
    inputId: string,
    inputType: string,
    getMaxValue?: (value: string) => void
    getStartValue?: (value: string) => void
}

export const Input = ({ inputType, getMaxValue, getStartValue, inputId, labelValue, htmlFor}: PropsTypeInput) => {

   const getValue = (e: ChangeEvent<HTMLInputElement>) => {
       // console.log(e.currentTarget.value)
       if (getStartValue) {
           getStartValue(e.currentTarget.value)
       }

       if (getMaxValue) {
           getMaxValue(e.currentTarget.value)
       }
   }

    return (
        <div className={s.inputContainer}>
            <label className={s.label} htmlFor={htmlFor}>{labelValue}</label>
            <input onChange={getValue} className={s.input} type={inputType} id={inputId}/>
        </div>
    );
};

