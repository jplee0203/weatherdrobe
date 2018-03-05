<?php

header('Access-Control-Allow-Origin:*');


$host="127.0.0.1";
$username="jplee603_wd";  
$password="123456789";
$db_name="jplee603_weatherdrobe"; 


$conn = new mysqli($host, $username, $password, $db_name);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
//echo "Connected successfully </br>";


mysqli_select_db($conn, "$db_name");

$day1_condition = $_POST['day1_condition'];
$day1_description = $_POST['day1_description'];
$day1_high_temp = $_POST['day1_high_temp'];
$day1_low_temp = $_POST['day1_low_temp'];
$day1_date = $_POST['day1_date'];

$day2_condition = $_POST['day2_condition'];
$day2_description = $_POST['day2_description'];
$day2_high_temp = $_POST['day2_high_temp'];
$day2_low_temp = $_POST['day2_low_temp'];
$day2_date = $_POST['day2_date'];

$day3_condition = $_POST['day3_condition'];
$day3_description = $_POST['day3_description'];
$day3_high_temp = $_POST['day3_high_temp'];
$day3_low_temp = $_POST['day3_low_temp'];
$day3_date = $_POST['day3_date'];

$day4_condition = $_POST['day4_condition'];
$day4_description = $_POST['day4_description'];
$day4_high_temp = $_POST['day4_high_temp'];
$day4_low_temp = $_POST['day4_low_temp'];
$day4_date = $_POST['day4_date'];

$day5_condition = $_POST['day5_condition'];
$day5_description = $_POST['day5_description'];
$day5_high_temp = $_POST['day5_high_temp'];
$day5_low_temp = $_POST['day5_low_temp'];
$day5_date = $_POST['day5_date'];


$sql = "insert into weather (wCondition,wDesc,highTemp,lowTemp, date) values 
('$day1_condition','$day1_description','$day1_high_temp', '$day1_low_temp', '$day1_date'),
('$day2_condition','$day2_description','$day2_high_temp', '$day2_low_temp', '$day2_date'),
('$day3_condition','$day3_description','$day3_high_temp', '$day3_low_temp', '$day3_date'),
('$day4_condition','$day4_description','$day4_high_temp', '$day4_low_temp', '$day4_date'),
('$day5_condition','$day5_description','$day5_high_temp', '$day5_low_temp', '$day5_date')";

/*,
('$day1_condition','$day1_description','$day1_high_temp', '$day1_low_temp', '$day1_date')
('$day2_condition','$day2_description','$day2_high_temp', '$day2_low_temp', '$day2_date'),
('$day3_condition','$day3_description','$day3_high_temp', '$day3_low_temp', '$day3_date'),
('$day4_condition','$day4_description','$day4_high_temp', '$day4_low_temp', '$day4_date'),
('$day5_condition','$day5_description','$day5_high_temp', '$day5_low_temp', '$day5_date')
*/

$result = mysqli_query($conn, $sql);

$conn->close();

?>