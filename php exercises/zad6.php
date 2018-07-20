<form>
    <input type="number" name="num">
    <input type="submit" value="submit">
</form>
<?php
for($i=intval($_GET['num']);$i>0;$i--){
    echo "$i ";
}