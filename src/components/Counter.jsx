import { useState } from "react"

function Counter() {

    const [count, setCount] = useState(0)
    const [isDisabled, setIsDisabled] = useState(false)
    
    const incrementation = () => {
        
        if(count >= 9){
            setIsDisabled(true)
        }
        setCount(count + 1)
    }

    const decrementation = () => {
    if(count == -10){
        return (
            setCount(0)
        )
    } else {
        setCount(count - 1)
        setIsDisabled(false)
    }
}

    return (
        <>
        <h2>Counter</h2>
        <p>Le nombre de moutons à compter: {count} </p>
        <button onClick={incrementation} disabled={isDisabled}>Ajouter un mouton</button>
        <button onClick={decrementation}>Enlever un mouton</button>

        </>
    )
}

export default Counter