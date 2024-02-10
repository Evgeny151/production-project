import { useState } from "react"
import s from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div className={s.button}>
            <button onClick={increment}>{count}</button>
        </div>
    )
}