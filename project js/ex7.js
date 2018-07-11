function solveit(arr) {
    let result={};
    let key=arr[arr.length-1];
    for(let i=0;i<arr.length-1;i++){
        let splitted=arr[i].split(" ");
        let k=splitted[0];
        let v=splitted[1];
        result[k]=v;

    }

    console.log(result[key] || "None");
}
solveit(['key value','key eulav','test tset','key']);