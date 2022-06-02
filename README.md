
# Basic typeScript
there Are All Kinds of typeScript types.

## Bulit in type
```javascript
let idNo: number = 590
 let myNumber:number = 340
 myNumber = 790
 console.log(myNumber)


 let myName:string = "Mohammad Mamun";
 myName= "Juboraj Islam mamun"

 let isAdmin: boolean = true

```
 ## Uninon Data type
 #explore: Eker odik type use korte bebohar hoy..
 
```javascript
 let userId: number| string;

 userId = 203

 const userhendeler = (userId: number| boolean): void =>{
       console.log(userId)
 }

 userhendeler(708)

 ```


##  Array data type
 let userAddress: string[];
 userAddress= ["chitagong" , "dhaka" , "commilla"]

 ```javascript

 let userIdNo : number[] = [33, 55, 89]

 let address : Array<string> = ['chittagong']


## Arrray Multiple type
let userInfo : (number| string)[];
userInfo = [33 , "mamun", 444, 'nadim']

let moreUserInfo :(boolean|string)[] = [true, "33"]
```

## Typle data type
#Explore: array key , value niye kaj korte eti use kora hoy 
```javascript
let users:[number , string];
users = [1 , "mamun" ,]

let moreUser:[boolean , string] = [true , "mamun"]
```

## Enum data type
#explore: ei data type likte hole enam dite hobe. er vitor veribale dite hobe ja index onusare man pabe


```javascript


enum RequestType {
      readData,
      saveData,
      deleteData,
}

enum RequestType2 {
      readData= "READ_Daata",
      saveData= "SAVE_data",
      deleteData= "DELETE_data"
}

```
## Any Type
#je veribale er type declar kora hoy na etike any type bole
```javascript

let userName;
let profile;
```
## object type
```javascript
let user: {userName: string , id: number}
user = {userName: "Mamun" , id: 344}

let moreUser1: {userName: string , id:(number| string)}
moreUser1 = {userName: "Mamuun" , id: "56"}

let moreUser2 : {usrname: (string| boolean) , id: (number| string)} = {usrname: true , id: "555"}

```
## array of object
```javascript
let id: object[];

id = [{name: "mamun"}]
```
## Optonal type
#explore kuno varivale use korte na caile 
```javascript
const myInfromation = (name:string , id:(string| number) , subject?: string): void =>{
      console.log(name, id)
}

myInfromation("mamun" , 444 , )

## custome data type
#explore: custome babe type create kora 

type Alluser = {name: string , id: number}

let user5: Alluser = {name: 'mamun' , id: 44}

let user6 : Alluser = {name: "nadim" , id: 56}


Onk somoy verible er man ki hobe ta janty pari . sei jonno etike ekti varible reke dite pari

type RequreType = "GET" | "POST"

const userPOST = (user: RequreType): void => {
      console.log(user)
}
userPOST("POST")

```

##  Class and object 

example: 
```javascript
class MyDescription {
      // propertis , constructor , methods 
      usersName: string;
      age: number;

      constructor(usersName: string, age: number) {
            this.usersName = usersName
            this.age = age


      }
      // object method 
      display(): void {
            console.log(`User Name ${this.usersName}, userAge: ${this.age}`)
      }

}

let user1 = new MyDescription("Md Mamun", 33)

```


##  Inhertance
#Explore: Inhertance Er Orddeshho Holo ekti clss er Item onno cls e niye ana.
Ortthat ekti class er common method gulo onno cls e use kora

```javascript

class MyBio {
      name: string;
      student: boolean;
      roll: number;

      constructor(name: string, student: boolean, roll: number) {
            this.name = name
            this.student = student
            this.roll = roll
      }

      display(): void {
            console.log(`name: ${this.name} , student: ${this.student} , roll: ${this.roll}`)
      }

}

// inhertance korte hole extends use korte hobe 
class YourBio extends MyBio {
      studentId: number

      constructor(name: string, student: boolean, roll: number, studentId: number) {
            // jegula ager calss e use hoise tader super er modde rakte hobe 
            super(name, student, roll);
            this.studentId = studentId

      }

      display(): void {
            console.log(`name: ${this.name} , student: ${this.student} , roll: ${this.roll}, Id: ${this.studentId}`)
      }

}

let yourBio1 = new YourBio("mamun", true, 45, 44)
console.log(yourBio1)

```

## Abstraction class 
#Explore: etir use korar reseon hocce etir vetore method ki kaj korbe ta na dekano.
Ortthat eer method niye je kew nijer moto use korte parbe

Example:
```javascript

abstract class User {
      name: string

      constructor(name: string) {
            this.name = name
      }

      // ekhane method tir moddee kuno kaj kora hocce na 
      abstract display(): void

}

class Studnet extends User {
      id: number

      constructor(name: string, id: number) {
            super(name)
            this.id = id
      }

      // ekhane method take niye kaj kora hocce 
      display(): void {
            console.log(`Name: ${this.name} , Id: ${this.id}`)
      }


}

let details = new Studnet("mamun", 556)

```

