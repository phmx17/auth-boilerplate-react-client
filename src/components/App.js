import React from 'react';
import Header from 'components/Header'
import 'css/App.css'


export default ({ children }) => {    
        return (
            <div className="App">
                <Header />
                {children}                
            </div>
        );    
}
