import s from "../styles/Settings.module.css";

export const Input = () => {
    return (
        <div className={s.inputContainer}>
            <label className={s.label} htmlFor="maxValue">max value</label>
            <input className={s.input} type="number" id="maxValue"/>
        </div>
    );
};

