<form>
   <div>num1<input type="text" name="num1"></div>
    <div>num2<input type="text" name="num2"> </div>
    <input type="submit" name="Submit values">


</form>

<?php
if(isset($_GET['num1'])&&isset($_GET['num2'])){
    $number1=$_GET['num1'];
    $number2=$_GET['num2'];
    if($number1<$number2){
        echo $number1*$number2;
    }
    else{
        echo $number1/$number2;
    }


}
else{

        echo "enter numbers";



}