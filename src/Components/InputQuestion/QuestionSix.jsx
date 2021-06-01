import React from 'react' 
import ButtonQuestion from './ButtonQuestion';

const QuestionSix = (props) => {

    return(
        <ButtonQuestion
            goback={props.goback} 
            continue={props.continue} 
            value={props.value} 
            step={props.step} 
            optionClass={props.optionClass} />
    )
}

export default QuestionSix;
