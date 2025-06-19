import {Settings} from "./Settings.tsx";
import {Counter} from "./Counter.tsx";
import s from "../styles/Count.module.css"

export const SuperCount = () => {

    return (
        <div className={s.superCount}>
            <Settings/>
            <Counter/>
        </div>
    );
};

