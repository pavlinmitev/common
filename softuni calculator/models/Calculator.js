function Calculator(leftOperand, operator, rightOperand) {
    this.leftOperand=leftOperand;
    this.operator=operator;
    this.rightOperand=rightOperand;
this.calculateResult=function() {
    let result= 0;

   switch (this.operator){
       case "+":
           result = this.leftOperand + this.rightOperand;
           break;
       case "-":
           result = this.leftOperand - this.rightOperand;
           break;
       case "*":
           result = this.leftOperand * this.rightOperand;
           break;
       case "/":
           result = this.leftOperand / this.rightOperand;
           break;
       case"mm":
           result=this.leftOperand*1000;

   }
   return result;
}

}
module.exports=Calculator;