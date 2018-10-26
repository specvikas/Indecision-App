class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.checkVisibility = this.checkVisibility.bind(this);
        this.state = {
            visibility : false
        };
    }

    checkVisibility(){
        this.setState((prevState) => {
            return{
                visibility : !prevState.visibility 
            };
        });
    }

    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.checkVisibility}>
                    {this.state.visibility?'Hide Details':'Show Details'}
                </button>
                { this.state.visibility && ( 
                    <div>
                    <p>Here are some Details !!</p>
                    </div>
                )} 
            </div>
        );
    }
}

const appRoot = document.getElementById('area');

ReactDOM.render(<VisibilityToggle />, appRoot);