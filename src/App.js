import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import he from 'he';
import Home from './components/Home';

function App() {
  const [apiData, setApiData] = useState([])
  const [choices, setChoices] = useState([])
  const [isGameStarted, setIsGameStarted] = useState(false)

  // converts dataArr to an array of objects
  function newApiData(dataArr) {
    const newData = dataArr.map(item => {
      return {
        id: 1,
        ...item,
        choices: getMultipleChoices(item),
        isSelected: false
      }
    });
    return newData
  }

  // spreads and sorts values of the properties `data.correct_answer`
  // and data.incorrect_answers into a new array of multiple choices
  function getMultipleChoices(data) {
    let answers = [data.correct_answer, ...data.incorrect_answers];
    let sortedAnswers = answers.sort()
    return sortedAnswers
  }

  // getting rid of HTML entities in the API response using the lightweight `he` package
  function decodeHtmlEntity(jsonData) {
    // JSON.parse expects a string as its first argument
    // the second argument is a callbackFn() called `reviver`
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
    const decodedData = JSON.parse(jsonData, (key, value) => {
      if (typeof value === 'string') {
        // use the decode() function of the `he` package
        // to decode HTML entities of  `values` of typeof `string`
        // therefore works for all properties
        return he.decode(value)
      }
      return value;
    })
    return decodedData
  }

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
  }, [])

  const quizElements = apiData.map((element, index) => (
    <section key={index} className='quiz'>
      <h2>{element.question}</h2>
      <div className='choices-pills-wrapper'>
        {
          element.choices.map(choice => (
            <p key={choice} className='choice-pill'>{choice}</p>
          ))
        }
      </div>
    </section>
  ))

  function startQuiz() {
    setTimeout(() => {
      setIsGameStarted(true)
    }, 1000)
  }

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