import React from 'react';
import Option from './Option';

const Options = (props) => (
           
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                <button
                        className="button button--link"
                        onClick={props.handleDeleteOptions} 
                        disabled = {!props.hasOptions }
             >
                 RemoveAll
             </button>
            </div>
            { props.yourOptions.length === 0 && <p className="widget-message">Please add an option to get started !</p> }
            { props.yourOptions.length !== 0 && <h4 className="widget-message">Here are your options.....</h4> } 
            {
                props.yourOptions.map((item,index) => <Option key={item} optionText={item} count={index+1} handleDeleteOption={props.handleDeleteOption}/>)                                                                                                                                                                                              
            }

         </div>

     );

export default Options;