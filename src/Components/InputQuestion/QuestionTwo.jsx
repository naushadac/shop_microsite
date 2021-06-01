import React from 'react' 
import InputQuestion from './InputQuestion';

const QuestionTwo = (props) => {

    return(
        <InputQuestion
            goback={props.goback} 
            continue={props.continue} 
            value={props.value} 
            step={props.step} />
    )
}

export default QuestionTwo;
