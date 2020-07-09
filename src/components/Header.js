import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';  // get auth piece of state in to check if logged in
import 'css/Header.css'

class Header extends React.Component {
    
    // helpers    
    renderLinks = () => {    
        if (this.props.authenticated) 
            return (
              <div className="Header">
                  <h3>Authy</h3>                  
                  <Link to="/signout">Sign Out</Link>
                  <Link to="/feature">Feature</Link>
              </div>
        ) 
        else 
            return (
                <div className="Header">
                  <h3>Authy</h3>   
                  <Link to="/">Home</Link>               
                  <Link to="/signup">Sign Up</Link>
                  <Link to="/signin">Sign In</Link>
              </div>
            )
    //   return links;
    };

    render() {
        return (
            <div>                
                {this.renderLinks()}
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return { authenticated: state.auth.authenticated }
};

export default connect(mapStateToProps)(Header);