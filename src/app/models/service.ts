export class Service {
    public image : String;
    public name : String;
    constructor( image : String, name : String ){
        this.image = image;
        this.name = name;
    }
    public getImage(){
        return this.image;
    }
    public setImage(image : String){
        this.image = image;
    }
    public getName(){
        return this.name;
    }
    public setName(name: String){
        this.name = name;
    }
}