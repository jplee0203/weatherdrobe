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

$current_condition = $_POST['current_condition'];
$description = $_POST['description'];
$current_temp = $_POST['current_temp'];
$high_temp = $_POST['high_temp'];
$low_temp = $_POST['low_temp'];


$sql = "insert into weather (current_condition,description,current_temp,high_temp, low_temp) values ('$current_condition','$description','$current_temp', '$high_temp', '$low_temp')";

$result = mysqli_query($conn, $sql);

$conn->close();

?>