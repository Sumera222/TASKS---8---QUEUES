/*Implement following methods:
clear: a method that clears queue
toString: a method that converts all members of queue into string */

class Queue {
    constructor() {
        this.items = [101, 202, 3003, "English"];
    }

    clear() {
        this.items = []
        this.size = 0;
        console.log('Queue is cleared!')
        return this.items;
    }

    toStringMethod() {
        let str;
        str = this.items.toString();
        console.log(str);
    }
    printQueue() {

        for (let w = 0; w < this.items.length; w++) {
            console.log(this.items[w]);
        }
    }
}

let queue = new Queue();
queue.toStringMethod();

queue.clear();
console.log(queue.items);