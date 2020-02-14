import React, { Component } from 'react';
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
    constructor(props){
        super(props);
        this.state = {
            incorrectAnswer: false
        }
    }
    handleClick(buttonText){
        if(buttonText === this.props.quiz_question.answer) {
            this.props.showNextQuestionHandler();
        }
        const isCorrect = this.state.incorrectAnswer;
        this.state.incorrectAnswer = isCorrect ? false : true;
    }
    render() {
        return (
            <main>
                { this.state.incorrectAnswer
                        ? <p className='error'>Sorry, that's not right.</p>
                        : null }
                <section>
                    <p>
                        {this.props.quiz_question.instruction_text}
                    </p>
                </section>
                <section className="buttons">
                    <ul>
                        {this.props.quiz_question.answer_options.map((answer_option, index) =>
                            <QuizQuestionButton button_text={answer_option} key={index} clickHandler={this.handleClick.bind(this)}>
                                {answer_option.id}
                            </QuizQuestionButton>
                        )}
                    </ul>
                </section>
            </main>

        );

    }


}

export default QuizQuestion;