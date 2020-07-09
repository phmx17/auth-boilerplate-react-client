import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux'; // allows better notation of higher order functions like connect () ()
import * as actions from 'actions';
import { compose } from 'redux'; // allows for clean syntax with connect()() and reduxForm()()

import 'css/Signup.css';

class Signup extends React.Component {
    componentDidMount() {
        this.props.refresh()    // clear any error messages
    }
    
    // helpers
    onSubmit = (formProps) => {        
        this.props.signup(formProps, () => {
            this.props.history.push('/feature');
        });    // call action creator
    }

    render() {
        const { handleSubmit } = this.props;    // supplied by redux form  
        return(
            <div className="Signup">
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <fieldset>
                        <label>Email: </label>
                        <Field 
                          name="email"
                          type="text"
                          component="input"
                          autoComplete="none"
                          />
                    </fieldset>
                    <fieldset>
                        <label>Password: </label>
                        <Field 
                          name="password"
                          type="password"
                          component="input"
                          autoComplete="none"
                          />
                    </fieldset>
                    <div>{this.props.errorMessage}</div>
                    <button>Submit</button>
                </form>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return { errorMessage: state.auth.errorMessage }
};

export default compose (
    connect(mapStateToProps, actions), 
    reduxForm({ form: 'signup' })
)(Signup)

// export default reduxForm({ form: 'signup'})(Signup);    // 'signup' is an arbitrary name
