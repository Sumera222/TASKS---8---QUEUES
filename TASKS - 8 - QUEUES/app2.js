/*Implement following methods. Don’t forget to increase and decrease the size 
when you add or remove an element from the queue.
enqueue: a method through that you can add a value to the queue
peek: a method through which you can get the value on the top of queue
dequeue: a method through which you can remove the first element of the queue */

class Queue {
    constructor() {
        this.items = [];
    }

    // adding element to the queue
    enqueue(element) {
        return this.items.push(element);
    }

    // removing 1st element from the queue
    dequeue() {
        if (this.items.length > 0) {
            return this.items.shift();
        } else
            return false;
    }
     //getting the value on the top
    peek() {
        return this.items[this.items.length - 1];
    }

    printQueue() {

        for (let s = 0; s < this.items.length; s++) {
            console.log(this.items[s]);
        }
    }
}


let queue = new Queue();
queue.enqueue("Blue");
queue.enqueue("Green");
queue.enqueue(44);
queue.enqueue("Pakistan");
console.log(queue.items);

queue.dequeue();
console.log(queue.items);

console.log(queue.peek());