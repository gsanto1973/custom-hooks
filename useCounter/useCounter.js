import { useState } from "react"

export const useCounter = (inictalValue = 10) => {

    const [counter, setCounter] = useState(inictalValue);

    const increment = (value = 1) => {
        setCounter((current) => current + value);
    }

    const decrement = (value = 1) => {
        if (counter === 0) return;
        setCounter((current) => current - value);
    }

    const reset = () => {
        setCounter(inictalValue);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}