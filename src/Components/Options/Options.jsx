import React, { useEffect, useState } from 'react'
import {questionOptions} from '../../constants/questions'
import './Options.css'

const Options = (props) => {

    // const [optionsClass, setOptionsClass] = useState(props.optionClass)
    
    const [value, setValue] = useState(props.value)
    const [optionsClass, setOptionsClass] = useState(props.optionClass)

    

    useEffect(
        () => {
          console.log("Button hook ", value, optionsClass)
          
        });

    const handleClick = (number, event) => {
        console.log("asd", questionOptions[number-1], optionsClass)
        setValue(questionOptions[number-1])
        if(number == 1) {
            setOptionsClass(["select", "nonSel" , "nonSel"])
        } else if ( number == 2) {
            setOptionsClass(["nonSel", "select" , "nonSel"])
        } else if ( number == 3) {
            setOptionsClass(["nonSel", "nonSel" , "select"])
        }
        props.option(questionOptions[number-1], optionsClass)
    }

    return (
        <div className="option-populte">
            <div  className={optionsClass[0]} onClick={() => handleClick(1)} />
            <div  className={optionsClass[1]} onClick={() => handleClick(2)} />
            <div  className={optionsClass[2]} onClick={() => handleClick(3)} />
            
        </div>
    )
}

export default Options;