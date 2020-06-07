import Constants from './../Constants';

export const addForm = (param) => ({
  type: Constants.ADD_FORM,
  param
})

export const getForms = () => ({
  type: Constants.GET_FORMS
})

export const getForm = (slug) => ({
  type: Constants.GET_FORM,
  slug
})


export const saveSurvey = (survey) => ({
  type: Constants.SAVE_SURVEY,
  survey
})