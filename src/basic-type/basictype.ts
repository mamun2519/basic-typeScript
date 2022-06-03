import { access } from "fs";
import { type } from "os";
import { clearScreenDown } from "readline";
import { inherits } from "util";
// 1, Build in type .....................



let idNo: number = 590
let myNumber: number = 340
myNumber = 790
console.log(myNumber)


let myName: string = "Mohammad Mamun";
myName = "Juboraj Islam mamun"

let isAdmin: boolean = true

/*  2, Uninon Data type------------------------- 
 explore: Eker odik type use korte bebohar hoy  */
let userId: number | string;

userId = 203

const userhendeler = (userId: number | boolean): void => {
      console.log(userId)
}

userhendeler(708)

/*  3, Array data type-------------------------
 explore: array modde kon dorner type hobe ta bole dite hobe  */

let userAddress: string[];
userAddress = ["chitagong", "dhaka", "commilla"]

let userIdNo: number[] = [33, 55, 89]

let address: Array<string> = ['chittagong']



//  3,1 Arrray Multiple type -----------
let userInfo: (number | string)[];
userInfo = [33, "mamun", 444, 'nadim']

let moreUserInfo: (boolean | string)[] = [true, "33"]



/* 4, Typle data type -----------------
explore: array key , value niye kaj korte eti use kora hoy  */
let users: [number, string];
users = [1, "mamun",]

let moreUser: [boolean, string] = [true, "mamun"]


/* 5, Enum data type ----------------------
explore: ei data type likte hole enam dite hobe. er vitor veribale dite hobe ja indeex onusare man pabe  */

enum RequestType {
      readData,
      saveData,
      deleteData,
}

enum RequestType2 {
      readData = "READ_Daata",
      saveData = "SAVE_data",
      deleteData = "DELETE_data"
}


/* 6, Any Type
explore: je veribale er type declar kora hoy na etike any type bole */

let userName;
let profile;


// 7, object type --------------
let user: { userName: string, id: number }
user = { userName: "Mamun", id: 344 }

let moreUser1: { userName: string, id: (number | string) }
moreUser1 = { userName: "Mamuun", id: "56" }

let moreUser2: { usrname: (string | boolean), id: (number | string) } = { usrname: true, id: "555" }


// 7-2, array of object --------------
let id: object[];

id = [{ name: "mamun" }]



/* 7-3, Optonal type --------------------
explore kuno varivale use korte na caile  */
const myInfromation = (name: string, id: (string | number), subject?: string): void => {
      console.log(name, id)
}

myInfromation("mamun", 444,)


/* 8, custome data type 
explore: custome babe type create kora */

type Alluser = { name: string, id: number }

let user5: Alluser = { name: 'mamun', id: 44 }

let user6: Alluser = { name: "nadim", id: 56 }


/* 8-1, Onk somoy verible er man ki hobe ta janty pari . sei jonno etike ekti varible reke dite pari */

type RequreType = "GET" | "POST"

const userPOST = (user: RequreType): void => {
      console.log(user)
}
userPOST("POST")


// 9, Class and object 
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

// more example  
class MyBook {
      bookName: string;
      subject: string;
      bookPage: number;

      constructor(bookName: string, subject: string, bookPage: number) {
            this.bookName = bookName
            this.subject = subject
            this.bookPage = bookPage

      }

      display(): void {
            console.log(`Boook Name: ${this.bookName} , subject: ${this.subject}, bookPage: ${this.bookPage}`)
      }
}

let user2 = new MyBook("English", "bangla", 333)


/* 10, Inhertance-------------
explore: Inhertance Er Orddeshho Holo ekti clss er Item onno cls e niye ana.
Ortthat ekti class er common method gulo onno cls e use kora  */

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

// moreExample:
class OurBio extends YourBio {
      distric: string

      constructor(name: string, student: boolean, roll: number, studentId: number, distric: string) {
            // jegula ager calss e use hoise tader super er modde rakte hobe 
            super(name, student, roll, studentId);
            this.distric = distric

      }

      display(): void {
            console.log(`name: ${this.name} , student: ${this.student} , roll: ${this.roll}, Id: ${this.studentId} , Destric: ${this.distric}`)
      }

}

let OurBio1 = new OurBio("Mamun", false, 33, 455, "chittagong")



/* 12, Abstraction class 
explore: etir use korar reseon hocce etir vetore method ki kaj korbe ta na dekano.
Ortthat eer method niye je kew nijer moto use korte parbe  */

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

/* 13, Encapsulation and access modifiers
4 key principles of Object Oriented Programming (OOP): Inheritance, Abstraction, Encapsulation, Polymorphism.

Encapsulation helps us to manage the visibility of class members.

Access modifiers: public, private, protected, readonly
 */

// explore: eti hocce object er modde member thake. constructor , method thake. egula hocce je veribale e nam deoa ace tar method

// 14, access Modifiers 
// explore: etir kaj hocce encapsulation er member golo ke kew Access , read , modifay korte parbe kina ta manten kore

/* access Modifies 4 rokomer
public, private, protected, readOnly */

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


// 15 , Type Aliases 
// explore: etir kaj hocce type declore kore tar vitor e type diye onno verible e se type use kora 

type userName = string | number
type userType = {name: string , id: number}

let ourUsr: userName = "Mamun"

const userHendelers = (details: userType): void=>{
      console.log(details)

}

userHendelers({name: "Mamun" , id: 55})

/* 16, Funcation Signature
explore: etir maddome ekti funcation er statement set kore diye  sei onujai kaj kora. */

let orderInfo: (price: number , name: number) => number;

orderInfo =(p:number , n: number) =>{
      return p + n
}

orderInfo(400 , 5)