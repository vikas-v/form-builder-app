import React from 'react';
import { withRouter, Link } from 'react-router-dom'

let SurvayComplete = ({ loading }) => (
    <div className="container">
        <div className="row">
            <div className="w-100 card text-center">
                <div className="card-header"></div>
                <div className="card-body">
                    Your Survey Submitted successfully.
                    <div>
                        <Link to={'/'}>Go To Home</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
const mapStateToProps = (state) => ({ loading: state.loading })
export default withRouter(SurvayComplete);