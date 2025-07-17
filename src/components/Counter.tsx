import s from "../styles/Count.module.css";
import {useAppDispatch, useAppSelector} from "../app/store.ts";
import {setCount} from "../model/count-reducer.ts";

export const Counter = () => {

    const minValue = useAppSelector(state => state.count.min)
    const maxValue = useAppSelector(state => state.count.max)
    const error = useAppSelector(state => state.count.error)
    const isSet = useAppSelector(state => state.count.isSet)
    const count = useAppSelector(state => state.count.count)

    const dispatch = useAppDispatch()

    const onClickHandlerInc = () => dispatch(setCount(count + 1))
    const onClickHandlerRes = () => dispatch(setCount(minValue))

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
                <button
                    disabled={count === minValue || !!error || isSet}
                    onClick={onClickHandlerRes}>reset
                </button>
            </div>
        </div>
    )
        ;
};

