import React, { useEffect, useState } from 'react'
import { TOTAL_STEPS , NEXT_BUTTON_TEXT} from '../../constants/constants';
import { questionOptions, stepQuestion } from '../../constants/questions';
import Button from '../button/Button';
import Options from '../Options/Options';
import './QuestionStyle.css'

const ButtonQuestion = (props) => {

    const updateOption = (optionValue) => {
        if(optionValue === questionOptions[0]) {
            return ["select", "nonSel" , "nonSel"]
        } else if (optionValue === questionOptions[1]) {
            return ["nonSel", "select" , "nonSel"]
        } else if (optionValue === questionOptions[2]) {
            return ["nonSel", "nonSel" , "select"]
        } else {
            return ["nonSel", "nonSel" , "nonSel"]
        }
    }

    const [value, setValue] = useState(props.value);
    const [disable, setDisable] = useState(props.value == ""?true:false);
    const [buttonClass, setButtonClass] = useState(disable?"disabled-button":false);
    const [optionClass, setOptionClass] = useState(updateOption(props.value)) 

    useEffect(
        () => {
          console.log("Inside hook value ", value)
          console.log("Inside hook props.value ", props.value)
          console.log("Inside hook disable " , disable)
        });

    const updateClass = (optionValue) => {
        if(optionValue === questionOptions[0]) {
            return ["select", "nonSel" , "nonSel"]
        } else if (optionValue === questionOptions[1]) {
            return ["nonSel", "select" , "nonSel"]
        } else if (optionValue === questionOptions[2]) {
            return ["nonSel", "nonSel" , "select"]
        } else {
            return ["nonSel", "nonSel" , "nonSel"]
        }
    }

    const handleContinue = () => {
        props.continue(props.step + 1 , props.step -1 , value)
    }

    const handleGoBack = () => {
        props.goback(props.step - 1, value)
    }

    const handleOptions = (value, option) => {
        setValue(value)
        setDisable(false)
        setOptionClass(option)
    }

    return(
        <div>
            <h2>{stepQuestion[props.step-1].question} </h2>
            <div className="options-div">
                <Options option={handleOptions} value={value} optionClass={optionClass} /> <br/>
                <br/><label className="hint-label">{stepQuestion[props.step-1].hint}</label>
            </div>
            <div className="navigation-div">
                <a 
                    href="#" 
                    onClick={() => handleGoBack()} 
                    className="go-back-link">go back
                    </a>
                <button 
                    className={buttonClass} 
                    disabled={disable} 
                    onClick={() => handleContinue()}>
                        {NEXT_BUTTON_TEXT}
                </button>
                {/* <Button 
                        value= {"Continue"}  
                        height={"40px"} 
                        width={"150px"} 
                        fill={"red"}
                        disabled={disable}
                        onClick={() => handleContinue()}  /> */}
                <label className="step-text">step {props.step}/{TOTAL_STEPS} </label>
            </div>

        </div>
    )
}

export default ButtonQuestion;