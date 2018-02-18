<?php

header('Access-Control-Allow-Origin:*');

$host="localhost"; 
$username="root";  
$password="root";
$db_name="wd"; 

$conn = new mysqli($host, $username, $password, $db_name);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT * FROM weather INNER JOIN search_result  ORDER BY weather.id DESC LIMIT 1";

$result = $conn->query($sql);

$row = mysqli_fetch_assoc($result);

$json = array(
    'current_condition' => $row['current_condition'],
    'description' => $row['description'],
    'current_temp' => $row['current_temp'],
    'high_temp' => $row['high_temp'],
    'low_temp' => $row['low_temp']
);


    
echo json_encode($json);

//else {
//    echo "No HighScore";
//}

$conn->close();

?>