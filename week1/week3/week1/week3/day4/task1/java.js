function Human (name, surname, age, isMale ){
    this.name=name;
    this.surname=surname;
    this.age=age;
    this.isMale=isMale;
    this.getFullname=function(){
 return`${this.surname[0].toUpperCase()}.${this.name.toUpperCase()}`
    }
}

function Employer (department,experienceYear,salary=0){
    this.department=department;
    this.experienceYear=experienceYear;
this.salary=salary;
this.genereateID=function(){
    this.id=`${this.department.slice(0,2)}{(Math.random()*10000).toFixed()}`
    return this.id
}
}
let Gunel = new Human ("Gunel", "Imanova",22)
Object.setPrototypeOf(Gunel,new Employer("It",6,1000))
let Nilay = new Human("Nilay","Haciyeva", 18)
Object.setPrototypeOf(Nilay,new Employer("Programming",7,2000))
let Nuray  = new Human("Nuray","Adilova",20)
Object.setPrototypeOf( Nuray,new Employer("web Proggraming",8,2000))
let Gunay = new Human("Gunay","Nesirova",31)
Object.setPrototypeOf( Gunay,new Employer("It",9,1500))
