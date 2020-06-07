import React from 'react';

let MultipleChoiceQuestion = ({ handleChange, count, question, disabled = true }) => {
  return (
    <div className="card">
      <div className="card-body">
        <p><strong>{count}</strong>. {question.title}</p>
        {(question && question.options && question.options.map((option, index) => {
          return (
            <span className="width-100 px-10" key={index}>
              <input
                onChange={(e) => { handleChange(e, count) }}
                name={`${question.title} ${option} ${index}`}
                id={`${question.title} ${option} ${index}`}
                value={option}
                type="checkbox" disabled={disabled} />
              <label htmlFor={`${question.title} ${option} ${index}`}>{option}</label>
            </span>
          )
        })) || null
        }
      </div>
    </div>
  )
}

export default MultipleChoiceQuestion;