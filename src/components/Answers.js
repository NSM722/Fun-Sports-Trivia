import React from 'react';

function Answers({ question, choices }) {
  return (
    <>
      <section className='answer'>
        <h2>{question}</h2>
        <div className='choices-pills-wrapper'>
          {
            choices.map(choice => (
              <p
                key={choice.choice_id}
                className='choice-pill'
                // style={{backgroundColor: choice.isSelected && choice.choice === parent.correct_answer ? '#94D7A2' : 'F8BCBC'}}
              >{choice.choice}</p>
            ))
          }
          {/* <button
            type='button'
            className='btn'
          >Play Again</button> */}
        </div>
      </section>
    </>
  )
}

export default Answers;

