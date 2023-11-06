class Product {
    private _name: string;
    protected _ref: number = 1000;

    constructor(name: string) {
        this.name = name;
    }
    
    set name(name: string) {
        this._name = name;
    }

    set ref(ref: number) {
        this._ref = ref;
    }
    
    get name():string {
        return this._name;
    }

    get ref():number {
        return this._ref;
    }
}

let product = new Product('Canard')

product.ref= 513
console.log(product)
product.name='phone'
console.log(product)