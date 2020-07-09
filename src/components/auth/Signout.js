import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class Signout extends React.Component {
    componentDidMount() {
        this.props.signout();
    }

   render() {
    const style = {textAlign: 'center', width: '400px', background: 'yellow', padding: '2rem', margin: '1rem'}
       return(
           <div style={style}>
               <h4>
                   Sorry to see you go              
                </h4>
           </div>
       );
   };
}

export default connect(null, actions)(Signout);