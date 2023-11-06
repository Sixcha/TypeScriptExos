interface Duck {
    name: string;
    swim(): string;
}

class Thing implements Duck {
    name: string = "Duck"
    
    swim(): string {
        return "Nage comme un canard"
    }
}

let duck = new Thing

console.log(duck.name + "" + duck.swim())