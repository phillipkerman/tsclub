class MyObject{

      private name:string;

      constructor(p_name:string="no name"){
        this.name = p_name;
        console.log("You made an object with name " + this.name);
      }

      walk():void{
        console.log(this.name + " is walking");
      }

      toString():string{
        return this.name + " is my name;"
      }

}
export default MyObject;
