import { connect } from 'react-redux';
import Home from './../components/Home'
import { getForms, addForm } from './../actions';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => {
  return {
    forms: state.forms
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getForms: getForms,
    addForm: addForm
  }, dispatch)
};

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
