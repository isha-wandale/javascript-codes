 
    // function myfunction(msg, n){
    //     console.log(msg);
    // }

    // myfunction("I love JS");

//         function mul(a, b){
//             return a * b;
//         }

//         const arrowmul = (a, b) => {
//             console.log(a * b);
//         };
        
// function div(a, b){
//     return a / b;
// }
// const arrowdiv =(a, b) =>{
//     console.log(a / b);
// };

// QUESITIONS

// function countvowels(str){
//     let count = 0;
//     for(const char of str){
//         if(
//             char == "a"||  char == "e"||char=="i"||char=="o"||char=="u"
//             ){
//                 count++;
//             }
//     }

//     return count;
// }

// USING ARROW
// const countvow=(str) =>{
//    function countvowels(str){
//     let count = 0;
//     for(const char of str){
//         if(
//             char == "a"||  char == "e"||char=="i"||char=="o"||char=="u"
//             ){
//                 count++;
//             }
//     }
//    }
//     return count;

//    }

    // let arr =["pune", "mumbai","delhi"];
    // arr.forEach((val, idx,arr) =>{
    //     console.log(val,idx,arr);
    // });

    // let arr = [2, 3, 4, 5, 55];
    // arr.forEach((arr)=>{
    //     console.log(arr * arr);
    // });


    // *******FILTER***********

    // question 1


    // let marks = [49, 50, 90, 91, 92];
    // let newarr = marks.filter((val) =>{
   
    //        return val> 90;
    // })
    // console.log(newarr);


        // reduce method
    //     let n = prompt("Enter a num");
    //    let arr = [];
    //    for(let i = 1; i<=n; i++){
    //         arr[i-1] = i;
    //    }
    //    console.log(arr);

    //   let sum = arr.reduce((sum, current)=>{
    //     return sum * current;
    //    })
    //    console.log(sum);


    // FACTORIAL

       let n = prompt("enter a number");
       let arr =[];
       for(let i = 1;i <= n; i++){
          arr  [i-1] = i;
         }
         console.log(arr);

         let factorial = arr.reduce((result, current)=>{
            return result * current;
         })
         console.log("factorial = ",factorial);
         