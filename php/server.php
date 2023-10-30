<?php 

$jsonString = file_get_contents('../json/toDoList.json');

$list = json_decode($jsonString);



header('Content-Type: application/json');
echo json_encode($list);
?>
