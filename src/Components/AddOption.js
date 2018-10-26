import React from 'react';

const AddOption = (props) =>  {

    // handleSubmit = (e) => {
 
    //     e.preventDefault();
    //     const option = e.target.elements.option.value.trim();
    //     props.addOption(option);
    //     document.querySelector('#hello').value = '';
    //     document.querySelector('#add').disabled = true;
    // }

        return(
        <div>
            <form 
                className="add-option"
                onSubmit= { (e) => {
 
                    e.preventDefault();
                    const option = e.target.elements.option.value.trim();
                    props.addOption(option);
                    document.querySelector('#hello').value = '';
                    document.querySelector('#add').disabled = true;
                } }
            >
                <input 
                className="add-option__input"
                type="text" 
                id="hello"
                name="option" 
                onChange={props.inputHandling}
            />

                <button 
                    disabled = {true} 
                    id="add"
                    className="button">ADD OPTION
                </button>
            </form>
             
            <h3 className="add-option-error"> {props.err} </h3>

        </div>

        );
    }

    export default AddOption;