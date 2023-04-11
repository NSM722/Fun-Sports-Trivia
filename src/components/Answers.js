import React from 'react';

function Answers({ question, choices, correctAnswer }) {
  return (
    <>
      <section className='answer'>
        <h2>{question}</h2>
        <div className='choices--pills--wrapper'>
          {
            choices.map(choice => (
              <p
                key={choice.choice_id}
                className='choice--pill'
                style={{
                  backgroundColor: choice.isSelected && choice.choice === correctAnswer ? 
                  '#94D7A2' : 
                  choice.isSelected && choice.choice !== correctAnswer ?
                  '#F8BCBC' :
                  ''
                }}
              >{choice.choice}</p>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Answers;

