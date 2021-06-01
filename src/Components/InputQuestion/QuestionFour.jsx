import React from 'react' 
import InputQuestion from './InputQuestion';

const QuestionFour = (props) => {

    return(
        <InputQuestion
            goback={props.goback} 
            continue={props.continue} 
            value={props.value} 
            step={props.step} />
    )
}

export default QuestionFour;
