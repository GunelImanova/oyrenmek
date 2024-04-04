class device {
    constructor(Brand,Model,ScreenSize,BatteryLevel,Price,SalePrice, DiscountPercentage,Salecount){

    this.Brand=Brand;
    this.Model=Model;
    this.ScreenSize=ScreenSize;
    this.BatteryLevel=BatteryLevel;
    this.Price=Price;
    this.SalePrice=SalePrice;
    this.DiscountPercentage=DiscountPercentage;
    this.Salecount=Salecount;
    if(SalePrice>Price){
        if ( DiscountPercentage>0){
            this.SalePrice=SalePrice-((SalePrice*DiscountPercentage)/100)
        
        }
    }
}
calculateprofit(){
    let discount=this.SalePrice-((this.SalePrice*this.DiscountPercentage)/100)
    if (discount>Price){
        (discount-Price)*Salecount
    }else{
    SalePrice-Price
    }
}
DisplayBatteryLevel(){
    return `${this.BatteryLevel}qeder batery var`
}
DisplayDetails(){
    return`${this.ScreenSize}${this.Model} ${this.Brand}`

}
}
class Phone extends device {
    constructor(Brand,Model,ScreenSize,BatteryLevel,Price,SalePrice, DiscountPercentage,Salecount,calculateprofit,DisplayBatteryLevel,DisplayDetails,isSmart=false){
        super(Brand,Model,ScreenSize,BatteryLevel,Price,SalePrice, DiscountPercentage,Salecount,calculateprofit,DisplayBatteryLevel,DisplayDetails,isSmart)
        this.isSmart=isSmart
    }
}
class Laptop extends device{
    constructor(Brand,Model,ScreenSize,BatteryLevel,Price,SalePrice, DiscountPercentage,Salecount,calculateprofit,DisplayBatteryLevel,DisplayDetails,isRGBkeyboard){
    super(Brand,Model,ScreenSize,BatteryLevel,Price,SalePrice, DiscountPercentage,Salecount,calculateprofit,DisplayBatteryLevel,DisplayDetails,isRGBkeyboard)
    this.isRGBkeyboard=isRGBkeyboard
}
}
let Phone1=new Phone("telefon","blackberry","300px",50,90,60,5,100)
let Phone2=new Phone("telefon","xiomi","350px",40,90,80,7,60)
let Phone3=new Phone("telefon","nokio","250px",20,90,40,5,10)
let Laptop1=new Laptop("laptop","lenevo","500",70,80,60,100,5)
let Laptop2=new Laptop("laptop","acer","500",30,80,90,100,8)

let  phones=[Phone1,Phone2,Phone3,Laptop1,Laptop2]

function FilterbyPrice (arr,Price){
    let FilterbyPrice=phones.filter((phones)=>(phones.BatteryLevel.Price<Price))
    return FilterbyPrice
}
console.log(FilterbyPrice(phones,150))

function FilterbyName(arr,phone){
 let count =0
 arr.map((el)=>{
    console.log(el);
    if(el.model===phone){
        count++
    }
 })  
 return count;
}
console.log(FilterbyName(phones,"phone"))