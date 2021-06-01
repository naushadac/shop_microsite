import React, { useEffect, useState } from 'react'
import { TOTAL_STEPS , NEXT_BUTTON_TEXT} from '../../constants/constants';
import { stepQuestion } from '../../constants/questions';
import Button from '../button/Button';
import './QuestionStyle.css'

const InputQuestion = (props) => {
    const [value, setValue] = useState(props.value);
    const [disable, setDisable] = useState(props.value == ""?true:false);
    const [buttonClass, setButtonClass] = useState(disable?"disabled-button":false); 

    useEffect(
        () => {
          console.log("Inside hook value ", value)
          console.log("Inside hook props.value ", props.value)
          console.log("Inside hook disable " , disable)
        });
      

    const handleChange = (event) => {
        console.log("chnage code:",event)
        if(event.target.value != "") {
            setDisable(false);
            setValue(event.target.value);
        } else {
            setDisable(true);
            setValue(event.target.value);
        }
    }

    const handleContinue = () => {
        props.continue(props.step + 1 , props.step -1 , value)
    }

    const handleEnter = (event) => {
        console.log("key code:",event)
        if(!disable && event.keyCode == 13){
            handleContinue()
        }
        // props.continue(props.step + 1 , props.step -1 , value)
    }

    const handleGoBack = () => {
        props.goback(props.step - 1, value)
    }

    return(
        <div>
            <h2>{stepQuestion[props.step-1].question} </h2>
            <div>
                <input 
                    type="text" 
                    value={value} 
                    placeholder={stepQuestion[props.step-1].placeHolder} 
                    onChange={handleChange} 
                    onKeyUp={handleEnter}/>
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
                    onSubmit={() => handleContinue()}
                    onClick={() => handleContinue()}
                    onKeyUp={() => handleEnter()}>
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

export default InputQuestion;