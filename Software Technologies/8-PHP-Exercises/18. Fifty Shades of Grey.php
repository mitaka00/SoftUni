<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>
    <style>
        div {
            display: inline-block;
            margin: 5px;
            width: 20px;
            height: 20px;
        }
    </style> 
</head>
<body>
    <?php
        $colorIndex=0;
        for($row=0;$row<5;$row++)
        {
            $colorInDiv=$colorIndex;
            for($col=0;$col<10;$col++)
            {
                echo "<div style='background-color: rgb($colorInDiv,$colorInDiv,$colorInDiv)'></div>";
                $colorInDiv+=5;

            }
            echo "<br/>";
            $colorIndex+=51;
        }
    ?>
</body>
</html>