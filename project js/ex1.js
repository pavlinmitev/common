function addord(arr) {
    let array = [];
    for(let i=0;i<arr.length;i++) {
        let result=arr[i].split(" ");
        let word = result[0];
        let n = Number(result[1]);

        if (word == "add") {
            array.push(n);
        }
        if(word=="remove"){
            array.splice(n,1);
        }

    }
   for(let i=0;i<array.length;i++){
        console.log(array[i]);
   }
}
addord(['add 3','add 2','add 4','remove 1']);