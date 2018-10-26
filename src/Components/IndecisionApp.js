import React from 'react';
import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component{
 
    state = {
        option : [],
        error : undefined,
        selectedOption : undefined
    };

    componentDidMount(){
        try {
            const json = localStorage.getItem('option');
            const options = JSON.parse(json);

            if(options){
                this.setState(() => ({option : options}));
            }    
        } catch (error) {
            
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.option.length !== this.state.option.length){
            const json = JSON.stringify(this.state.option);
            localStorage.setItem('option',json); 
        }
    }

    handleDeleteOptions = () => {
        
        this.setState(() => {
            return {
                option : [],
                error : undefined
            };
        });

    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => {
            return {
                option : prevState.option.filter((option) => { return optionToRemove !== option; }),
                error : undefined
            };
        });
    }

    handlePick = () => {
      
        this.setState(() => {
            const randomNum = Math.floor(Math.random()* this.state.option.length);
            //alert(this.state.option[randomNum]);
            return {
                error : undefined,
                selectedOption : this.state.option[randomNum]
            };
        });

    }

    handleAddOption = (optionToAdd) => {

       if(this.state.option.indexOf(optionToAdd.toUpperCase()) > -1){
            this.setState(() => ({ error : 'This option already exists ! Try a different One !!' }));
        }
        else{
            this.setState((prevState) => ({ option : prevState.option.concat([optionToAdd.toUpperCase()])   }));
        }
    }

    handleInput = () => {

        const input = document.querySelector('#hello');
        
        if(input.value.length > 0 && input.value.trim() !=='')
        {
            this.setState(() => ({   error : undefined    }));   

            document.querySelector('#add').disabled = false;
        }

        else {
                document.querySelector('#add').disabled = true;
        }

    }

    handleSelectedOption = () => {    
        this.setState(() => ({  selectedOption : undefined   }));
    }

    render(){

        const subTitle = 'Put your life in the hands of a Computer !!';
        
        return(
            
            <div>
                <Header subtitle={subTitle} />

                <div className="container">
                    <Action 
                        hasOptions = {this.state.option.length > 0}
                        pick = {this.handlePick}
                    />

                    <div className="widget">
                        <Options
                            yourOptions={this.state.option}
                            hasOptions = {this.state.option.length > 0}
                            handleDeleteOptions = {this.handleDeleteOptions}
                            handleDeleteOption = {this.handleDeleteOption}
                        />

                        <AddOption 
                            addOption = {this.handleAddOption}
                            inputHandling = {this.handleInput}
                            err = {this.state.error} 
                        />

                    </div>
                </div>
                
                <OptionModal
                    selectedOption = {this.state.selectedOption}
                    handleSelectedOption = {this.handleSelectedOption}
                />

            </div>

        );
    }
}