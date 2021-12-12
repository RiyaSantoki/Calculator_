import React,{useState,useEffect,useRef} from 'react';
import "./App.css";

function App () {
    const [Result, setResult] = useState("");
    const inputRef = useRef(null);

    useEffect(() => inputRef.current.focus());

    function handleClick(e) {
        setResult(Result.concat(e.target.name));
    }

    function backspace(){
        setResult(Result.slice(0, -1));
    }

    function Clear(){
        setResult("");
    }

    function calculate(){
        try{
            setResult(eval(Result).toString());
        }
        catch(error){
            setResult("Error");
        }
        
    }

    return(
        <div className="calc-app">
            <form>
            <input type="text" name="" id="" value={Result} ref={inputRef} />
            </form>

            <div className="keypad">
            <button id="clear" onClick={Clear}><b>Clear</b></button>
            <button id="backspace" onClick={backspace}><b>C</b></button>
            <button className name="+" onClick={handleClick}><b>+</b></button>
            <button name="7" onClick={handleClick}><b>7</b></button>
            <button name="8" onClick={handleClick}><b>8</b></button>
            <button name="9" onClick={handleClick}><b>9</b></button>
            <button name="-" onClick={handleClick}><b>-</b></button>
            <button name="4" onClick={handleClick}><b>4</b></button>
            <button name="5" onClick={handleClick}><b>5</b></button>
            <button name="6" onClick={handleClick}><b>6</b></button>
            <button name="*" onClick={handleClick}><b>&times;</b></button>
            <button name="1" onClick={handleClick}><b>1</b></button>
            <button name="2" onClick={handleClick}><b>2</b></button>
            <button name="3" onClick={handleClick}><b>3</b></button>
            <button name="/" onClick={handleClick}><b>/</b></button>
            <button name="0" onClick={handleClick}><b>0</b></button>
            <button name="." onClick={handleClick}><b>.</b></button>
            
            <button id="Result" onClick={calculate}>Result</button>
        </div>
        </div>
    );

}

export default App;
