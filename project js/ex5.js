function stringi(arr) {
    let obj={};
    for (let i = 0; i < arr.length;i++){
        let splitt=arr[i].split(" -> ");
        let first=splitt[0];
        let second=splitt[1];
        if(Number(second)) {
            obj[first] = Number(second);
        }
        else{
            obj[first] = second;
        }

    }
    console.log(JSON.stringify(obj));
}
stringi(["name -> Angel"
    ,"surname -> Georgiev",
"age -> 20",
"grade -> 6.00",
"date -> 23/05/1995",
"town -> Sofia)"])