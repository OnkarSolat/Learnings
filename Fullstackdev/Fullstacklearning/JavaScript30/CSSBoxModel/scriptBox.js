// var a = 1;
// console.log("Hey its Onkar");
// let b = 'str';
// let arr = [1,3,"five",6];


// for(let i=0 ; i<arr.length; i++){
//     console.log(arr[i]);
// }
// console.log();
// const map = {a: 1, b: 2 , c: 3};

// for(var key in map){
//     console.log(map[key]);
// }

// //Type coersion
// var x = 3;
// var y = "Three";
// console.log(x + y);

// Scope 

// Global Scope
// Block Scope
// Function Scope

// var globalVariable = "Global Variable ";

// function sendMessage(){
//     var a = 5;
//     console.log("a in functional scope: "+ a);
//     return globalVariable;
// }
// // //console.log("a in global scope: "+ a);
// // function sendSMS2(){
// //     return sendMessage();
// // }

// // console.log(sendMessage());
// // console.log(sendSMS2());


// // Block Scope
// // {
// //     let x = 45;
// //     var y = 72;
// // }

// // //console.log(x); x cannot be accessed
// // console.log(y);

// window.addEventListener("scroll",()=>{
//     const node = document.getElementById("div2");
//     node.innerHTML = `innerHeight ${Window.innerHeight} PageYOffset ${window.pageYOffset}`;
// });


//Default Binding
//decied the call site
///const a ="Hello";

// function foo(){
//     console.log("This is :", this); // Equivalent to console.log(window);
//     console.log("This is :", this.a); // Equivalent to console.log(window.a) ie:"Hello";
// }

// foo();

// const a ={
//     caller: "Some Person",
//     foo:function(){
//         console.log(this.caller);
//     },
// };

// const caller = "Some Other Person";

// a.foo();

// let storedFunction = a.foo();
//console.log(this.a);


//Explicit Binding
//Bind , Call ,Apply


// var pokemon={
//     firstname : "Pika",
//     lastname : "Chu",

//     getPokeName: function(snack){
//         var fullname = this.firstname + this.lastname;
//         return fullname;
//     },

// };

// var pokemonName = function (snack, toppings) {
//     console.log(this.getPokeName() + " I choose you with " + snack + " with toppings " + toppings) ;
// };

// //********************Bind*******************************//
// //This copies the contents of mentioned reference//


// // var logPokemon = pokemonName.bind(pokemon);
// // console.log("Bind Keyword: ")
// // logPokemon();


// //******************Call KeyWord********************//
// //This calls the actual function mentioned as a parameter
// // We can pass additional parameters using call keyword

// console.log("Call Keyword: ");
// pokemonName.call(pokemon,"pizza","jalepeno");

// //***********************apply keyword******************//
// // Apply is similar to call , just the difference is addition arguments are passed using array//
// console.log("Apply Keyword");
// pokemonName.apply(pokemon,["pizza","jalepeno"]);





///***************************Exceptions => Arrow FIunctions*********************************//

// function foo{
//     return "hello";
// }

// const foo=()=> "hello";  //Same as above



//note1: Arrow function adapt **this binding** of enclosing scope
//note2: Lexical bindings of Arrow functions cannot be overridden (even expilicitly)

// function foo(){
//     return (a) => {
//         console.log(this.a);
//     };

// }

// var obj1 = {a : 2};
// var obj2 = {a : 3};
// var bar = foo.call(obj1);
// bar.call(obj2);             //Even if we call with obj2 , according to Note2 mentioned above bar object binding cannot be overridden  


function foo(){
    setTimeout(() => {
        console.log(this.a);
    },1000)
}

var obj = {a :2 };
foo.call(obj);