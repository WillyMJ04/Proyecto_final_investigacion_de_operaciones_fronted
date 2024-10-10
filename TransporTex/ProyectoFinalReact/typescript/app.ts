let variable = "hello"

variable = "hi"

let age = 18

let ageWithType : number;

ageWithType = 18;

let testString: string

testString = "hello"

let testBoolean: boolean
testBoolean = true

let testStringOrNumber: string | number
testStringOrNumber = 10
testStringOrNumber = "string"

let names = ["john", "jane","tom"]

names.push("mike")

let testNumberArray : number[]

testNumberArray = [12,55,23]

let testStringOrNumberArray: (string|number)[]
testStringOrNumberArray = [1,"two",3]

//Objects

let user = {
    username:"john",
    age:22,
    isAdmin:false
}

user.username= "jane"
user.age= 29
user.isAdmin=true

let userObj :{
username:string,
age:number,
isAdmin:boolean, 
};

userObj ={
    username:"john",
    age:23,
    isAdmin:true,
    //phone:"123456"
}

let userObj2 :{
    username:string;
    age:number;
    isAdmin:boolean;
    phone?:string 
    };

    userObj2={
        username:"jose",
        age:22,
        isAdmin:true,
        phone:"123456"
    }

    let testAny;


    ///fucntions

    let sayHi = ()=>{
        console.log("Hello")
    }

    let funcReturnString = ():string =>{
        console.log("hi")
        return "lama dev"
    }

    let multiple = (num:number)=>{
return num * 2;
    }