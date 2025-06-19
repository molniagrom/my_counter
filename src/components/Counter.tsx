import s from "../styles/Count.module.css";

type CounterPropsType = {
    minValue: number,
    maxValue: number,
    count: number,
    onClickHandlerInc: () => void,
    onClickHandlerRes: () => void,
}

export const Counter = ({minValue, onClickHandlerInc, onClickHandlerRes, count, maxValue}: CounterPropsType) => {

    return (
        <div className={s.container}>
            <div className={s.count}>
                <p className={count >= maxValue ? s.countRed : ""}>
                    {count}
                </p>
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

