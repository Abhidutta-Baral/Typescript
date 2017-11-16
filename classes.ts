interface userInterface{
    name:string
    age:string
    roll:string
    register();
    payVoice();
}
class user{
    name:string
    age:string
    roll:string

    constructor(name:string,age:string,roll:string){
        this.name = name
        this.age = age
        this.roll = roll
        console.log('Name'+'--' +this.name)
    }
       register(){
        console.log(this.name+ ' '+ 'is already resistered.'+'parent class')
    }
    payVoice(){
        console.log(this.name+'--'+'has paid the bill.')
    }
}
class userTwo extends user{
    id:string
    constructor(id:string,name:string,age:string,roll:string){
    super(name,age,roll)
    this.id = id;
    }
payVoice(){
    super.payVoice();
}
}
let classesObj:user = new userTwo('1','Abhi11','22','222');
classesObj.payVoice();
classesObj.register();