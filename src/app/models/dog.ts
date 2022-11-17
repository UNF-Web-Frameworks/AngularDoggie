export class Dog {
    name:string;
    breed:string;
    imageUrl:string;
    age:number;
    

    constructor(name:string,breed:string,age:number, muzzle:boolean=false, imageUrl:string='')
    {
        this.age=age;
        this.name=name;
        this.breed=breed;
        
        this.imageUrl=imageUrl;
    }
}
