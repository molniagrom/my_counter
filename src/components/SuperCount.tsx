import {Settings} from "./Settings.tsx";
import {Counter} from "./Counter.tsx";
import s from "../styles/Count.module.css"
import {useState} from "react";

export const SuperCount = () => {
    const [max, setMax] = useState(0);
    const [min, setMin] = useState(0);
    const [isSet, setIsSet] = useState(true);
    const [error, setError] = useState<string | null>(null);

    //todo: Все 3 значения (max, min count) отслеживать и "транслировать" а localStorage

    const getMaxValue = (value: string) => {
        setError(null)
        const numberValue = Number(value)

        if (numberValue <= 0) {
            setError("The maximum value must be at least 0")
            setMin(0);
        } else if (numberValue <= min) {
            setError("The maximum value must not be less than the minimum value")
            setMin(max);
        } else {
            setMax(numberValue);
            setIsSet(false);
        }
    }

    const getStartValue = (value: string) => {
        setError(null)
        const numberValue = Number(value)
        if (numberValue < 0) {
            setError("The start value must not be less than 0")
            setMin(Number(0));
        } else if (max <= numberValue) {
            setError("The start value must not be greater than or equal to the maximum value")
            setMin(max);
        } else {
            setMin(numberValue);
            setIsSet(false);
            // localStorage.setItem("stsrtValue", JSON.stringify(numberValue));
        }
    }

    // .....................................................................................................
    // count logic
    const [count, setCount] = useState(min)

    const onClickHandlerInc = () => setCount(count + 1)
    const onClickHandlerRes = () => setCount(min)
    // .....................................................................................................

    const getAndSetValue = (min: number, max: number) => {
        if (min < 0) {
            setIsSet(false);
        } else {
            setCount(min)
            setIsSet(true);
            setMax(max)
            setMin(min)
        }
    }

    return (
        <div className={s.superCount}>
            <Settings
                error={error}
                maxValue={max}
                minValue={min}
                getAndSetValue={getAndSetValue}
                getMaxValue={getMaxValue}
                getStartValue={getStartValue}/>
            <Counter
                error={error}
                maxValue={max}
                isSet={isSet}
                minValue={min}
                count={count}
                onClickHandlerInc={onClickHandlerInc}
                onClickHandlerRes={onClickHandlerRes}/>
        </div>
    );
};

