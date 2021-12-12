<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

include("connection.php");

$data = json_decode(file_get_contents("php://input"));


$phone_num = $data->phone_num;
$username= $data->username;
$password=hash("sha256",$data->password);

$address= $data-> address;
$mysql=$connection->prepare("INSERT INTO users(phone_num,username,password,address) VALUES (?,?,?,?)");
$mysql->bind_param("ssss",$phone_num,$username, $password, $address);
$mysql->execute();

$mysql->close();
$connection->close();

?>