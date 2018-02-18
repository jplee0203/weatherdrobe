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

$city = $_POST['city'];
$country = $_POST['country'];
$lat = $_POST['latitude'];
$lng = $_POST['longitude'];


$sql = "insert into search_result (city,country,latitude,longitude) values ('$city','$country','$lat', '$lng')";

$result = mysqli_query($conn, $sql);

$conn->close();

?>