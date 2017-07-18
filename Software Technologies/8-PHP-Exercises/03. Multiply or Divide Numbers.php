<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>

</head>
<body>
<?php
    if(isset($_GET['num1']) && isset($_GET['num2']))
    {
        $num1=floatval($_GET['num1']);
        $num2=floatval($_GET['num2']);
    }

    if($num2>=$num1)
    {
        $result=$num2*$num1;
    }
    if($num1>$num2 && $num2!=0)
    {
        $result=$num1/$num2;
    }

    echo $result;
?>
    <form>
        N: <input type="text" name="num1" />
		M: <input type="text" name="num2" />
        <input type="submit" />
    </form>

</body>
</html>