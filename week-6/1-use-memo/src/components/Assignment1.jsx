import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState();
    // Your solution starts here
    const expensiveValue = useMemo(()=>{
        let value = 1;
    for(let i=input;i>=1;i--){
        value*=i
    }
    return value
    },[input])
    
    // const factorial = (num) =>{
    //     console.log(num)
    //     let result = 1;
    //     if(num===0){
    //         return result
    //     }
    //     for(let i=num;i>=1;i--){
    //         result*=i
    //     }
    //     setResult(result)

    // }
    // Your solution ends here

    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}