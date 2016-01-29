import MyConstants from "./MyConstants";
console.log(MyConstants.SOME_CONSTANT);

import MyObject from "./MyObject";

var instance:MyObject = new MyObject("joe");
instance.walk();
console.log(instance);
console.log(instance.toString());


import * as _ from "underscore";

var result = _.map( ["a", "b","c"], function (item){
  return item.toUpperCase();
} )

console.log(result);


if ( true ){
  let myVar:string = "Hello from index.ts";
  console.log( myVar );
}
