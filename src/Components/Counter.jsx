import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementBy } from "../redux/features/counterSlice"

export const Counter = () => {
    const counterState = useSelector((store) => {
        return store?.COUNTER.counter
    })

    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(increment())
    }
    const handleDecrement = () => {
        dispatch(decrement())
    }
    const handleIncrementBy = () => {
        dispatch(incrementBy(5))
    }

    return (
        <>
            <h3>
                Counter - <span className="text-danger">{counterState}</span>
            </h3>

            <div className="btnGroups d-flex justify-content-around align-items-center">
                <button className="btn btn-primary" onClick={handleIncrement}>
                    Increment
                </button>
                <button className="btn btn-danger" onClick={handleDecrement}>
                    Decrement
                </button>
                <button className="btn btn-info" onClick={handleIncrementBy}>
                    IncrementBy
                </button>
            </div>
        </>
    )
}