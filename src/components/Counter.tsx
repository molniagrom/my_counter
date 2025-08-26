import s from "../styles/Count.module.css";
import {useAppDispatch, useAppSelector} from "../app/store.ts";
import {setCount} from "../model/count-reducer.ts";
import {selectCount, selectError, selectIsSet, selectMax, selectMin} from "../model/count-selectors.ts";

export const Counter = () => {

    const minValue = useAppSelector(selectMin)
    const maxValue = useAppSelector(selectMax)
    const error = useAppSelector(selectError)
    const isSet = useAppSelector(selectIsSet)
    const count = useAppSelector(selectCount)

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

