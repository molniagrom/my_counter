import {Settings} from "./Settings.tsx";
import {Counter} from "./Counter.tsx";
import s from "../styles/Count.module.css"
import {useState} from "react";

export const SuperCount = () => {
    const [max, setMax] = useState(0);
    const [min, setMin] = useState(0);

    const getMaxValue = (value: string) => {
        setMax(Number(value));

    }
    const getStartValue = (value: string) => {
        setMin(Number(value));
    }

    // .....................................................................................................
    // count logic
    const [count, setCount] = useState(min)

    const onClickHandlerInc = () => setCount(count + 1)
    const onClickHandlerRes = () => setCount(min)
    // .....................................................................................................

    const getAndSetValue = () => {
        setCount(min)
    }

    return (
        <div className={s.superCount}>
            <Settings
                maxValue={max}
                minValue={min}
                getAndSetValue={getAndSetValue}
                getMaxValue={getMaxValue}
                getStartValue={getStartValue}/>
            <Counter
                maxValue={max}
                minValue={min}
                count={count}
                onClickHandlerInc={onClickHandlerInc}
                onClickHandlerRes={onClickHandlerRes}/>
        </div>
    );
};

