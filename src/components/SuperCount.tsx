import {Settings} from "./Settings.tsx";
import {Counter} from "./Counter.tsx";
import s from "../styles/Count.module.css"
import {useState} from "react";

export const SuperCount = () => {

    const [max, setMax] = useState(0);
    const [min, setMin] = useState(0);
    const [isSet, setIsSet] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [count, setCount] = useState(min)

    return (
        <div className={s.superCount}>
                 <Settings
                    isSet={isSet}
                    setMin={setMin}
                    setCount={setCount}
                    setMax={setMax}
                    setError={setError}
                    error={error}
                    maxValue={max}
                    minValue={min}
                    setIsSet={setIsSet}
                />
                 <Counter
                    error={error}
                    maxValue={max}
                    setCount={setCount}
                    isSet={isSet}
                    minValue={min}
                    count={count}
                />



        </div>
    );
};

