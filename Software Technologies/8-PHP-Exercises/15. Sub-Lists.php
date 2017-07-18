<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>

</head>
<body>
<form>
     <input type="text" name="num1" />
     <input type="text" name="num2" />
    <input type="submit" />
</form>
<?php
if(isset($_GET['num1']) && isset($_GET['num2']))
{
$num1=$_GET['num1'];
$num2=$_GET['num2'];
?>
<ul>
    <?php
    for($i=1;$i<=$num1;$i++)
    {
        echo "<li>List $i</li>";
        ?>
        <ul>
            <?php
            for($y=1;$y<=$num2;$y++)
            {
                echo "<li>Element $i.$y</li>";
            }
            ?>
        </ul>
        <?php
    }
    }
    ?>
</ul>
</body>
</html>