<?php
header('Access-Control-Allow-Origin: *');
include("connection.php");
$query ="SELECT * FROM petsitters WHERE status='Available'";
$stmt =  $connection->prepare($query);
$stmt->execute();
$results= $stmt->get_result();
$temp_array = [];
while($row = $results->fetch_assoc()){
	$temp_array[]=$row;
}
$json =json_encode($temp_array);
echo $json;

?>