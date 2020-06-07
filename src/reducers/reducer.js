import Constants from "../Constants";

const initialState = {
  news: [],
  forms: [],
  loading: false,
  form: null
};

const addForm = (state, form) => {
  const { forms } = state;
  forms.push(form);
  return [...forms];
}

export const reducer = function (state = initialState, action) {
  switch (action.type) {
    case Constants.GET_FORMS:
      return { ...state, loading: true };

    case Constants.FORMS_RECEIVED:
      return { ...state, forms: action.forms, loading: false };

    case Constants.GET_FORM:
      return { ...state, loading: true };

    case Constants.FORM_RECEIVED:
      return { ...state, form: action.form, loading: false };

    case Constants.ADD_FORM:
      return { ...state, loading: true };

    case Constants.FORM_ADDED:
      const forms = addForm(state, action.form);
      return { ...state, loading: false, forms: forms };


    case Constants.SAVE_SURVEY:
      return { ...state, loading: true };
  
    case Constants.SURVEY_SAVED:
      return { ...state, loading: false };
  
  
    default:
      return state;
  }
};
