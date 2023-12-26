class User{
    isAdmin = false;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi() {
        console.log(`Hi`,this.name);
    }
}

class Admin extends User { 
    constructor(name, age) {
        super(name, age);
        this.isAdmin = true;
    } 
    lock() { 
        console.log('Lock system');
    }
}

let admin1 = new Admin('danny', 30);

console.log(admin1)
admin1.sayHi();