<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>

</head>
<body>
    <form>
        N: <input type="text" name="num" />
        <input type="submit" />
    </form>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>First Steps Into PHP</title>

    </head>
    <body>
    <form>
        N: <input type="text" name="num" />
        <input type="submit" />
    </form>
    <?php
    if(isset($_GET['num'])) {
        $num = intval($_GET['num']);

        $allNumbers = array();

        for ($i = $num; $i >= 1; $i--) {
            $prime=true;
            for($y=2;$y<=$i/2;$y++)
            {
                if($i%$y==0)
                {
                    $prime=false;
                }
            }
            if($prime==true)
            {
                $allNumbers[]=$i;
            }
        }
        echo implode(" ",$allNumbers);
    }
    ?>
    </body>
    </html>
</body>
</html>