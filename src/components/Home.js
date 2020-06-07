import React, { Component } from 'react'
import FormsList from './FormsList';
import AddForm from './AddForm';

class Home extends Component {

	componentWillMount() {
		this.props.getForms()
	}

	render() {
		const { addForm, forms } = this.props;
		return (
			<div className="container">
				<div className="row">
					<AddForm addForm={addForm} />
				</div>
				<div className="row">
					<FormsList forms={forms} />
				</div>
			</div>
		)
	}
};

export default Home;