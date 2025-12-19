var person = {
    name: "sara",
    age: 25,
    welcome:function(){
        console.log("welcome" +this.name)
    }
}
person.welcome()
console.log(person.name)
person.age = 30
console.log(person)
person.major = "CS"
console.log(person)
delete person.age
console.log(person)
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))
var p1 = {}
Object.assign(p1,person,{job:"engineer"})
console.log(p1)

function Person(name,age){
    this.name = name
    this.age = age

}
let p2 = new Person("Ali",28)
let p3 = new Person("menna",20)
let a = new Array(1,3,5)
console.log(Array.prototype)

function Animal(name){
    this.name = name
}

Animal.prototype.speak = function(){
    console.log(this.name + "sound")
}
let obj = new Animal("cat")
obj.speak()

function Dog(name){
    Animal.call(this.name)

}

Dog.prototype = Object.create(Animal.prototype)
let d = new Dog("puppy")
d.speak()

class Animal1{
    constructor(name){
        this.name = name

    }
    speak(){
       console.log(this.name + "" +"sound") 
    }
}
class Dog1 extends Animal1{
    constructor(name,breed){
        super(name)
        this.breed = breed
    }
    speak(){
         console.log(this.name + "" +"sound")
    }
    getINFO(){
        console.log(this.name + "" +"breed")
    }

    }

let obj2 = new Animal1("cat")
let d2 = new Dog1("puppy","breed")
obj2.speak()
d2.speak()
d2.getINFO()


let str = JSON.stringify(person)
console.log(str)
let obj5 = JSON.parse(str)
console.log(obj5)


console.log("task1")

setTimeout(function(){
    console.log("task2")
    
},3000)
console.log("task3")
