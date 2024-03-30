// let sum = 0;
// for(let i = 0;i<=100 ;i++){
//     sum = sum+1;
// }
// console.log("sum =",sum);

// while loop
// let i = 1;
// while(i<=5){
//     console.log("apna clg");
//     i++;
// }


// do whileloopp

// let i=20;
// do{
//     console.log("apna clg");
//     i++;

// }
// while(i<=5);


// let str ="javascript"
// for(let i of str){
//     console.log("i=",i);
    
// }

// question

    // let num;
    // for(num=0;num<=100;num++){
    //     if(num %2==0){
    //         console.log("num=",num);
    //     }
    // }

    // creat game
    let gamenum = 26;
    let username = prompt("Guess th enumber");
    console.log(username);
    while(username!=gamenum){
        username = prompt("you entered wrong number.guess again:");

    }
    console.log("congratulation,you entered the right number")
    


