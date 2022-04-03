class Queue {
    constructor() {
        this.element = {};
        this.head = 0;
        this.tail = 0;
    }
    enqueue(element) {
        this.element[this.tail] = this.element;
        this.tail++;
    }
    dequeue() {
        const item = this.element[this.head];
        delete this.element[this.head];
        this.head++;
        return item;
    }
    get length() {
        return this.tail - this.head;
    }
    get isEmpty() {
        return this.tail - this.head;
    }
}
let q = new Queue();
for (let i = 1; i < 7; i++) {
    q.enqueue(i);
}
console.log(q);
console.log(q.length);
while (!q.isEmpty) {
    console.log(q.dequeue);
}