import React from 'react';

let TextQuestion = ({ handleChange, count, question, disabled = true }) => {
  return (
    <div className="card">
      <div className="card-body">
        <p><strong>{count}</strong>. {question.title}</p>
        <input onChange={(e) => { handleChange(count, e.target.value) }} className="form-control" placeholder="Enter answer..." disabled={disabled} />
      </div>
    </div>
  )
}

export default TextQuestion;