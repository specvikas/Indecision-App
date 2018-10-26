//JSX - Javascript XML

const app = {
    title : 'Indecision App',
    subtitle : 'This app will help you in making your decisions !!',
    options : []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    let flag = true;

        if(option.length === 0)
        {
            flag = false;
            document.querySelector('#button').disabled = true;
        }
        else
        {
            for(let item of app.options)
            {
                if(item === option)
                {
                    flag = false;
                }
            }
        }
        if(flag)
        {
            app.options.push(option);

            e.target.elements.option.value = '';

            document.querySelector('#button').disabled = true;
    
            reRender();
        } 
};

const removeAll =() => {
            app.options = [];        
            reRender();
};

const makeDecision = () => {
    const randomNumber = Math.floor(Math.random()* app.options.length);
    const option = app.options[randomNumber];
    alert(option);
};

const check = () => {
    let input = document.querySelector('#optionId');
    let button = document.querySelector('#button');  
    
    if(input.value.length > 0 )
    {
        button.disabled = false;
        reRender();
    }
    else if(input.value.length === 0)
    {
        button.disabled = true;
        reRender();
    } 
    
};

const appRoot = document.getElementById('area');

const reRender = () => {

    const template = (
        <div>
            <h1> {app.title + ' !!'} </h1>

            {app.subtitle && <p> { app.subtitle } </p>}

            <p>{
                (app.options && app.options.length>0)
                ? 'Here are your Options !!'
                : 'No Options are available for you...'
            }
            </p>
            
            <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do ?? </button>

            <button id="remove" disabled={app.options.length === 0} onClick = {removeAll}>Remove All</button>

            <ol>
            {
                app.options.map((opt) => {
                    return <li key={opt}>{opt}</li>
                })
            }
            </ol>

            <form onSubmit = {onFormSubmit}>
                <input type="text" id="optionId" onChange = {check}  name="option" />
                <button disabled="true" id="button">Add Option</button>
            </form>

        </div>);
        
        ReactDOM.render(template,appRoot);
};

reRender();