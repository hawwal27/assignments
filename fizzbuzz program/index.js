console.log("question number 4")
let k;
for(k=1; k<=100; k++){
    if(k % 15 ===0){
        console.log("fizzbuzz")
    }else if(k % 5===0){
        console.log("buzz")
    }else if (k %3 ===0){
        console.log("fizz")
    }else{
        console.log(k)
    }
}