import React from 'react';

function Questions({ selectAnswer, question, choices, parentID }) {
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
                style={{backgroundColor: choice.isSelected ? '#D6DBF5' : ''}}
                onClick={(e) => selectAnswer(e, parentID)}
              >{choice.choice}</p>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Questions;