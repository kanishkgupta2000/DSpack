const ds=require('../index');
const {Stack}=ds;
console.log("test for stack");
var objst=Stack();
objst.push(10); 
objst.push(20); 
objst.push(30); 
console.log(objst.printStack()); 
console.log(objst.peek());   
console.log(objst.pop()); 
console.log(objst.printStack());  
console.log(objst._items);  

