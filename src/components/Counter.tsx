import s from "../styles/Count.module.css";
// import {useState} from "react";

type CounterPropsType = {
    minValue: number,
    maxValue: number,
    count: number,
    onClickHandlerInc: () => void,
    onClickHandlerRes: () => void,
    isSet: boolean,
}

export const Counter = ({minValue, isSet, onClickHandlerInc, onClickHandlerRes, count, maxValue}: CounterPropsType) => {
    console.log("isSet:", isSet);
    // const [error, setError] = useState<string | null>(null);

    // if (minValue < 0){
    //     setError('Введите значения и нажмите "set"')
    // } else if (!isSet){
    //     setError('Введите значения и нажмите "set"')
    // }

    //todo: В зависимости от этих условий мы должны обрабатывать const [error, setError] = useState<string | null>(null);
    return (
        <div className={s.container}>
            <div className={s.count}>
                {minValue < 0 ? (
                    <p className={s.countRed}>Стартовое значение не должно быть меньше 0</p>
                ) : maxValue <= minValue ? (
                    <p className={s.countRed}>Стартовое значение не должно быть больше или равно максимальному</p>
                ) : !isSet ? (
                    <p className={s.message}>Введите значения и нажмите "set"</p>
                ) : (
                    <p className={count >= maxValue && count !== 0 ? s.countRed : ""}>
                        {count}
                    </p>
                )}
            </div>
            <div className={s.buttons}>
                <button
                    disabled={count >= maxValue}
                    onClick={onClickHandlerInc}>inc
                </button>
                <button
                    disabled={count === minValue}
                    onClick={onClickHandlerRes}>reset
                </button>
            </div>
        </div>
    )
        ;
};

