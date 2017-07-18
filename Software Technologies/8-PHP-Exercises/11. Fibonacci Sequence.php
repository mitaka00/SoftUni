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
        $allNumbers[] = 1;

        $currentNum = 1;
        $prevNum = 0;

        for ($i = 1; $i <= $num; $i++) {
            $temp = $prevNum;
            $prevNum = $currentNum;
            $currentNum = $temp + $prevNum;
            $allNumbers[] = $currentNum;
        }
        echo implode(" ",$allNumbers);
    }
    ?>
</body>
</html>