import React from 'react';

function Question({ selectAnswer, question, choices, isSelected }) {
  // bg color style for each paragraph in the quizElements
  const bgStyle = {
    backgroundColor: isSelected ? '#D6DBF5' : ''
  }

  return (
    <>
      <section className='quiz'>
        <h2>{question}</h2>
        <div className='choices-pills-wrapper'>
          {
            choices.map(choice => (
              <p
                key={choice.choice_id}
                className='choice-pill'
                style={bgStyle}
                onClick={selectAnswer}
              >{choice.choice}</p>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Question;