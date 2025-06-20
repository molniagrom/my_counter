import s from "../styles/Settings.module.css";
import {type ChangeEvent} from "react";

type PropsTypeInput = {
    labelValue: string,
    htmlFor: string,
    inputId: string,
    inputType: string,
    getMaxValue?: (value: string) => void
    getStartValue?: (value: string) => void
    value?: number
}

export const Input = (
    {inputType, value, getMaxValue, getStartValue, inputId, labelValue, htmlFor}
    : PropsTypeInput) => {

    // const [isRed, setRed] = useState(false);
    //
    // useEffect(() => {
    //     if (typeof value === "number") {
    //         setRed(value < 1);
    //     }
    // }, [value]);

    const getValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;

        getStartValue?.(newValue);
        getMaxValue?.(newValue);
    }

    return (
        <div className={s.inputContainer}>
            <label className={s.label} htmlFor={htmlFor}>{labelValue}</label>
            <input
                value={value}
                onChange={getValue}
                className={s.input}
                type={inputType}
                id={inputId}/>
        </div>
    );
};

