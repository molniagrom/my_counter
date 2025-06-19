import s from "../styles/Count.module.css";

type CounterPropsType = {
    minValue: number,
    maxValue: number,
    count: number,
    onClickHandlerInc: () => void,
    onClickHandlerRes: () => void,
    isSet: boolean,
}

export const Counter = ({minValue, isSet, onClickHandlerInc, onClickHandlerRes, count, maxValue}: CounterPropsType) => {

    return (
        <div className={s.container}>
            <div className={s.count}>
                {!isSet ? (
                    <p className={s.message}>Введите значения и нажмите "set"</p>
                ) : maxValue <= minValue ? (
                    <p className={s.countRed}>Стартовое значение не должно быть больше или равно максимальному</p>
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
    );
};

