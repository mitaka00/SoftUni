<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>

</head>
<body>
    <form>
        X: <input type="text" name="num1" />
		Y: <input type="text" name="num2" />
        Z: <input type="text" name="num3" />
		<input type="submit" />
    </form>
    <?php
        function Isnegative(int $number)
        {
            if($number<0)
            {
                return true;
            }
            return false;
        }
        if(isset($_GET['num1']) && isset($_GET['num2']) && isset($_GET['num3']))
        {
            $num1=intval($_GET['num1']);
            $num2=intval($_GET['num2']);
            $num3=intval($_GET['num3']);

            $count=0;
            if($num1==0 || $num2==0 || $num3==0)
            {
                echo "positive";
            }
            else
            {
                if(Isnegative($num1))
                {
                    $count++;
                }
                if(Isnegative($num2))
                {
                    $count++;
                }
                if(Isnegative($num3))
                {
                    $count++;
                }

                if($count%2==0)
                {
                    echo "positive";
                }
                else
                {
                    echo "negative";
                }
            }
        }
    ?>
</body>
</html>