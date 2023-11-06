abstract class Music {
    
    protected _instrument: string;
    abstract makeSound(): string;
    
    public get instrument() : string {
        return this._instrument
    }
    
    
    play(): string {
        return "play music";
    }
}


class Guitar extends Music {
    protected _instrument: string = "Guitar"

    makeSound(): string {
        return "Guitar Sounds"
    }
}

let guitar = new Guitar
console.log(guitar)
console.log(guitar.play())
console.log(guitar.makeSound())