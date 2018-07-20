<form>
    <input type="number" name="num">
    <input type="submit" value="submit">
</form>
<?php
for($i=1;$i<=$_GET['num'];$i++){
    if(isset($_GET['num']) && $i%2==0) {
        echo "$i ";
    }
}