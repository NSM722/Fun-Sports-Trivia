import React from 'react'
import Home from './components/Home'

function App() {
  // const [questions, setQuestions] = useState([])

  // useEffect(() => {
  //   fetch(`https://opentdb.com/api.php?amount=7&category=21&difficulty=medium&type=boolean`)
  //     .then(response => response.json())
  //     .then(data => {
  //       setQuestions(data.results)
  //     })
  // }, [])

  // const introElements = questions.map((question, index) => (
  //   <p key={index}>{question.question}</p>
  // ))

  return (
    <>
      <Home />
    </>
  );
}

export default App;
