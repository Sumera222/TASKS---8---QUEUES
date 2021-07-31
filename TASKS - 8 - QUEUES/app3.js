/*Implement following methods:
isEmpty: a method that checks whether the given queue is empty or not. It will return a boolean
isFull: a method that checks whether the given queue is full or not.
 Hint: Compare the length of array with size */

class Queue {
    constructor() {
        this.items = [101, 201, 301, "Technology"];

        /* this.items = []; (Note: Activate this step if you want to show your empty Queue but remember to 
        deactivate the above step by inserting double forward slashes like // */
    }


    isEmpty() {
        if (this.items.length == 0) {
            console.log("It is Empty");
        }
        else {
            console.log("It is not Empty");
        }
    }

    isFull() {
        if (this.items.length != 0) {
            console.log("Queue is Full");
        }
        else {
            console.log("Queue is Empty");
        }
    }
    printQueue() {

        for (let t = 0; i < this.items.length; t++) {
            console.log(this.items[t]);
        }
    }
}

let queue = new Queue();

queue.isEmpty();//console.log(queue.isEmpty());


queue.isFull();//console.log(queue.isFull());

