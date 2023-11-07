class Queue<T> {
    elements = {}
    first = 0
    last = 0
    push<T>(element){
        this.elements[this.last] = element
        this.last += 1
    }

    pop(){
        let toRemove = this.elements[this.first]
        delete this.elements[this.first]
        this.first +=1
        return toRemove
    }
}

let queue = new Queue<number>();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);

console.log(queue.pop())

let queueArray = new Queue<number[]>();
queueArray.push([1, 2]);
queueArray.push([3, 4]);
queueArray.push([5, 6]);
queueArray.push([7, 8]);

console.log(queueArray.pop());