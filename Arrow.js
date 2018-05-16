var square = n =>  n * n ;
console.log(square(3));

var user = {
    name:"sreekanth",
    say: () => {
        console.log(`Hi dude i m ${this.name}`);
    },
    sayH () {
        console.log(arguments);
        console.log(`Hi dude i m ${this.name}`);
    }
};
user.sayH(1,2,3);