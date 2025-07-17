import s from "../styles/Count.module.css";
import type {Dispatch, SetStateAction} from "react";
import Button from '@mui/material/Button';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

import {type ActionType, TOGGLE_COLLAPSED} from "./reducer.tsx";

type CounterPropsType = {
    minValue: number,
    maxValue: number,
    count: number,
    isSet: boolean,
    dispatch: (dispatch: ActionType) => void
    setCount: Dispatch<SetStateAction<number>>,
    error: string | null,
}

export const Counter = ({setCount, minValue, dispatch, isSet, error, count, maxValue}: CounterPropsType) => {

    const onClickHandlerInc = () => setCount(count + 1)
    const onClickHandlerRes = () => setCount(minValue)



    return (
        <div className={s.container}>
            <div className={s.count}>
                {error
                    ? (<p className={s.countRed}>{error}</p>)
                    : isSet
                        ? (<p className={s.message}>Введите значения и нажмите "set"</p>)
                        : (<p className={count >= maxValue && count !== 0 ? s.countRed : ""}>{count}</p>
                )}
            </div>
            <div className={s.buttons}>
                <button
                    disabled={count >= maxValue || !!error || isSet}
                    onClick={onClickHandlerInc}>inc
                </button>
                <Button variant={"contained"} endIcon={<SettingsSuggestIcon />} onClick={() => dispatch({type: TOGGLE_COLLAPSED})}>Settings</Button>
                <button
                    disabled={count === minValue || !!error || isSet}
                    onClick={onClickHandlerRes}>reset
                </button>
            </div>
        </div>
    )
        ;
};

