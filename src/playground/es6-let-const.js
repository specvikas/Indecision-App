// const getFirstName = fullName => fullName.split(' ')[0];

// const fullName = 'Vikas Sharma';
// const firstName = getFirstName(fullName);
// console.log(firstName);

// const multiplier = {

//     numbers : [2,3,5,15,7,8],
//     multiplyBy : 2,
//     multiply(){
//         return this.numbers.map(num => num*this.multiplyBy);
//     }
// };

// console.log(multiplier.multiply());

class Person {
    constructor(name=`Anonymous`, age=0){
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        return `Hi, this is ${this.name} & I am ${this.age} years old !`;
    }

    getDescription()
    {
        return `${this.name} is ${this.age} year(s) old !!`
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();

        if(this.hasMajor()){
            description += ` Their major is in ${this.major}.`
        }

        return description;
    }
}

const me = new Student(`Vikas Sharma`,20, `Computer Science`);
console.log(me.getDescription());


const myself = new Student();
console.log(myself.getDescription());