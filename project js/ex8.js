function solveit(arr) {
    let result={};
    let key=arr[arr.length-1];
    for(let i=0;i<arr.length-1;i++){
        let splitted=arr[i].split(" ");
        let k=splitted[0];
        let v=splitted[1];
        if(result[k]==undefined) {
            result[k] = [];
            result[k].push(v);
        }
        else{
            result[k].push(v);
        }

    }
    if(result[key]==undefined) {
        console.log("None");
    }
    else{
        let v=result[key];
        for(let num of v){
            console.log(num);
        }
    }


}
solveit(['key value','key eulav','test tset','key']);