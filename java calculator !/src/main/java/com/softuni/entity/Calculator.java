package com.softuni.entity;

public class Calculator {
    private double leftOperand;
    private String operator;
    private double rightOperand;

    public double getLeftOperand() {
        return leftOperand;
    }

    public void setLeftOperand(double leftOperand) {
        this.leftOperand = leftOperand;
    }

    public String getOperator() {
        return operator;
    }

    public void setOperator(String operator) {
        this.operator = operator;
    }

    public double getRightOperand() {
        return rightOperand;
    }

    public void setRightOperand(double rightOperand) {
        this.rightOperand = rightOperand;
    }

    public Calculator(double leftOperand, String operator, double rightOperand) {
        this.leftOperand = leftOperand;
        this.operator = operator;
        this.rightOperand = rightOperand;
    }
    public double calculate(){
        double result=0;
        switch (this.operator){
            case "+":
               result=this.leftOperand+this.rightOperand;
               break;
            case "-":
                result=this.leftOperand-this.rightOperand;
                break;
            case "*":
                result=this.leftOperand*this.rightOperand;
                break;
            case "/":
                result=this.leftOperand/this.rightOperand;
                break;
            case "f":
                double[] arr= new double[(int)(this.leftOperand+1)];
                result=fib(this.leftOperand,arr);
                break;

        }
        return result;
    }
    private double fib(double leftOperand,double arr[]){
if(leftOperand<3){
    return 1;
}
int index=(int) leftOperand;
if(arr[index]!=0){
    return arr[index];
}
        return arr[index]= fib(leftOperand-1,arr)
                +fib(leftOperand-2,arr);
    }
}
