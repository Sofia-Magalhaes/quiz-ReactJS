import { createContext, useReducer } from "react";
import questions from "../data/questions"

const STAGES = ["Start", "Playing", "End"]

const initialState = {
    gameStage: STAGES[0],
    questions
}
//estado do jogo e ação que pode modificar o estado do jogo
const quizReducer = (state, action) => {
    console.log(state, action);

    switch (action.type) {
        case "CHANGE_STATE":
            return {
                ...state, //salvando estado anterior
                gameStage: STAGES[1],
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