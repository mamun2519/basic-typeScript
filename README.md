
# My Basic TypeScript Documentation
there Are All Kinds of typeScript types.

## Bulit in type
- number , string , boolean , null , undifine
Example:

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
 **Explore:** Eker odik type use korte bebohar hoy..
 
 Example:
```javascript
 let userId: number| string;

 userId = 203

 const userhendeler = (userId: number| boolean): void =>{
       console.log(userId)
 }

 userhendeler(708)

 ```


##  Array data type


 ```javascript
  let userAddress: string[];
 userAddress= ["chitagong" , "dhaka" , "commilla"]

 let userIdNo : number[] = [33, 55, 89]

 let address : Array<string> = ['chittagong']


## Arrray Multiple type
let userInfo : (number| string)[];
userInfo = [33 , "mamun", 444, 'nadim']

let moreUserInfo :(boolean|string)[] = [true, "33"]
```

## Typle data type
**Explore:** array key , value niye kaj korte eti use kora hoy 

```javascript
let users:[number , string];
users = [1 , "mamun" ,]

let moreUser:[boolean , string] = [true , "mamun"]

```

## Enum data type
**Explore:** ei data type likte hole enam dite hobe. er vitor veribale dite hobe ja index onusare man pabe


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
**Explore:** je veribale er type declar kora hoy na etike any type bole

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
**Explore:** kuno varivale use korte na caile 
```javascript
const myInfromation = (name:string , id:(string| number) , subject?: string): void =>{
      console.log(name, id)
}
myInfromation("mamun" , 444 , )

```

## custome data type /Aliasis type
**Explore:** custome babe type create kora 
```javascript
type Alluser = {name: string , id: number}
let user5: Alluser = {name: 'mamun' , id: 44}
let user6 : Alluser = {name: "nadim" , id: 56}

// Onk somoy verible er man ki hobe ta janty pari . sei jonno etike ekti varible reke dite pari

type RequreType = "GET" | "POST"

const userPOST = (user: RequreType): void => {
      console.log(user)
}
userPOST("POST")

```

##  Class and object 

**Example** 
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
**Explore:** Inhertance Er Orddeshho Holo ekti clss er Item onno cls e niye ana.
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

// inhertance korte hole extends use korte hobe ---------
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
**Explore:** etir use korar reseon hocce etir vetore method ki kaj korbe ta na dekano.
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

## Encapsulation and access modifiers
- 4 key principles of Object Oriented Programming (OOP): Inheritance, Abstraction, Encapsulation, Polymorphism.
- Encapsulation helps us to manage the visibility of class members.
- Access modifiers: public, private, protected, readonly

**explore:** eti hocce object er modde member thake. constructor , method thake. egula hocce je veribale e nam deoa ace tar method

## access Modifiers 
**explore:** etir kaj hocce encapsulation er member golo ke kew Access , read , modifay korte parbe kina ta manten kore

- access Modifies 4 rokomer
public, private, protected, readOnly

```javascript


// Public ---------
class User3 {
      public name: string
      public age: number

      constructor(name: string , age: number){
            this.name = name
            this.age = age
      }
      display(): void{
            console.log("hey Public")
      }
}

let publicUser = new User3("mamun" , 500)

// note: public gulake bahir theke access korte parbe modifay korte parbe 
publicUser.name = "Juboraj Islam"


// protected  --------------
class User4 {
      protected name: string
      protected age: number

      constructor(name: string , age: number){
            this.name = name
            this.age = age
      }
      display(): void{
            console.log("hey Public")
      }
}

let protectedUser = new User4("mamun" , 500)
protectedUser.display()
// note: protected membar gulake inherits korte parbe kinto bahir thekea access modifay korte parbe na


// private -----------------
class User5 {
      private name: string
      private age: number

      constructor(name: string ,age: number){
            this.name= name
            this.age = age
      }

      display():void{
            console.log("helllow")
      }

      // private member ke bahir theke access korar jonno ja korte hobe
      setAge(age: number):void{
            // Orthat private membar e arkti public method er modde rheke bahir theke call korbo
            this.age = age
      }

      // modifay korar jonno method thake retun kore debo 
      getAge(): number{
            return this.age
      }
}

let privateUser = new User5("Mamun", 55)
privateUser.display()
privateUser.setAge(50)
privateUser.getAge()
console.log(privateUser.getAge())
// note: private member gulo ke bahir theke access modifay kora jabe na. inherirt kora jabe na


// readonly ........................
class RedOnly {
      readonly name: string
      readonly age: number

      constructor(name: string , age :number) {
            this.name = name
            this.age = number
      }

      display():void{
            console.log("helllow")
      }
}

let redOnly = new RedOnly("name" , 50)

// note: readonly te access korte parbo kinto modifay korte parbo na 


```

