<form>
<div>number <input type="number" name="num"></div>
    <br>
<div><button type="submit">submit</button></div>
</form>

<?php
$first=0;
$number=intval($_GET['num']);
$seq=1;
$second=1;
echo "1 ";
for($i=1;$i<$number;$i++){
$seq=$first+$second;
echo "$seq ";
$first=$second;
$second=$seq;
}
