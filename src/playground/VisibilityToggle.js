
const switchData = () => {

    visibility =!visibility;
    reRender();
};

let visibility=false;

let paragraphData = '';
 
const appRoot = document.getElementById('area');

const reRender = () => {
    
const template = (

    <div>
        <h1>Visibility Toggle !!</h1>

        <button onClick={switchData}>{visibility?'Hide Details':'Show Details'}</button>
        
            {visibility && (
                <div>
                <p>This is the data hidden by the button !!</p>
                </div>
            )}
    </div>
    
    );

    ReactDOM.render(template, appRoot);
};

reRender();