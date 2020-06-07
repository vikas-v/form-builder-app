import { createStore, applyMiddleware } from 'redux';
import { takeLatest, all } from 'redux-saga/effects';
import { reducer } from './../reducers/reducer';
import createSagaMiddleware from 'redux-saga';
import "regenerator-runtime/runtime";
import Constants from './../Constants';
import { fetchForms, fetchForm, addNewForms, saveSurveyForm } from './forms';

function* getForms() {
	yield takeLatest(Constants.GET_FORMS, fetchForms)
}

function* addForm() {
	yield takeLatest(Constants.ADD_FORM, addNewForms)
}

function* getForm() {
	yield takeLatest(Constants.GET_FORM, fetchForm)
}

function* saveSurvey() {
	yield takeLatest(Constants.SAVE_SURVEY, saveSurveyForm)
}

export function* rootSaga() {
	yield all([
		getForms(),
		addForm(),
		getForm(),
		saveSurvey()
	]);
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