## Type Aliases 
**ExPlore:** etir kaj hocce type declore kore tar vitor e type diye onno verible e se type use kora.

```javascript 


type userName = string | number
type userType = {name: string , id: number}

let ourUsr: userName = "Mamun"

const userHendelers = (details: userType): void=>{
      console.log(details)

}

userHendelers({name: "Mamun" , id: 55})

```

## Funcation Signature

**Explore:** etir maddome ekti funcation er statement set kore diye  sei onujai kaj kora.

```javascript
t orderInfo: (price: number , name: number) => number;

orderInfo =(p:number , n: number) =>{
      return p + n
}

orderInfo(400 , 5)

```

## InterFace
**Explore:** Interface hocce kuno varible, object, funcation er poggaming e use korbo setar stracture age theke create kora 

Example:
```javascript

interface dusineInfo {
      width: number,
      hight: number
}

const desinePatten = (info: dusineInfo): void =>{
      let newWidth = info.width
      let newHight = info.hight
     
}

const des = {
      width: 50,
      hight: 60
}
desinePatten(des)

// interFace use Class -------------
interface Player {
      name: string,
      age: number,
      country: string

      play():void
}

class  Play implements Player{
      // note: Class e interFace use korle implements dite hobe 
      name: string 
      age: number
      country: string

      constructor(name: string , age: number , country:string){
            this.name = name;
            this.age = age;
            this.country = country
      }

      play(): void {
            console.log("helllow")
      }
}

let morePlayer = new Play("mamun" , 44 , "bangladesh")

```

## Generics 
**Example** -  judi funcation er peramiter hisabe object nei , tahole funcation er bahir theke se object er value read/access kora jay na. object er value access korar jonno generics use kore pari.
- Ortthat user je data dicce funcation sei data ki recive korse jane na.

Example:
```javascript

const addid = (obj: object) => {
      let id:number = Math.floor(Math.random() * 100)
      return {...obj , id}
}

let UserId = addid({
      names: "Mamun",
      age: 33
})

// je peramiter dicce ta read korar jonno peramiter er age <T> debo. and peramiter er type debo se T
// example:
const addid2 = <T> (obj: T) => {
      let id:number = Math.floor(Math.random() * 100)
      return {...obj , id}
}

let UserId2 = addid2({
      names: "Mamun",
      age: 33
})
UserId2.age = 50

// note: ekn user ja peramiter patabe tai ei funcation recive korbe. judi specific otoba api ekta object patate cay and funtion setike cahara r kisu recive na tar jonno ja korte hobe 
// example: 
const addid3 = <T extends Object> (obj: T) => {
      let id:number = Math.floor(Math.random() * 100)
      return {...obj , id}
}

let UserId3 = addid3({
      name: "Mamun"
})

// caile type o bosiye dite pari 


// MoreExample: ekhane data ki type er asbe janina tai generic vabe bosiye debo
interface APIresponse <T> {
      status: number
      type: string
      data: T
}

const response: APIresponse <object> ={
      status: 200,
      type: "Good",
      data: {
            name: "text",
            someThing: 300
      }

} 



```
