import s from "../styles/Count.module.css";
import {useState} from 'react';

export const Counter = () => {
    const max = 5
    const min = 0
    const [count, setCount] = useState(0)

    const onClickHandlerInc = () => setCount(count + 1)
    const onClickHandlerRes = () => setCount(min)

    return (
        <div className={s.container}>
            <div className={s.count}>
                <p className={count >= max ? s.countRed : ""}>
                    {count}
                </p>
            </div>
            <div className={s.buttons}>
                <button
                    disabled={count >= max}
                    onClick={onClickHandlerInc}>inc
                </button>
                <button
                    disabled={count === min}
                    onClick={onClickHandlerRes}>reset
                </button>
            </div>
        </div>
    );
};

