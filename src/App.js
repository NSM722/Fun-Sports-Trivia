import React, { useState, useEffect } from 'react';
import { newApiData, decodeHtmlEntity } from './utils';
import Home from './components/Home';
import Questions from './components/Questions';
import Answers from './components/Answers';

let ANSWER_COUNT = 0;

function App() {
  const [apiData, setApiData] = useState([])
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [isCheckingAnswers, setIsCheckingAnswers] = useState(false)

  useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=7&category=21&type=multiple`)
      .then(response => response.json())
      .then(data => {
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

  // sends the user back to the home page
  function playAgain() {
    setTimeout(() => {
      setIsGameStarted(false)
    }, 500)
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

  function checkAnswers() {
    setIsCheckingAnswers(true)
    apiData.forEach(element => {
      element.choices.forEach(choice => {
        if(choice.isSelected && choice.choice === element.correct_answer) {
          ANSWER_COUNT += 1
        }
      })
    });
    console.log(`You scored ${ANSWER_COUNT} / ${apiData.length} correct answers`)
  }

  const quizElements = apiData.map(({ question, choices, id }) => (
    <Questions
      parentID={id}
      selectAnswer={selectAnswer}
      question={question}
      choices={choices}
      key={id} />
  ))

  const answerElements = apiData.map(({ question, choices, id}) => (
    <Answers 
      question={question}
      choices={choices}
      key={id}
    />
  ))

  // console.log(apiData)
  return (
    <>
      <main className='container'>
        {
          !isGameStarted ?
            <Home handleClick={startQuiz} /> :
          !isCheckingAnswers ? 
            <>
              {quizElements}
              <button 
              type='button'
              className='check-answers btn'
              onClick={() => checkAnswers()}
              >Check answers</button>
            </>  :
            <>
              {answerElements}
              <h3>
                {`You scored ${ANSWER_COUNT} / ${apiData.length} correct answers`}
              </h3>
              <button
                type='button'
                className='btn'
                onClick={() => playAgain()}
              >Play Again</button>
            </>
        }
      </main>
    </>
  );
}

export default App;

