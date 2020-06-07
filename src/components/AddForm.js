import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import TextQuestion from './Questions/TextQuestion';
import SingleOptionQuestion from './Questions/SingleOptionQuestion';
import MultipleChoiceQuestion from './Questions/MultipleChoiceQuestion';

const AddForm = ({ ...props }) => {
	const [questions, setQuestions] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [formName, setFormName] = useState('');
	const [questionTitle, setQuestionTitle] = useState('');
	const [questionType, setQuestionType] = useState('');
	const [multipleChoiseAnswer, setMultipleChoiseAnswer] = useState('');

	const handleAddQuestion = (e) => {
		const question = {
			title: questionTitle,
			type: questionType,
		};
		if (multipleChoiseAnswer) {
			question['options'] = multipleChoiseAnswer.split('\n').filter((option) => (option))
		}
		questions.push(question);
		setQuestions(questions);
		setShowModal(false);
	}

	const handleOnSave = (e) => {
		props.addForm({ title: formName, questions })
		resetForm()
	}

	const resetForm = () => {
		setQuestions([])
		setShowModal(false)
		setFormName('')
		setQuestionTitle('')
		setQuestionType('')
		setMultipleChoiseAnswer('')
	}

	const handleOnToggle = (show) => {
		setQuestionTitle('');
		setQuestionType('');
		setMultipleChoiseAnswer('');
		setShowModal(!showModal);
	}

	const isValid = () => {
		if (!questionTitle) {
			return false
		}

		if (!questionType) {
			return false
		}

		if (questionType === 'multiple_choice_checkbox') {
			return multipleChoiseAnswer.split('\n').filter((option) => (option)).length
		}

		return true
	}

	return (<div className="card w-100">
		<div className="card-body">
			<h2 className="text-center">Create form</h2>
			<div className="offset-3 col-md-6 p-3">
				<div className="form-group">
					<input value={formName} onChange={(e) => { setFormName(e.target.value) }} className="form-control"></input>
				</div>
				<div className="form-group">
					{questions.map((question, index) => {
						switch (question.type) {
							case 'text':
								return <TextQuestion count={index + 1} key={index} question={question} />

							case 'single_select_radio':
								return <SingleOptionQuestion count={index + 1} key={index} question={question} />

							case 'multiple_choice_checkbox':
								return <MultipleChoiceQuestion count={index + 1} key={index} question={question} />
							default:
								return null
						}
					})}
				</div>
				<div className="form-group text-center mx-auto">
					<button onClick={(e) => { handleOnToggle() }} className="btn btn-info">Add Question</button>
					<button disabled={!formName || !questions.length} onClick={(e) => { handleOnSave() }} className="btn btn-info">Create</button>
				</div>
			</div>

		</div>
		<Modal show={showModal} onHide={(e) => (setShowModal(false))}>
			<Modal.Header>
				Add New Form <strong>{formName}</strong>
			</Modal.Header>
			<Modal.Body>
				<div className="form-group">
					<input placeholder="Question title" className="form-control" onChange={(e) => { setQuestionTitle(e.target.value) }} />
				</div>
				<div className="form-group">
					<select onChange={(e) => { setQuestionType(e.target.value) }} className="form-control">
						<option value=''>Select Question Type</option>
						<option value='text'>Text</option>
						<option value='multiple_choice_checkbox'>Multichoice Checkbox</option>
						<option value='single_select_radio'>Single Select Radio</option>
					</select>
				</div>
				{questionType === 'multiple_choice_checkbox' ? (
					<div className="form-group">
						<textarea placeholder="Enter each choice in separate lines." className="form-control" onChange={(e) => { setMultipleChoiseAnswer(e.target.value) }} />
					</div>
				) : null}
			</Modal.Body>
			<Modal.Footer>
				<button onClick={(e) => { setShowModal(false) }} className="btn btn-default">Close</button>
				<button disabled={!isValid()} onClick={(e) => { handleAddQuestion(false) }} className="btn btn-info">Add</button>
			</Modal.Footer>
		</Modal>
	</div>)
};

export default AddForm;