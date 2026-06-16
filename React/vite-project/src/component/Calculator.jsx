import { useState } from "react"

function Calculator(){
    const [display,setDisplay]=useState('')
    const [first,setFirst]=useState(null)
    const [operator,setOperator]=useState(null)

    function handleClick(num){
        setDisplay(display + num)
    }

    function handleOperator(op){
        setFirst(Number(display))
        setOperator(op)
        setDisplay('')
    }

    function Calculate(){
        const second=Number(display)
        let result=0
        
        if(operator==='+')result=first+second
        if(operator==='-')result=first-second
        if(operator==='*')result=first*second
        if(operator==='/')result=first/second

        setDisplay(result.toString())
        setFirst(null)
        setOperator(null)
    }
    function clearAll(){
        setDisplay('')
        setFirst(null)
        setOperator(null)
    }



    return(
        <>
        <div>
            <div>{display||'0'}</div>
        </div>
        <div>
            <div>
                <button onClick={()=>handleClick('7')}>7</button>
                <button onClick={()=>handleClick('8')}>8</button>
                <button onClick={()=>handleClick('9')}>9</button>
                <button onClick={()=>handleClick('0')}>0</button>
            </div>
            <div>
                <button onClick={()=>handleClick('4')}>4</button>
                <button onClick={()=>handleClick('5')}>5</button>
                <button onClick={()=>handleClick('6')}>6</button>
                <button onClick={()=>handleOperator('-')}>-</button>
            </div>
            <div>
                <button onClick={()=>handleClick('1')}>1</button>
                <button onClick={()=>handleClick('2')}>2</button>
                <button onClick={()=>handleClick('3')}>3</button>
                <button onClick={()=>handleOperator('+')}>+</button>
            </div>
            <div>
                <button onClick={()=>handleOperator('*')}>*</button>
                <button onClick={()=>handleOperator('/')}>/</button>
                <button onClick={Calculate}>=</button>
                <button onClick={clearAll}>AC</button>
            </div>

        </div>

        </>

    )
}
export default Calculator