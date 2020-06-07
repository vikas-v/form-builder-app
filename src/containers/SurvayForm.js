import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import SurvayForm from './../components/SurvayForm'
import { getForm, saveSurvey } from './../actions';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => {
  return {
    form: state.form,
    loading: state.loading
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getForm: getForm,
    handleSaveSurvey: saveSurvey
  }, dispatch)
};

class SurvayFormContainer extends Component {

  componentDidMount() {
    const { match: { params: { formId } } } = this.props
    this.props.getForm(formId)
  }

  render() {
    return <SurvayForm  {... this.props}/>

  }
}
SurvayFormContainer = connect(mapStateToProps, mapDispatchToProps)(
  withRouter(SurvayFormContainer));

export default SurvayFormContainer;
