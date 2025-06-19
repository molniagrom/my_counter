import s from "../styles/Settings.module.css";

type PropsTypeInput = {
    labelValue: string,
    htmlFor: string,
    inputId: string,
    inputType: string,
}

export const Input = ({ inputType, inputId, labelValue, htmlFor}: PropsTypeInput) => {
    return (
        <div className={s.inputContainer}>
            <label className={s.label} htmlFor={htmlFor}>{labelValue}</label>
            <input className={s.input} type={inputType} id={inputId}/>
        </div>
    );
};

