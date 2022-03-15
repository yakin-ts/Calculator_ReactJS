import React, {useState} from 'react'
import { Button, Container, Current, Previous, Screen } from './styled'

function Calculator() {

    const [currentScr, setCurrent] = useState("");
    const [previousScr, setPrevious] = useState("");
    const [operation, setOperation] = useState("");
    const appendVal = (e) => {
        const value = e.target.getAttribute('data');
        
        if (value === '.' && currentScr.includes('.')) return;

         setCurrent(currentScr + value);
        
    }
    const ClearStuff = (e) => {

        const val = e.target.getAttribute('data');

        switch (val) {
            case 'AC':
                setCurrent("");
                setOperation("");
                setPrevious("");
                break;
            case 'DEL':
                    const temp = String(currentScr).slice(0, -1);
                    setCurrent(temp);
                    break;  
            default:
                break;
        }
       

    }

    const handleOperation = (e) => {
        if (currentScr === "") return;
        if (previousScr !== "") {
            let result = calculate();
            setPrevious(result);
        }
        else {
        setPrevious(currentScr);
    }
    
    setCurrent("");
        setOperation(e.target.getAttribute('operator'));
        console.log(e.target.getAttribute('operator'));
    }
    
    const calculate = () => {
        let cur = parseFloat(currentScr);
        let prev = parseFloat(previousScr);
        console.log(cur + "  " + prev);
        let result;
        if (isNaN(currentScr) || isNaN(previousScr)) return;

        switch (operation) {
            case '+':
                result = prev + cur;
                console.log("result: ", result);
                break;
             case '-':
                result = prev - cur;
                break;
             case 'X':
                result = prev * cur;
                break;
             case '/':
                result = prev / cur;
                break;
        
            default:
                break;
        }

        return String(result);

    }

    const equals = () => {
        let value = calculate();
        if (value===undefined || value==null) return;
        setCurrent(value);
        setOperation("");
        setPrevious("");
    }

    return (
        <div>
            <Container>
                <Screen>
                    <Previous >{previousScr} { operation}</Previous>
                    <Current>{ currentScr}</Current>
                </Screen>
                <Button  data='AC' onClick={ClearStuff} gridSpan={2} control>AC</Button>
                <Button  data='DEL' onClick={ClearStuff} control>DEL</Button>
                <Button operator='+' onClick={handleOperation} operation>+</Button>
                <Button data='7' onClick={appendVal}  >7</Button>
                <Button data='8' onClick={appendVal}  >8</Button>
                <Button data='9' onClick={appendVal} >9</Button>
                <Button onClick={handleOperation} operator='X' operation>x</Button>
                <Button data='4' onClick={appendVal} >4</Button>
                <Button data='5' onClick={appendVal} >5</Button>
                <Button data='6' onClick={appendVal} >6</Button>
                <Button onClick={handleOperation} operator='/' operation>/</Button>
                <Button data='1' onClick={appendVal} >1</Button>
                <Button data='2' onClick={appendVal} >2</Button>
                <Button data='3' onClick={appendVal} >3</Button>
                <Button onClick={handleOperation} operator='-' operation>-</Button>
                <Button data='.' onClick={appendVal} period>.</Button>
                <Button data='0' onClick={appendVal} >0</Button>
                <Button gridSpan={2} onClick={equals} equals>=</Button>
            </Container>               
        </div>
    )
}

export default Calculator
