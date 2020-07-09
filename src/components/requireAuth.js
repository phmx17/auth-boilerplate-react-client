import React, { Component } from 'react';
import { connect } from 'react-redux';  // our good ol' friend connect()()

export default ChildComponent => {
    class ComposedComponent extends Component {
        componentDidMount = () => {
            this.checkAuth();
        };
    
        componentDidUpdate = () => {    // case when 'Sign Out' is clicked; updated set of props are received
            this.checkAuth();
        };    
    
        /* helper */
        checkAuth = () => {            
            if (!this.props.auth) this.props.history.push('/'); // redirect away if no jwt found
        };

        render() {
            return(
                <ChildComponent {...this.props}/>   // be sure to pass on props !
            );
        };
    };
    
    const mapStateToProps = (state) => {
        return{ auth: state.auth.authenticated };   // assign jwt to auth
    }
    return connect(mapStateToProps)(ComposedComponent);
};