function jsun(arr){
for(let i=0;i<arr.length;i++){
    let result=JSON.parse(arr[i]);
   for(let key in result){
       console.log(key[0].toUpperCase() + key.substr(1,key.length)+": "+ result[key]);
   }
}

}
jsun(['{"Name":"Gosho","Age":10,"Date":"19/06/2005"}',
    '{"Name":"Tosho","Age":11,"Date":"04/04/2005"}'
    ]);