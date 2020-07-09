import React from 'react';
import requireAuth from './requireAuth'; 

class Feature extends React.Component {
    render() {
        const style = {textAlign: 'center', width: '400px', background: 'yellow', padding: '2rem', margin: '1rem'}
        return (
            <div style={style}>
                <h3> This is our Feature !</h3>
            </div>
        );
    };
}
export default requireAuth(Feature);