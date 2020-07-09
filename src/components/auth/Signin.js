import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux'; // allows better notation of higher order functions like connect () ()
import * as actions from 'actions';
import { compose } from 'redux'; // allows for clean syntax with connect()() and reduxForm()()

import 'css/Signup.css'; // share same css

class Signin extends React.Component {
    componentDidMount() {
        this.props.refresh()    // clear error messages from redux store
    }
    
    // helpers
    onSubmit = (formProps) => {        
        this.props.signin(formProps, () => {
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
                    <button>Sign In</button>
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
    reduxForm({ form: 'signin' })
)(Signin)

// export default reduxForm({ form: 'signin'})(Signin);    // 'signin' is an arbitrary name
