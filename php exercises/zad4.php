<form>
 <div>num1<input type="text" name="num1"></div>
    <br>
    <div>num2<input type="text" name="num2"></div>
    <br>
    <div>num3<input type="text" name="num3"></div>
    <br>
    <input type="submit" value="checker">

</form>

<?php
if(isset($_GET['num1'])&& isset($_GET['num2'])&& isset($_GET['num3'])){
    $counter=0;
    $number1=$_GET['num1'];
    $number2=$_GET['num2'];
    $number3=$_GET['num3'];
    if($number1<0){
        $counter++;
    }
    if($number2<0){
        $counter++;
    }
    if($number3<0){
        $counter++;
    }
    if($counter%2==0 || $number1==0 || $number2==0 || $number3==0){
        echo "positive";
    }
    else{
        echo "negative";
    }
}