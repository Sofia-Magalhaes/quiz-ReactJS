import { createContext, useReducer } from "react";
import questions from "../data/questions"

const STAGES = ["Start", "Playing", "End"]

const initialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
    score: 0,
    answerSelected: false
}
//estado do jogo e ação que pode modificar o estado do jogo
const quizReducer = (state, action) => {


    switch (action.type) {
        case "CHANGE_STATE":
            return {
                ...state, //salvando estado anterior
                gameStage: STAGES[1],
            };

        case "REORDER_QUESTIONS":
            const reorderQuestions = questions.sort(() => {
                return Math.random() - 0.5;
            })
            return {
                ...state,
                questions: reorderQuestions,
            }

        case "CHANGE_QUESTION":
            const nextQuestion = state.currentQuestion + 1
            let endGame = false

            if (!questions[nextQuestion]) {
                endGame = true
            }

            return {
                ...state,
                currentQuestion: nextQuestion,
                gameStage: endGame ? STAGES[2] : state.gameStage
            }

        case "NEW_GAME":
            return initialState

        case "CHECK_ANSWER":
            if(state.answerSelected) return state //prevenindo bug de resposta a mais

            const answer = action.payload.answer
            const option = action.payload.option
            let correctAnswer = 0

            if (answer === option) correctAnswer = 1;

            return{
                ...state,
                score: state.score + correctAnswer,
                answerSelected: option,
            }




        default:
            return state
    }
}

export const QuizContext = createContext()

export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer, initialState)
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}