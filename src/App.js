import React, { useState, useEffect } from 'react';
import { newApiData, decodeHtmlEntity } from './utils';
import Home from './components/Home';
import Question from './components/Question';

function App() {
  const [apiData, setApiData] = useState([])
  // const [choices, setChoices] = useState([])
  const [isGameStarted, setIsGameStarted] = useState(false)
  // const [isSelected, setIsSelected] = useState(false)

  useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=7&category=21&type=multiple`)
      .then(response => response.json())
      .then(data => {
        //   console.log
        // initialize results from the api call
        const newDataObj = newApiData(data.results)

        // convert the api results to a string then decode it
        const decodedData = decodeHtmlEntity(JSON.stringify(newDataObj))
        setApiData(decodedData)
      })
    // eslint-disable-next-line
  }, [])

  // starts the quiz
  function startQuiz() {
    setTimeout(() => {
      setIsGameStarted(true)
    }, 1000)
  }

  // manipulates the isSelected in state when an option is selected
  function selectAnswer(e, parentElemId) {
    // prevents bubbling effect
    e.stopPropagation()
    let targetText = e.target.textContent;
    setApiData(prevState =>
      prevState.map(element => element.id === parentElemId ? {
        ...element,
        choices: element.choices.map(choice => choice.choice === targetText ? {
          ...choice,
          isSelected: !choice.isSelected
        } : choice)
      } : element)
    )
  }


  const quizElements = apiData.map(({ question, choices, id }) => (

    <Question
      parentID={id}
      selectAnswer={selectAnswer}
      question={question}
      choices={choices}
      key={id} />
  ))
  // console.log(apiData)
  return (
    <>
      <main className='container'>
        {
          !isGameStarted ?
            <Home handleClick={startQuiz} /> :
            <>
              {quizElements}
              <button className='check-answers btn'>Check answers</button>
            </>
        }
      </main>
    </>
  );
}

export default App;