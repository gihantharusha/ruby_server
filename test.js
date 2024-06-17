// const string = "my name is gihan";
// const string = "i have a cow";

// const stopwords = ["is", "am", "are", "a"];

// const storage = [
//   "your name is gihan",
//   "your mother name is priyanthi",
//   "you area student",
// ];

// const animal = ["dog", "cat"];

// const friend = ["nethsara", "sanuda"]

// const split = string.split(" ");

// const have = new Array();

// split.map((e) => {
//   stopwords.map((t) => {
//     if (e == t) {
//       console.log(e);
//       have.push(t);
//     }
//   });
// });

// have.map((i) => {
//   delete split[split.indexOf(i)];
// });

// animal.map((a) => {
//   if(string.search(a) >= 0){
//     console.log("ok")
//   }else{
//     console.log("no")
//   }

// });

// split.map(e=>{
//     storage.map(i=>{
//         if(i.search(e) >= 0){
//             console.log("no")
//         }else{
//             console.log(e)
//         }
//     })

//     console.log("///////////")
// })


let str = "add todo as read a book in 2024/6/12"

let withoutAddTodo = str.replace("add todo as ", "")
let withoutSymble = withoutAddTodo.replace(  /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "")
let withoutNumbers = withoutSymble.replace(/[0-9]/g, "").trim()
const todo = withoutNumbers.replace(/\w+[.!?]?$/, '')
console.log(todo)

let withOutAddTodoDate = str.replace("add todo as ", "")
let withoutTodoDate = withOutAddTodoDate.replace(todo, "")
let withoutInDate = withoutTodoDate.replace('in', "").trim()
console.log(withoutInDate)





























