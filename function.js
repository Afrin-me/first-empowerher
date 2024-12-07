// function greetUser(){
//     return "hello, User!";
// }

// let result = greetUser()
// console.log(result)

// function greet(name = "Guest") {
//   return "Hello, " + name;
// }
// console.log(greet());


  

function printTriangle(n) {
  for (var i = 1; i <= n; i++) {
    let a = "";
    for (var j = 1 ; j <=i; j++) {
      a = a + j + " ";
    }
    console.log(a)
    
  }

}

printTriangle(4);




