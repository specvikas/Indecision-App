
let count = 0;

const addOne = () => {
    count++;
    renderAgain();
    console.log("Addition Button Clicked !!");
};


const subtractOne = () => {
    count--;
    renderAgain();
    console.log("Subtraction Button Clicked !!");
};


const reset = () => {
    count=0;
    renderAgain();
    console.log("Reset Button Clicked !!");
};

const appRoot = document.getElementById('area');

const renderAgain = () => {

    const templateTwo = (
        <div>
            <h1>
            Count : {count}
            </h1>
    
            <button  onClick = {addOne}>+1</button>
    
            <button  onClick = {subtractOne}>-1</button>
            
            <button  onClick = {reset}>Reset</button>
    
        </div>
    );
    
    ReactDOM.render(templateTwo, appRoot); 

};

renderAgain();