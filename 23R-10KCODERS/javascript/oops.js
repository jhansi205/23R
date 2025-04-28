class cars{
    constructor(color,doors,name){
        this.color=color
        this.doors=doors
        this.name=name
    }
    start(){
        return `${this.name} is started`
    }
    break(){
        return `${this.name} is applied`
    }


}
var audi=new cars('red',4,'audi')
console.log(audi.start());
var thor=new cars("black",4,"Thor")
console.log(thor.break());
