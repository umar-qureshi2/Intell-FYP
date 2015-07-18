<?php
/**
 * Created by JetBrains PhpStorm.
 * User: microsoftLT
 * Date: 5/12/14
 * Time: 5:39 PM
 * To change this template use File | Settings | File Templates.
 */
include "dbconnect.php";
include "header.php";
//include "banner.php";
?>
    <div style="margin: 10px;padding:10px;" class="container">
        <div class="" style="text-align: center;margin: 0 auto;padding: 0 auto;">
            Latest Graph

            <p><p></p></p>
            <!--
                    <script src="Chart.js"></script>
                        <meta name = "viewport" content = "initial-scale = 1, user-scalable = no">
                        <style>
                    canvas{
                    }
                        </style>
                        <canvas id="canvas" height="450" width="600"></canvas>
                      <script>
                        var lineChartData = {
                        labels : ["January","February","March","April","May","June","July"],
                            datasets : [
                                {
                                    fillColor : "rgba(220,220,220,0.5)",
                                    strokeColor : "rgba(220,220,220,1)",
                                    pointColor : "rgba(220,220,220,1)",
                                    pointStrokeColor : "#fff",
                                    data : [65,59,90,81,56,55,40]
                                },
                                {
                                    fillColor : "rgba(151,187,205,0.5)",
                                    strokeColor : "rgba(151,187,205,1)",
                                    pointColor : "rgba(151,187,205,1)",
                                    pointStrokeColor : "#fff",
                                    data : [28,48,40,19,96,27,100]
                                }
                            ]

                        }

                    var myLine = new Chart(document.getElementById("canvas").getContext("2d")).Line(lineChartData);

                    </script>
            -->
            <?php

            $result = GetFileData($_SESSION['userid']);
            //echo $result;
            if ($result) {
                //$row = mysqli_fetch_row($result);
                while ($row = mysqli_fetch_array($result)) {
                    //echo $row;
                    $data = $row[0];
                    if ($data) {
                        //echo $data;
                        $items = explode(" ", $data);
                        $start = $items[0];
                        $stop = $items[1];
                        $step = $items[2];

                        //echo "$start $stop $step";
                        echo '<script src="Chart.js"></script>
                                <meta name = "viewport" content = "initial-scale = 1, user-scalable = no">
                                <style>
                            canvas{
                            }
                                </style>
                                <canvas id="canvas" height="450" width="600"></canvas>
                              <script>
                                var lineChartData = {
                                labels : [';

                        for (; $start <= $stop; $start += $step) {
                            echo '"' . $start . '"';
                            if ($start + $step <= $stop) echo ',';
                        }

                        echo '],
                            datasets : [
                                {
                                    fillColor : "rgba(218,185,20,0.3)",
                                    strokeColor : "rgba(121,162,97,1)",
                                    pointColor : "rgba(25,177,60,1)",
                                    pointStrokeColor : "#fff",
                                    data : [';


                        $cpuresults = " ";
                        $gpuresult = " ";

                        for ($i = 3; $i < count($items) - 1; $i += 1) {
                            $cpuresults .= "$items[$i]";
                            $i += 1;
                            $gpuresult .= "$items[$i]";
                            if ($i < (count($items) - 2)) {
                                $cpuresults .= ",";
                                $gpuresult .= ",";
                            }
                        }

                        echo $cpuresults;
                        echo ']
                                },
                                {
                                    fillColor : "rgba(121,162,97,0.3)",
                                    strokeColor : "rgba(31,35,39,1)",
                                    pointColor : "rgba(52,56,59,1)",
                                    pointStrokeColor : "#fff",
                                    data : [';
                        echo $gpuresult;
                        echo ']
                    }
                ]

            }

        var myLine = new Chart(document.getElementById("canvas").getContext("2d")).Line(lineChartData);

        </script>';


                    }
                }
            }



            ?>

        </div>
    </div>




<?php
include "footer.php";


?>