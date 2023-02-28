import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Home from './components/Home';

function App() {
  const [apiData, setApiData] = useState([])
  const [choices, setChoices] = useState([])
  const [isQuizOver, setIsQuizOver] = useState(true)

  function newApiData(dataArr) {
    const newData = dataArr.map(item => {
      return {
        id: nanoid(),
        ...item,
        choices: getMultipleChoices(item)
      }
    });
    return newData
  }

  function getMultipleChoices(data) {
    let answers = [data.correct_answer, ...data.incorrect_answers];
    let sortedAnswers = answers.sort()
    return sortedAnswers
  }

  useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=7&category=21&type=multiple`)
      .then(response => response.json())
      .then(data => {
        const newDataObj = newApiData(data.results)
        setApiData(newDataObj)
      })
  }, [])

  const quizElements = apiData.map(element => (
    <section key={element.id}>
      <h2>{element.question}</h2>
      <div>
        <p className='choice-pill'>{element.difficulty}</p>
      </div>
    </section>
  ))

  function startQuiz() {
    console.log('start button is clicked')
  }

  return (
    <>
      <Home handleClick={startQuiz} />
      {apiData.length > 0 && quizElements}
    </>
  );
}

export default App;
