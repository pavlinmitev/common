<form>
    <input type="number" name="num">
    <input type="submit" value="submit">
</form>
<?php
if(isset($_GET['num'])) {
    for ($i = intval($_GET['num']); $i > 0; $i--) {
        if ($_GET['num'] % $i != 0) {
            echo "$i ";
        }
    }
}
else{
    echo "nums";
}
