import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import CategoryImg from "../img/category.svg"

import "./Category.css"


const Category = () => {
    return (
        <div id='category'>
            <h2>Escolha uma categoria</h2>
            <p>As perguntas serão referentes a uma das sua escolha abaixo</p>
            <div>
                <button>Flop</button>
            </div>
            <img src={CategoryImg} alt="Categoria do Quiz" />
        </div>
    )
}

export default Category