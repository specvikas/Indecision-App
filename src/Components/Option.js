import React from 'react';

const Option = (props) => (

            <div className="option">
            
            <h3 className="option__text">{props.count}.&nbsp;&nbsp;{props.optionText}  &nbsp;&nbsp;&nbsp;</h3>
            
            <button
                    className="button button--link"
                    onClick={(e) => { props.handleDeleteOption(props.optionText); } }
                
                >  Remove
            </button>
            
            </div>
    );


export default Option;