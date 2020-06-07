import React from 'react';

let SingleOptionQuestion = ({ handleChange, count, question, disabled = true}) => {
	return (
		<div className="card">
			<div className="card-body">
				<p><strong>{count}</strong>. {question.title}</p>
				<span>
					<input onChange={(e) => { handleChange(count, e.target.value) }} name={question.title} id={`${question.title} true`} value={true} type="radio" placeholder="Enter answer.." disabled={disabled} />
					<label htmlFor={`${question.title} true`}>True</label>
				</span>
				<span>
					<input onChange={(e) => { handleChange(count, e.target.value) }} name={question.title} id={`${question.title} false`} value={false} type="radio" placeholder="Enter answer.." disabled={disabled} />
					<label htmlFor={`${question.title} false`}>False</label>
				</span>
			</div>
		</div>
	)
}

export default SingleOptionQuestion;