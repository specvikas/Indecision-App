class IndecisionApp extends React.Component{
 
    constructor(props){
        
        super(props);

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handleInput = this.handleInput.bind(this);

        this.state = {
        
            option : [],
            error : undefined
        };

    }

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

    handleDeleteOptions(){
        
        this.setState(() => {
            return {
                option : [],
                error : undefined
            };
        });

    }

    handleDeleteOption(optionToRemove){
        this.setState((prevState) => ({
                option : prevState.option.filter((option) => { return optionToRemove !== option; })   }));
    }

    handlePick(){
      
        this.setState(() => {
            const randomNum = Math.floor(Math.random()* this.state.option.length);
            alert(this.state.option[randomNum]);
            return {
                error : undefined
            };
        });

    }

    handleAddOption(optionToAdd){

       if(this.state.option.indexOf(optionToAdd.toUpperCase()) > -1){
            this.setState(() => ({ error : 'This option already exists ! Try a different One !!' }));
        }
        else{
            this.setState((prevState) => ({ option : prevState.option.concat([optionToAdd.toUpperCase()])   }));
        }
    }

    handleInput(){

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

    render(){

        const subTitle = 'Put your life in the hands of a Computer !!';
        
        return(
            
            <div>
                <Header subtitle={subTitle} />
               
                <Action 
                    hasOptions = {this.state.option.length > 0}
                    pick = {this.handlePick}
                />

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

        );
    }
}

const Header = (props) => {
    return (   
        <div>
             <h1>{props.title}</h1>
             {props.subtitle && <h2>{props.subtitle}</h2>}
         </div>

     );
};

    Header.defaultProps = {
    title : 'Indecision App !'
    };

const Action = (props) => {
     
    return (
            
        <div>
            <button 
                disabled = {!props.hasOptions}
                onClick={props.pick}  
            >
                What should I do ?
            </button>
        </div>

    );
};

const Options = (props) => {
    return(
           
        <div>
             <button
                 onClick={props.handleDeleteOptions} 
                 disabled = {!props.hasOptions }
             >
                 RemoveAll
             </button>
            { props.yourOptions.length === 0 && <p>Please add an option to get started !</p> }
            { props.yourOptions.length !== 0 && <h4>Here are your options.....</h4> } 
            {
                props.yourOptions.map(item => <Option key={item} optionText={item} handleDeleteOption={props.handleDeleteOption}/>)                                                                                                                                                                                              
            }

         </div>

     );
};

const Option = (props) => {
    return(
            <h3>{props.optionText}&nbsp;&nbsp;&nbsp;<button onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }
            }>Remove</button></h3>
    );
};

class AddOption extends React.Component {

    constructor(props){
        
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
 
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        this.props.addOption(option);
        document.querySelector('#hello').value = '';
        document.querySelector('#add').disabled = true;
    }

    render(){
        
        return(
            
            <form 
                onSubmit={this.handleSubmit}>
                <input type="text" 
                id="hello"
                name="option" 
                onChange={this.props.inputHandling}
            />

                <button 
                    disabled = {true} 
                    id="add">ADD OPTION
                </button>

                <h3> {this.props.err} </h3>

            </form>

        );
    }
}

const appRoot = document.getElementById('area');

ReactDOM.render(<IndecisionApp />, appRoot);