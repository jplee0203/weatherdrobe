<?php

header('Access-Control-Allow-Origin:*');

$host="localhost"; 
$username="root";  
$password="root";
$db_name="wd"; 

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