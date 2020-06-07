import React, { useState } from 'react';
import { connect } from 'react-redux'
import TextQuestion from './Questions/TextQuestion';
import SingleOptionQuestion from './Questions/SingleOptionQuestion';
import MultipleChoiceQuestion from './Questions/MultipleChoiceQuestion';

let SurvayForm = ({ ...props }) => {
  const { form } = props;
  const [answers, setAnswers] = useState([]);
  const [userName, setUserName] = useState('');
  const handleTextChange = (count, answer) => {
    const ans = {
      question: form.questions[count -1].title,
      answer
    }
    answers[count -1] = ans
    setAnswers(answers)
  }

  const handleSingleOptionChange = (count, answer) => {
    const ans = {
      question: form.questions[count - 1 ].title,
      answer
    }
    answers[count - 1 ] = ans
    setAnswers(answers)
  }

  const handleMultipleOptionChange = (event, count) => {
    event.persist()
    const { checked } = event.target
    let ans = answers[count -1];
    if (!ans || !ans.answers) {
      ans = {
        question: form.questions[count -1].title,
        answers: [event.target.value]
      } 
    } else {
      ans = answers[count -1]
      if (!checked) {
        const index = ans.answers.indexOf(event.target.value);
        if (index !== -1) ans.answers.splice(index, 1);
      } else {
        ans.answers.push(event.target.value)
      }
 
    }

    answers[count -1] = ans
    setAnswers(answers)
  }

  const handleOnSaveSurvey = (e) => {
    props.handleSaveSurvey({
      slug: form.slug,
      answers,
      user_name: userName
    })

    props.history.push('/form/survey-completed')
  }

  return (
    <div className="container">
      <div className="row">
        {form ? (
          <div className="card w-100">
            <div className="card-header text-center">{form.title}</div>
            <div className="card-body">
              <div className="form-group">
                <input placeholder="Enter Your Name" className="form-control" onChange={(e) => { setUserName(e.target.value)}}></input>
              </div>
              {form.questions.map((question, index) => {
                switch (question.type) {
                  case 'text':
                    return <TextQuestion
                      handleChange={handleTextChange}
                      disabled={false}
                      count={index + 1}
                      key={index}
                      question={question} />

                  case 'single_select_radio':
                    return <SingleOptionQuestion
                      handleChange={handleSingleOptionChange}
                      disabled={false}
                      count={index + 1}
                      key={index}
                      question={question} />

                  case 'multiple_choice_checkbox':
                    return <MultipleChoiceQuestion
                      handleChange={handleMultipleOptionChange}
                      disabled={false}
                      count={index + 1}
                      key={index}
                      question={question} />
                  default:
                    return null
                }
              })}
            </div>
            <div className="card-footer text-center">
              <button disabled={!userName} className="btn btn-info" onClick={handleOnSaveSurvey}>Save Survey</button>
            </div>
          </div>
        ) : null}

      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    form: state.form
  }
}
SurvayForm = connect(mapStateToProps, null)(SurvayForm)
export default SurvayForm;