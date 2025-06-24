import s from "../styles/Settings.module.css";
import {type ChangeEvent} from "react";

type PropsTypeInput = {
    labelValue: string,
    htmlFor: string,
    // inputId: string,
    inputType: string,
    // getMaxValue?: (value: string) => void
    getValue: (value: number) => void
    value?: number
}

export const Input = (
    {inputType, value, getValue, labelValue, htmlFor}
    : PropsTypeInput) => {

    // const [isRed, setRed] = useState(false);
    //
    // useEffect(() => {
    //     if (typeof value === "number") {
    //         setRed(value < 1);
    //     }
    // }, [value]);

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
                className={s.input}
                type={inputType}
                />
        </div>
    );
};

