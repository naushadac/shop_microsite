import React, { Component } from 'react'
import QuestionOne from '../../Components/InputQuestion/QuestionOne';
import QuestionTwo from '../../Components/InputQuestion/QuestionTwo';
import QuestionThree from '../../Components/InputQuestion/QuestionThree';
import QuestionFour from '../../Components/InputQuestion/QuestionFour';
import QuestionFive from '../../Components/InputQuestion/QuestionFive';
import NavBar from '../../Components/Nav/NavBar'
import { TOTAL_STEPS } from '../../constants/constants';
import ApiService from '../../services/ApiService';
import ButtonQuestion from '../../Components/InputQuestion/ButtonQuestion';
import QuestionSix from '../../Components/InputQuestion/QuestionSix';


class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            step: 1,
            answers: ["","","","",""],
            questionThreeClass: ["nonSel", "nonSel", "nonSel"],
            questionFourClass: ["nonSel", "nonSel", "nonSel"]
        }
    }

    handleOptionAnswer = (number, index, value, optionClass) => {
        if(number == 3) {
            this.setState({questionThreeClass:optionClass} ,
                () => {
                    this.handleAnswer(number, index, value)
                })

        } else if (number == 5) {
            this.setState({questionFourClass:optionClass} ,
                () => {
                    this.handleAnswer(number, index, value)
                })
        }
    }

    handleAnswer = (number, index, value) => {
        var tempAnswers = this.state.answers;
        tempAnswers[index] = value

        if(number > TOTAL_STEPS ) {
            ApiService.postAnswers("url", "body")
            .then((res) => {
                if(res.statusCode == 200) {
                    window.location.href = "/oath"
                } else (
                    this.setState({
                        step: number - 1,
                        answers:tempAnswers
                    })
                )
                
            })
        } else {
            this.setState({
                step: number,
                answers:tempAnswers
            })
        }
        
    }

    handlePrevious = (number, value) => {
        console.log("number", number)
        var tempAnswers = this.state.answers;
        tempAnswers[number] = value
        if(number == 0) {
            window.location.href = "/"
        }
        this.setState({
                        step:number,
                        answers: tempAnswers
                    })
    }

    render() {
        let element
        if(this.state.step == 1){
            element = <QuestionOne
                        goback={this.handlePrevious} 
                        continue={this.handleAnswer} 
                        value={this.state.answers[this.state.step-1]} 
                        step={this.state.step} />
        } else if (this.state.step == 2) {
            element = <QuestionSix
                        goback={this.handlePrevious} 
                        continue={this.handleAnswer} 
                        value={this.state.answers[this.state.step-1]} 
                        step={this.state.step} 
                        optionClass={this.state.questionThreeClass} />
            
            // <QuestionTwo
            //             goback={this.handlePrevious} 
            //             continue={this.handleAnswer} 
            //             value={this.state.answers[this.state.step-1]} 
            //             step={this.state.step} />
        } else if (this.state.step == 3) {
            element = <QuestionThree
                        goback={this.handlePrevious} 
                        continue={this.handleAnswer} 
                        value={this.state.answers[this.state.step-1]} 
                        step={this.state.step} />
        } else if (this.state.step == 4) {
            element = <QuestionFour
                        goback={this.handlePrevious} 
                        continue={this.handleAnswer} 
                        value={this.state.answers[this.state.step-1]} 
                        step={this.state.step} />
        } else if (this.state.step == 5) {
            element = <QuestionFive
                        goback={this.handlePrevious} 
                        continue={this.handleAnswer} 
                        value={this.state.answers[this.state.step-1]} 
                        step={this.state.step} />
        }

        return (
            <React.Fragment>
                <NavBar />
                {element}
            </React.Fragment>
        ) 
       
    }
}

export default Dashboard;