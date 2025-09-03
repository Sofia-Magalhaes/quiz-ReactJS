import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import CategoryImg from "../img/category.svg"

import "./Category.css"


const Category = () => {
    const [quizState, dispatch] = useContext(QuizContext)

    const chooseCategoryAndReorderQuestions = (category) => {
        dispatch({ type: "START_GAME", payload: category })
        dispatch({ type: "REORDER_QUESTIONS" })
    }

    return (
        <div id='category'>
            <h2>Escolha uma categoria</h2>
            <p>As perguntas serão referentes a uma das sua escolha abaixo</p>
            <div>{quizState.questions.map((question) => (
                <button onClick={() => chooseCategoryAndReorderQuestions(question.category)} key={question.category}>{question.category}</button>
            ))}</div>
            <img src={CategoryImg} alt="Categoria do Quiz" />
        </div>
    )
}

export default Category