import {Settings} from "./Settings.tsx";
import {Counter} from "./Counter.tsx";
import s from "../styles/Count.module.css"
import {useState} from "react";

export const SuperCount = () => {
    const [max, setMax] = useState(0);
    const [min, setMin] = useState(0);
    const [isSet, setIsSet] = useState(true);
    const [error, setError] = useState<string | null>(null);
    //todo: условия с 27 стр. в Counter Написать здесь,

    const getMaxValue = (value: string) => {
        setMax(Number(value));
        setIsSet(false);

    }
    const getStartValue = (value: string) => {
        setMin(Number(value));
        setIsSet(false);

    }

    // .....................................................................................................
    // count logic
    const [count, setCount] = useState(min)

    const onClickHandlerInc = () => setCount(count + 1)
    const onClickHandlerRes = () => setCount(min)
    // .....................................................................................................

    const getAndSetValue = () => {
        if (min < 0) {
            setIsSet(false);
        } else {
            setCount(min)
            setIsSet(true);
        }
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
                isSet={isSet}
                minValue={min}
                count={count}
                onClickHandlerInc={onClickHandlerInc}
                onClickHandlerRes={onClickHandlerRes}/>
        </div>
    );
};

