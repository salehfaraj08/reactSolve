import QuizTitle from "./quizTitle";
import './quiz.css'
import Q1 from "./q1";
import Q2 from "./q2";

const Quiz = () => {
    return (
        <div id="quiz">
            <QuizTitle />
            <Q1 />
            <Q2 />
        </div>
    );
}

export default Quiz;