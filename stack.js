class Stack {

    constructor() {

        this.items = [];

    }

    add(element) {

        return this.items.push(element);

    }

}



let str = new Stack();

str.add(1);

str.add(2);

str.add(4);

str.add(8);

console.log(str.items);