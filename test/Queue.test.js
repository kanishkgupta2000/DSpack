const ds=require('../index');
const {Queue}=ds;
console.log("test for queue");
var objq=Queue();
objq.enqueue(4);
objq.enqueue(3);
objq.enqueue(2);
objq.enqueue(1);
objq.enqueue(0);
console.log(objq.printQueue());
objq.dequeue();
console.log(objq.front());
console.log(objq._items);