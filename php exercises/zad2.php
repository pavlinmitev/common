<form>
    <div>number1 <input type="text" name="num1"></div>
    <br>
    <div>number2 <input type="text" name="num2"></div>
    <br>
    <input type="submit"value="Submit">


</form>

<?php
if(isset($_GET['num1'])&& isset($_GET['num2'])){
    $number1=$_GET['num1'];
    $number2=$_GET['num2'];
    $result = $number1*$number2;
    echo $result;
}
else{
    echo "numbers required";
}