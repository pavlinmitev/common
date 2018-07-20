<form>
number <input type="number" name="num">

<button type="submit" >Submit</button>
</form>

<?php
if(isset($_GET['num'])) {
    $number = $_GET['num'] * 2;
    echo "$number";
}
else{
    echo "enter a number";
}