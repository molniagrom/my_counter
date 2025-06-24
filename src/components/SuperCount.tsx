import {Settings} from "./Settings.tsx";
import {Counter} from "./Counter.tsx";
import s from "../styles/Count.module.css"
import {useState} from "react";

export const SuperCount = () => {
    const [max, setMax] = useState(0);
    const [min, setMin] = useState(0);
    const [isSet, setIsSet] = useState(false);
    const [error, setError] = useState<string | null>(null);

    //todo: Все 3 значения (max, min count) отслеживать и "транслировать" а localStorage
    //todo: можно посмотреть реализацию с localStorage в записи 2 урока 2 спринта (под конец)

    // .....................................................................................................
    // count logic
    //todo: унести в count
    const [count, setCount] = useState(min)

    const onClickHandlerInc = () => setCount(count + 1)
    const onClickHandlerRes = () => setCount(min)
    // .....................................................................................................

    const getAndSetValue = (min: number, max: number) => {
        setCount(min)
        setIsSet(false);
        setMax(max)
        setMin(min)
    }

    return (
        <div className={s.superCount}>
            <Settings
                isSet={isSet}
                setError={setError}
                error={error}
                maxValue={max}
                minValue={min}
                setIsSet={setIsSet}
                getAndSetValue={getAndSetValue}
                // getMaxValue={getMaxValue}
                // getStartValue={getStartValue}
            />
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

