import { useRef } from "react";
import { useEffect } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
    const inputRef1 = useRef()
    const inputRef2 = useRef()

    useEffect(() => {
        inputRef1.current.focus()

    }, []);

    const handleButtonClick = () => {
        inputRef2.current.focus()
    };

    return (
        <div>
            <input ref={inputRef1} type="text" placeholder="Enter text here" />
            <input ref={inputRef2}type="text" placeholder="Enter text here" />
            <input  type="text" placeholder="Enter text here" />
            <button onClick={handleButtonClick}>Focus second Input</button>
        </div>
    );
};
