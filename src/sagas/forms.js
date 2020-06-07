import { put } from 'redux-saga/effects';
import axios from 'axios';

import config from './../config';
import Constants from './../Constants'

export function* fetchForms() {
  const data = yield axios(`${config.baseUrl}/forms`)
    .then(response => {
      return response.data
    }, (error) => {
      return error.message
    });

  yield put({ type: Constants.FORMS_RECEIVED, forms: data });
}

export function* fetchForm(action) {
  const data = yield axios(`${config.baseUrl}/forms/${action.slug}`)
    .then(response => {
      return response.data
    }, (error) => {
      return error.message
    });

  yield put({ type: Constants.FORM_RECEIVED, form: data });
}

export function* addNewForms(action) {
  const data = yield axios.post(`${config.baseUrl}/forms`, action.param)
    .then(response => {
      return response.data
    }, (error) => {
      return error.message
    });

  yield put({ type: Constants.FORM_ADDED, form: data });
}

export function* saveSurveyForm(action) {
  const data = yield axios.post(`${config.baseUrl}/surveys`, action.survey)
    .then(response => {
      return response.data
    }, (error) => {
      return error.message
    });

  yield put({ type: Constants.SURVEY_SAVED, survey: data });
} 