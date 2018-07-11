function ind(arrayz){
    let a=Number(arrayz[0]);
    let result=[];
   for(let i=0;i<a;i++){
       result[i]=0;
   }
for(let i=1;i<arrayz.length;i++){
       let split=arrayz[i].split(" - ");
       let index=split[0];
       let s=split[1];
       result[index]=s;
}
    for(let i=0;i<result.length;i++){
       console.log(result[i]);
    }
}
